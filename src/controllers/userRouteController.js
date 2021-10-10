module.exports =  class userRouteController{
    static async userRegGetController(req,res){
       res.render("reg");
   }
   static async userLoginGetController(req,res){
    res.render("login");
}

static async userSignUpPostController (req,res){
    try {
        
    } catch (error) {
        console.log(error);
        res.render("reg",{
            error:error + "",
        }); 
        
    }
}
}