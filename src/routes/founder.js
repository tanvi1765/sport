const express = require("express");
const { founderValidation } = require("../validations");
const { founderCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create founder
router.post(
    "/create-founder",
    validate(founderValidation.createFounder),
    founderCantroller.createFounder
);

// get founder
router.get(
    "/list",
    founderCantroller.founderList
);

 // dalete
router.delete(
    "/delete-founder/:founderId",
    founderCantroller.deleteRecord
);

// update
router.put(
    "/update/:founderId",
    founderCantroller.updateDetiles
);

module.exports = router;