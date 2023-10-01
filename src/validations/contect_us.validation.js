const Joi = require("joi");

/** create createContect_us */

const createContect_us = {
    body: Joi.object().keys({
        full_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        address: Joi.string().required().trim(),
        phone: Joi.number().integer(),
    }),
};

module.exports = {
    createContect_us
};