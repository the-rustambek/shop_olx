module.exports =  class userRouteController{
    static async userRegGetController(req,res){
       res.render("reg");
   }
   static async userLoginGetController(req,res){
    res.render("login");
}

}