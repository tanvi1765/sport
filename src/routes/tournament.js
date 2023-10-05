const express = require("express");
const { tournamentValidation } = require("../validations");
const { tournamentCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create tournament
router.post(
    "/create-tournament",
    validate(tournamentValidation.createTournament),
    tournamentCantroller.createTournament
);

// get tournament
router.get(
    "/list",
    tournamentCantroller.tournamentList
);

 // dalete
router.delete(
    "/delete-tournament/:tournamentId",
    tournamentCantroller.deleteRecord
);

// update
router.put(
    "/update/:tournamentId",
    tournamentCantroller.updateDetiles
);

module.exports = router;