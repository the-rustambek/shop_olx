const users = require("../models/userModels");
const categories  = require("../models/categoryModel");
const ads = require("../models/adsModel");
const {isValidObjectId} = require("mongoose");

module.exports = class categoryController {
  static async categoryGetController(req, res) {
    const {id} = req.params;



    if(!isValidObjectId(id)){
        res.redirect("/");
        return;

    }

const category =await categories.findOne({
    _id:id,
});

if(!category){
  res.redirect("/");
  return 0;
}

const category_ads = await ads.findOne({
  category_id:id,
})
    res.render("category",{
      user: req.user,
category:category,
category_ads,

    });
  }
};
