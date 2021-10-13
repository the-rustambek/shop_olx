const users = require("../models/userModels");


module.exports = class messagesRouteController {
  static async messagesGetController(req, res) {

    try{
      const isValidId =  isValidObjectId(req.params?.id);
      if(!isValidId) throw new Error("Invalid");
      const receiver_id = await users.findOne({
        _id:req.params.id,
      })
      console.log(receiver_id);
      catch(error){
        console.log(error)
      }
    }


    // res.render("messages",{
    //   user:req.user,
    // })
  }
};
