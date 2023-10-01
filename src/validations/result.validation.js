const Joi = require("joi");

const createResult = {
    body: Joi.object().keys({
        winner_team: Joi.string().required().trim(),
        loser_team: Joi.string().required().trim(),
        team_score: Joi.number().required(),
    })
};

module.exports = {
    createResult
};