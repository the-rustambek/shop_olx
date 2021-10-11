

module.exports = async function authMiddleWare(req,res,next){
    if(req.user){
        next();
    }
    else{
        res.redirect("/");
    }
 
}