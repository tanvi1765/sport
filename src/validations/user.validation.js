const Joi = require("joi");

const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        phone_no: Joi.number().required(),
        password: Joi.number().required(),
    })
};

// send mile
const sendMail = {
    body: Joi.object({
        email: Joi.string().required().trim().email(),
        subject: Joi.string().required().trim(),
        Text: Joi.string().required().trim(),
    }),
};

module.exports = {
    createUser,
    sendMail
};