const express = require("express");
const { sport_categoryValidation } = require("../validations");
const { sport_categoryCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create sportgallery
router.post(
    "/create-sport_category",
    validate(sport_categoryValidation.createSportCategory),
    sport_categoryCantroller.createSportCategory
);

//get sport_category
router.get(
    "/list",
    sport_categoryCantroller.sportCtegoryList
);

 // dalete
router.delete(
    "/delete-sport_category/:sport_categoryId",
    sport_categoryCantroller.deleteRecord
);

// update
router.put(
    "/update/:sport_categoryId",
    sport_categoryCantroller.updateDetiles
);

module.exports = router;