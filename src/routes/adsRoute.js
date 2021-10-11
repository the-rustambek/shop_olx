const router = require("express").Router();
const adsGetRouteController = require("../controllers/adsRouteController");

router.get("/add",adsGetRouteController);

module.exports = {
    path:"/ads",
    router,
}