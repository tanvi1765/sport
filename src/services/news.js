const { news } = require("../models");

/**
 * Create news
 * @param {object} reqBody
 * @returns {Promise<news>}
 */
const createNews = async (reqBody) => {
    return news.create(reqBody);
};

const newsList = async (req, res) => {
    return news.find();
};

const deleteRecord = async (newsId) => {
    return news.findByIdAndDelete(newsId);
};

const getnewsById = async (newsId) => {
    return news.findById(newsId);
};

const updateDetiles = async (newsId, updateBody) => {
    return news.findByIdAndUpdate(newsId, { $set: updateBody });
};

module.exports = {
    createNews,
    newsList,
    deleteRecord,
    getnewsById,
    updateDetiles,
};