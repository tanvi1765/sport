const Joi = require("joi");

const createCoach = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        age: Joi.number().required(),
        gender: Joi.string().required().trim(),
        specializations: Joi.string().required().trim(),
        coaching_experience: Joi.number().required(),
    })
};

module.exports={
    createCoach
};