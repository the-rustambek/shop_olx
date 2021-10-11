const { categoryGetController } = require("../controllers/categoryController");

const router = require("express").Router();

router.get("/:id",categoryGetController)



module.exports = {
    path: "/category",
    router,
}