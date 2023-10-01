const { sportCtegory } = require("../models");

/**
 * Create sportCtegory
 * @param {object} reqBody
 * @returns {Promise<sportCtegory>}
 */
const createSportCategory = async (reqBody) => {
    return sportCtegory.create(reqBody);
};

const sportCtegoryList = async (req, res) => {
    return sportCtegory.find()
    .populate("sportsgallery");
};

const deleteRecord = async (sportCtegoryId) => {
    return sportCtegory.findByIdAndDelete(sportCtegoryId);
};

const getsportCtegoryById = async (sportCtegoryId) => {
    return sportCtegory.findById(sportCtegoryId);
};

const updateDetiles = async (sportCtegoryId, updateBody) => {
    return sportCtegory.findByIdAndUpdate(sportCtegoryId, { $set: updateBody });
};

module.exports = {
    createSportCategory,
    sportCtegoryList,
    deleteRecord,
    getsportCtegoryById,
    updateDetiles,
};