const Joi = require("joi");

/** create createteam */

const createTeam = {
    body: Joi.object().keys({
        team_name: Joi.string().required().trim(),
        established_year: Joi.number().integer(),
    }),
};

module.exports = {
    createTeam
};