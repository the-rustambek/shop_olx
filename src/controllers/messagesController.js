const users = require("../models/userModels");
const {isValidObjectId} = require("mongoose");
const messages =  require("../models/messageModel");
const { $where} = require("../models/messageModel");
const { messageValidation } = require("../modules/validations");

module.exports = class messagesRouteController {
 
  static async messagesGetController(req, res) {

    try{
      const isValidId =  isValidObjectId(req.params?.id);
      if(!isValidId) throw new Error("Invalid");
      const receiver_id = await users.findOne({
        _id:req.params.id,
      })
      // console.log(receiver_id);

      if(!receiver_id) throw new Error("User not found");


      const chats = await messages.find({
        $or:[
         {
           $and:[
             {
              owner_id:req.user._id,
             },{
              receiver_id:receiver_id._id,
             }
           ],
          },
          {
           $and:[
            {
              receiver_id:req.user._id,

            },{
              owner_id:receiver_id._id,
            }
          ]
         }
        ]
      }).sort([["created_at",1]]);
     
      
      res.render("messages",{
        user:req.user,
        receiver:receiver_id,
        chats,
      });

    }
      catch(error){
        console.log(error)
        res.redirect("/");
      }
    }


    static async messagesPostController(req,res){
      try{
const {message_text } = await messageValidation(req.body);

if(!(isValidObjectId(req.user._id) && isValidObjectId(req.params?.id))
      }
      catch(error){
        console.log(error);
      }
    }


    // res.render("messages",{
    //   user:req.user,
    // })
  
};
