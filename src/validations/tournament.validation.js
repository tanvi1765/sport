const Joi = require("joi");

const createTournament = {
    body: Joi.object().keys({
        tournament_name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        Organizer: Joi.string().required().trim(),
        start_date: Joi.date(),
        end_date: Joi.date(),
        location: Joi.string().required(),
    })
};

module.exports={
    createTournament
};