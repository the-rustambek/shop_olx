const router = require("express").Router();
const {userRegGetController,userLoginGetController,userSignUpPostController} = require("../controllers/userRouteController");

router.get("/signup",userRegGetController);
router.get("/login",userLoginGetController);
router.post("/signup",userSignUpPostController)

module.exports = {
    path: "/users",
    router,
}