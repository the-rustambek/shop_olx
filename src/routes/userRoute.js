const router = require("express").Router();
const {userRegGetController,userLoginGetController,userLoginPostController,userVerifyGetController,userSignUpPostController,userExitGetController} = require("../controllers/userRouteController");

router.get("/signup",userRegGetController);
router.get("/login",userLoginGetController);
router.get("/verify/:id",userVerifyGetController);
router.post("/signup",userSignUpPostController);
router.get("/exit",userExitGetController);
router.post("/login",userLoginPostController)

module.exports = {
    path: "/users",
    router,
}