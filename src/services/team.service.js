const { team } = require("../models");

/**
 * Create team
 * @param {object} reqBody
 * @returns {Promise<team>}
 */
const createTeam = async (reqBody) => {
    return team.create(reqBody);
};

const teamList = async (req, res) => {
    return team.find()
    .populate("player")
    .populate("coach");
};

const deleteRecord = async (teamId) => {
    return team.findByIdAndDelete(teamId);
};

const getteamById = async (teamId) => {
    return team.findById(teamId);
};

const updateDetiles = async (teamId, updateBody) => {
    return team.findByIdAndUpdate(teamId, { $set: updateBody });
};

module.exports = {
    createTeam,
    teamList,
    deleteRecord,
    getteamById,
    updateDetiles,
};