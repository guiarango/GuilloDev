const express = require("express");
const router = express.Router();

// Controller
const homeController = require("../controllers/homeController");

router.get("/", homeController.showPage);

module.exports = router;
