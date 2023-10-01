const express = require("express");
const { newsValidation } = require("../validations");
const { newsCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create news
router.post(
    "/create-news",
    validate(newsValidation.createNews),
    newsCantroller.createNews
);

// get news
router.get(
    "/list",
    newsCantroller.newsList
);

 // dalete
router.delete(
    "/delete-news/:newsId",
    newsCantroller.deleteRecord
);

// update
router.put(
    "/update/:newsId",
    newsCantroller.updateDetiles
);

module.exports = router;