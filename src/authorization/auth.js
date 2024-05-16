require("dotenv").config();
const jwt = require("jsonwebtoken");

const verfiyToken = async (req, res) => {
  const refreshToken = req.headers["x-refresh-token"];
  const accessTokenBearer = req.headers["authorization"];

  if (!accessTokenBearer || !refreshToken) {
    throw { message: "Tokens Not Specified!" };
  }

  const accessToken = accessTokenBearer.split(' ')[1];


  return jwt.verify(refreshToken , process.env.REFRESH_SECRET_KEY , (refreshErr,decoded) => {
    if(refreshErr){
        throw {message : "User logged Out!"}
    }
    return jwt.verify(accessToken, process.env.ACCESS_SECRET_KEY , (accessErr) => {
        if(accessErr) {
            console.log("generating new token")
            const newToken = jwt.sign(decoded, process.env.ACCESS_SECRET_KEY);

            res.setHeader("Authorization" , `Bearer ${newToken}`);
            res.setHeader("x-refresh-token" , refreshToken);
            
        }

        res.setHeader("Authorization" , `Bearer ${accessToken}`);
        res.setHeader("x-refresh-token" , refreshToken);
        return decoded;

    })
  })
};

async function mainAuthorized(req,res,next) {
  try {
    console.log("main")
    const decoded = await verfiyToken(req,res);
    if(decoded){
      req.decoded = decoded; 
      next();
    }
    
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

const signToken = async (data) => {
  try {
    const privateKey = process.env.ACCESS_SECRET_KEY;
    const refreshKey = process.env.REFRESH_SECRET_KEY;

    let accessToken = jwt.sign(data, privateKey , {expiresIn : '1m'});
    let refreshToken = jwt.sign(data, refreshKey , {expiresIn : '50m'});

    let token = {
      accessToken,
      refreshToken,
    };

    return token;
  } catch (error) {
    throw { status: 401, message: "Error generating token" };
  }
};

module.exports = { mainAuthorized, signToken };
