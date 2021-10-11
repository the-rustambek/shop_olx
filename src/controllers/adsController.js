const users = require("../models/userModels");
const categories  = require("../models/categoryModel");
const {addAdsValidation} =  require("../modules/validations")
const ads = require("../models/adsModel");
const path = require("path");

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

	let photos = [];
	if(Array.isArray(req.files.photos)){
		req.files.photos.forEach((photo) =>{
			console.log(photo);
		});
	}
	else{
		console.log(req.files.photos)
	}
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
	