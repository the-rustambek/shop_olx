const users = require("../models/userModels");
const categories  = require("../models/categoryModel");
const {addAdsValidation} =  require("../modules/validations")
const ads = require("../models/adsModel");
const path = require("path");
const { modelName } = require("../models/userModels");
const { default: slugify } = require("slugify");

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

		// console.log(photos) // bitta rasm massivda kelyapti


	}
	const slug = slugify(title,
		{lower:true, strict:true,replacement:"_"  }) + Date.now();

	let a =  await ads.create({
		title,
		description,
		price,
		address,
		photos,
		number,
		slug,
		category_id:category,
		owner_id:req.user._id,

	});
	console.log(a);

	res.redirect("/ads/"+slug);
	}
	catch(error){
		res.render("add_ads", {
			user: req.user,
			categories: await categories.find(),
			error: error + "",
		});
	}
}

static async adsOneGetController(req,res){
	const adsOne = await ads.findOne({
		slug:req.params.slug,
	}).populate("category_id");
	console.log(adsOne);
	res.render("ads_page",{
		ads:adsOne,
		user:req.user,
	});
}

};
	