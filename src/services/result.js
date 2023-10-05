const { result } = require("../models");

/**
 * Create result
 * @param {object} reqBody
 * @returns {Promise<result>}
 */
const createResult = async (reqBody) => {
    return result.create(reqBody);
};

const resultList = async (req, res) => {
    return result.find()
    .populate("news");
};

const deleteRecord = async (resultId) => {
    return result.findByIdAndDelete(resultId);
};

const getresultById = async (resultId) => {
    return result.findById(resultId);
};

const updateDetiles = async (resultId, updateBody) => {
    return result.findByIdAndUpdate(resultId, { $set: updateBody });
};

module.exports = {
    createResult,
    resultList,
    deleteRecord,
    getresultById,
    updateDetiles,
};