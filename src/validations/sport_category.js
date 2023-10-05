const Joi = require("joi");

/** create createSport_category */

const createSportCategory = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        sport_date: Joi.date(),
    }),
};

module.exports = {
    createSportCategory
};