const { coach } = require("../models");

/**
 * Create coach
 * @param {object} reqBody
 * @returns {Promise<coach>}
 */
const createCoach = async (reqBody) => {
    return coach.create(reqBody);
};

const coachList = async (req, res) => {
    return coach.find()
    .populate("team");
};

const deleteRecord = async (coachId) => {
    return coach.findByIdAndDelete(coachId);
};

const getcoachById = async (coachId) => {
    return coach.findById(coachId);
};

const updateDetiles = async (coachId, updateBody) => {
    return coach.findByIdAndUpdate(coachId, { $set: updateBody });
};

module.exports = {
    createCoach,
    coachList,
    deleteRecord,
    getcoachById,
    updateDetiles,
};