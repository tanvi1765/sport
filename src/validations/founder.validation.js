const Joi = require("joi");

/** create createfounder */

const createFounder = {
    body: Joi.object().keys({
        founder_name: Joi.string().required().trim(),
        nationality: Joi.string().required().trim(),
    }),
};

module.exports = {
    createFounder
};