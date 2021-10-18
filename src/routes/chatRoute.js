const { chatGetController } = require("../controllers/chatController");
const router =  require("express").Router();
const authMiddleWare = require("../middleware/authMiddleWare");

router.use(authMiddleWare);
router.get("/",chatGetController);



module.exports = {
    path:"/chat",
    router,
}