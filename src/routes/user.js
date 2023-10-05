const express = require("express");
const { userValidation } = require("../validations");
const { userCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create user
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userCantroller.createUser
);

// get user
router.get(
    "/list",
    userCantroller.userList
);

 // dalete
router.delete(
    "/delete-user/:userId",
    userCantroller.deleteRecord
);

// update
router.put(
    "/update/:userId",
    userCantroller.updateDetiles
);

// send mile
router.post(
    "/send-mail",
    validate(userValidation.sendMail),
    userCantroller.sendMail
);

module.exports = router;