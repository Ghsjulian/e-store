const express = require("express");
const path = require("path");
const router = express.Router();
const USerController = require("../controllers/User.Controller");
const { ProductImg } = require("../utils/multer.config");
const uploadFolder = path.join(__dirname, "../public/products/");
const upload = ProductImg(uploadFolder);

router.post("/add-product",upload.fields([
        { name: "product_img", maxCount: 1 }
    ]), USerController.UserSignup);
router.put("/edit-product", USerController.UserLogin);

module.exports = router;
