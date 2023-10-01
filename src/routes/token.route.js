const express = require("express");
const validate = require("../middlewares/validate");
const { tokenValidation } = require("../validations");
const { tokenCantroller } = require("../controllers");
const auth = require("../middlewares/auth");

const router = express.Router();

// Create jsonwebtoken
router.post(
  "/create-token",
  validate(tokenValidation.generateToken),
  tokenCantroller.generateToken
);

// Verify token
router.get(
  "/verify-token",
  auth(),
  tokenCantroller.verifyToken
);

module.exports = router;
