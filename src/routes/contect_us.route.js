const express = require("express");
const { contect_usValidation } = require("../validations");
const { contect_usCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create contect_us
router.post(
    "/create-contect_us",
    validate(contect_usValidation.createContect_us),
    contect_usCantroller.createContect_us
);

// get contect_us
router.get(
    "/list",
    contect_usCantroller.contect_usList
);

 // dalete
router.delete(
    "/delete-contect_us/:contect_usId",
    contect_usCantroller.deleteRecord
);

// update
router.put(
    "/update/:contect_usId",
    contect_usCantroller.updateDetiles
);

module.exports = router;