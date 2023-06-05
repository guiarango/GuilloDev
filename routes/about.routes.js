const express = require("express");
const router = express.Router();

// Controller
const aboutController = require("../controllers/aboutController");

router.get("/about", aboutController.showPage);

module.exports = router;
