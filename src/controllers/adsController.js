const users = require("../models/userModels");
const categories  = require("../models/categoryModel");
const {addAdsValidation} =  require("../modules/validations")
const ads = require("../models/adsModel");
const path = require("path");
const { modelName } = require("../models/userModels");

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
	if(Array.isArray(req.files.file)){
		req.files.file.forEach((photo) =>{
			// console.log(photo); // shu  yerda photo chiqmayapti
		const name =  photo.md5 + ".jpg";
		
			photo.mv(path.join(__dirname,"..","public","uploads",name));
			photos.push(name);

		});

	}
	else{
		const name = req.files.file.md5 + ".jpg";
		
		req.files.file.mv(path.join(__dirname,"..","public","uploads",name));
		photos.push(name);

		console.log(photos)
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
	