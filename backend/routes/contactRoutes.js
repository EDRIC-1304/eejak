const express = require("express");

const {
  updateContactDetails,
} = require("../controllers/contactController");

const router = express.Router();

router.put("/", updateContactDetails);

module.exports = router;