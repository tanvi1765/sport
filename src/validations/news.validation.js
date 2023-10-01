const Joi = require("joi");

const createNews = {
    body: Joi.object().keys({
        news_title: Joi.string().required().trim(),
        publication_date: Joi.date(),
        Content: Joi.string().required().trim(),
        Comments: Joi.string().required().trim(),
    })
};

module.exports={
    createNews
};