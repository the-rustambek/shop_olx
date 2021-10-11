const router = require("express").Router();
const {adsAddGetController,adsAddPostController, adsOneGetController} = require("../controllers/adsController");
const fileUpload =  require("express-fileupload");


const fileUploadForAds  = fileUpload({
    saveFileNames:true,
});

router.get("/add",adsAddGetController);
router.post("/add",fileUploadForAds,adsAddPostController);
router.get("/:slug", adsOneGetController);


module.exports = {
    path:"/ads",
    router,
}