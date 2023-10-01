const express = require("express");
const { coachValidation } = require("../validations");
const { coachCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create coach
router.post(
    "/create-coach",
    validate(coachValidation.createCoach),
    coachCantroller.createCoach
);

// get coach
router.get(
    "/list",
    coachCantroller.coachList
);

 // dalete
router.delete(
    "/delete-coach/:coachId",
    coachCantroller.deleteRecord
);

// update
router.put(
    "/update/:coachId",
    coachCantroller.updateDetiles
);

module.exports = router;