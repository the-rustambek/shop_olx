const router = require("express").Router();
const {homeGetController }=  require("../controllers/homeRouteController")

router.get("/",homeGetController)



module.exports = {
    path: "/",
    router,
}