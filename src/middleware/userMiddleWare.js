const  {checkToken
} =  require("../modules/jwt");
const users =  require("../models/userModels");
const sessions = require("../models/sessionsModel");



module.exports = async function userMiddleWare(req,res,next){
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

        const session = await sessions.findOne({
            _id: data.session_id,
        }).populate("owner_id");



        if(!session){
            next();
            return;
        }

        req.user =  session.owner_id;
        next()
    }
    catch(error){
        next();
    }
}