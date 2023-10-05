const express = require("express");
const { teamValidation } = require("../validations");
const { teamCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create team
router.post(
    "/create-team",
    validate(teamValidation.createTeam),
    teamCantroller.createTeam
);

// get team
router.get(
    "/list",
    teamCantroller.teamList
);

// dalete
router.delete(
    "/delete-team/:teamId",
    teamCantroller.deleteRecord
);

// update
router.put(
    "/update/:teamId",
    teamCantroller.updateDetiles
);

module.exports = router;