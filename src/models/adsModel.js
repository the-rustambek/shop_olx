const mongoose =  require("mongoose");

const adsSchema = new mongoose.Schema({
  title: {
    type:String,
   
    required:true,
  },

  password:{
    type:String,
    required:true,
  },
  isVerified:{
    type:Boolean, 
    required:true,
    default:false,
  }
});

const users = mongoose.model("users",adsSchema);

module.exports =  users;