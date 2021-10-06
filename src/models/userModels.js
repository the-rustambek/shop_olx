const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type:String,
    max:[32,"Ismingiz juda uzun"],
    min:[3,"Ismingiz juda qisqa"],
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  }
});

const users = mongoose.model("users",userSchema);

module.exports =  users;