const router = require("express").Router();
const {adsAddGetController,adsAddPostController} = require("../controllers/adsController");
const fileUpload =  require("express-fileupload");


router.get("/add",adsAddGetController);
router.post("/add", fileUpload({
    saveFileNames:true,
})
,adsAddPostController);


module.exports = {
    path:"/ads",
    router,
}