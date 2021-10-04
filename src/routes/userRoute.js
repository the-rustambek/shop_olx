const router = require("express").Router();
const {userRegGetController,userLoginGetController} = require("../controllers/userRouteController");

router.get("/signup",userRegGetController);
router.get("/login",userLoginGetController);

module.exports = {
    path: "/users",
    router,
}