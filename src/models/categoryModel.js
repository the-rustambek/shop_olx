const mongoose =  require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  photo:{
    type:String,
default:"nophoto.png",
  },
});

const categories = mongoose.model("categories",categorySchema);

module.exports =  categories;