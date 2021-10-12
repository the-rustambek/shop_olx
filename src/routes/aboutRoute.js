const router = require("express").Router();
const {aboutGetController }=  require("../controllers/aboutController")


router.get("/",aboutGetController)



module.exports = {
    path: "/about",
    router,
}