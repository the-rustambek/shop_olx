const users = require("../models/userModels");
const categories  = require("../models/categoryModel");
const {addAdsValidation} =  require("../modules/validations")
module.exports = class adsRouteController {
	static async adsAddGetController(req, res) {
		res.render("add_ads", {
			user: req.user,
			categories: await categories.find(),
		});
  }
  static async adsAddPostController(req,res){
	try{
		const {title, description, price,number,address,category,file} =  await addAdsValidation(req.body);

		console.log(title,number,address,category,file,price,description)
	}
	catch(error){
		res.render("add_ads", {
			user: req.user,
			categories: await categories.find(),
			error: error + "",
		});
	}
}

};
	