const router = require("express").Router();
const {userRegGetController,userLoginGetController,userVerifyGetController,userSignUpPostController} = require("../controllers/userRouteController");

router.get("/signup",userRegGetController);
router.get("/login",userLoginGetController);
router.get("/verify/:id",userVerifyGetController);
router.post("/signup",userSignUpPostController);

module.exports = {
    path: "/users",
    router,
}