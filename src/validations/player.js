const Joi = require("joi");

const createPlayer = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        date_of_birth: Joi.date(),
        nationality: Joi.string().required().trim(),
        position: Joi.string().required().trim(),
    })
};

module.exports = {
    createPlayer
}