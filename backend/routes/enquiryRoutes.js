const express = require("express");

const {
  createProjectEnquiry,
} = require("../controllers/enquiryController");

const router = express.Router();

router.post("/", createProjectEnquiry);

module.exports = router;