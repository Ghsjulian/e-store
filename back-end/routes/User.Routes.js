const express = require("express");
const path = require("path");
const router = express.Router();
const USerController = require("../controllers/User.Controller");

router.post("/signup", USerController.UserSignup);
router.post("/login", USerController.UserLogin);


module.exports = router;
