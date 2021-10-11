const  {checkToken
} =  require("../modules/jwt");
const users =  require("../models/userModels");
const authMiddleWare = require("../middleware/authMiddleWare")


module.exports = async function authMiddleWare(req,res,next){
    try{
        if(!req.cookies.token){
            next();
            return;

        }
        const data = await checkToken(req.cookies.token);

        if(!data){
            next();
            return;
        }

        const user = await users.findOne({
            _id: data.id,
        });
        console.log(user);
        req.user =  user;
        next();
    }
    catch(error){
        next();
    }
}