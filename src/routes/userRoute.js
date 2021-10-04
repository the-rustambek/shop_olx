const router = require("express").Router();
const {userRegGetController} = require("../controllers/userRouteController")



router.get("/signup",userRegGetController);

module.exports = {
    path: "/users",
    router,
}