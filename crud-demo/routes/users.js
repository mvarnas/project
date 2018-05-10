const express = require("express");
const router = express.Router();

const user = require("../controllers/user");

// Get all users
router.get("/", user.list);

module.exports = router;
