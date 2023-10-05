const express = require("express");
const { playerValidation } = require("../validations");
const { playerCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create player
router.post(
    "/create-player",
    validate(playerValidation.createPlayer),
    playerCantroller.createPlayer
);

// get player
router.get(
    "/list",
    playerCantroller.playerList
);

 // dalete
router.delete(
    "/delete-player/:playerId",
    playerCantroller.deleteRecord
);

// update
router.put(
    "/update/:playerId",
    playerCantroller.updateDetiles
);

module.exports = router;