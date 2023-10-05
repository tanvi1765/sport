const Joi = require("joi");

/** create createsportgallery */

const createsportGallery = {
    body: Joi.object().keys({
        sport_img: Joi.string().allow(""),
    }),
};

module.exports = {
    createsportGallery
};