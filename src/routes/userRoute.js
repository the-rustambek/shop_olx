const router = require("express").Router();
const {userRegGetController,userLoginGetController,userVerifyGetController,userSignUpPostController} = require("../controllers/userRouteController");

router.get("/signup",userRegGetController);
router.get("/login",userLoginGetController);
router.post("/signup",userSignUpPostController);
router.post("/verify/:id",userVerifyGetController)
module.exports = {
    path: "/users",
    router,
}