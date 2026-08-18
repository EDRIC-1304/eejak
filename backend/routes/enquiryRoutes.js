const express = require("express");

const {
  createEnquiry,
} = require("../controllers/enquiryController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createEnquiry);

module.exports = router;