const router = require("express").Router();
const {userRegGetController,userLoginGetController,userLoginPostController,userVerifyGetController,userSignUpPostController,userExitGetController,userProfileGetController} = require("../controllers/userRouteController");
const authMiddleWare = require("../middleware/authMiddleWare");

router.get("/signup",userRegGetController);
router.get("/login",userLoginGetController);
router.get("/verify/:id",userVerifyGetController);
router.post("/signup",userSignUpPostController);
router.get("/exit",userExitGetController);
router.post("/login",userLoginPostController)
router.get("/:id",authMiddleWare,userProfileGetController);

module.exports = {
    path: "/users",
    router,
}