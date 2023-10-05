const express = require("express");
const { resultValidation } = require("../validations");
const { resultCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create result
router.post(
    "/create-result",
    validate(resultValidation.createResult),
    resultCantroller.createResult
);

//get result
router.get(
    "/list",
    resultCantroller.resultList
);

 // dalete
router.delete(
    "/delete-result/:resultId",
    resultCantroller.deleteRecord
);

// update
router.put(
    "/update/:resultId",
    resultCantroller.updateDetiles
);

module.exports = router;