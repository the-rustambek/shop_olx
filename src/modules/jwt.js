const jwt = require("jsonwebtoken");

module.exports.createToken =  async function createToken(data){
    return jwt.sign(data, process.env.JWT_SECRET_KEY);
}

module.exports.checkToken =  async function checkToken(token){
    try{
        return await jwt.verify(token, process.env.JWT_SECRET_KEY);
    }
    catch(error){
        return false;
    }
}