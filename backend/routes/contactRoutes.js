const express = require("express");

const {
  updateContactDetails,
} = require("../controllers/contactController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.put("/", authMiddleware, updateContactDetails);

module.exports = router;