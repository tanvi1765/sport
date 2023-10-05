const express = require("express");
const { upload } = require("../middlewares/upload");
const { sportgalleryValidation } = require("../validations");
const { sportgalleryCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create sportgallery
router.post(
    "/create-sportgallery",
    upload.single("sport_img"),
    validate(sportgalleryValidation.createsportGallery),
    sportgalleryCantroller.createsportGallery
);

//get sportgallery
router.get(
    "/list",
    sportgalleryCantroller.sportGalleryList
);

// dalete
router.delete(
    "/delete-sportgallery/:sportgalleryId",
    sportgalleryCantroller.deleteRecord
);

// update
router.put(
    "/update/:sportgalleryId",
    sportgalleryCantroller.updateDetiles
);

module.exports = router;