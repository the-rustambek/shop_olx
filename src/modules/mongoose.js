const mongoose =  require("mongoose");
const users =  require("../models/userModels");

async function mongo(){
  try{
    await mongoose.connect(process.env.MONGO_URL);

  }
  catch(error){
    console.log("MONGOERROR",error + "");
  }
}

module.exports = mongo;