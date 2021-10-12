const mongoose =  require("mongoose");
require("../models/userModels");
require("../models/adsModel");
require("../models/categoryModel");
require("../models/sessionsModel");
require("../models/messageModel");

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