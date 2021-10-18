
const mongoose =  require("mongoose");

const chatSchema = new mongoose.Schema({
  message_text: {
    type:String,
    required:true,
    maxlength:1024,
    minlength:2,
  },
 
  owner_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
      
  },

created_date:{
  type:Date,
  default:new Date(),
}
});

const chats = mongoose.model("chats",chatSchema);

module.exports =  chats;