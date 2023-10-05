const { player } = require("../models");

/**
 * Create player
 * @param {object} reqBody
 * @returns {Promise<player>}
 */
const createPlayer = async (reqBody) => {
    return player.create(reqBody);
};

const playerList = async (req, res) => {
    return player.find()
    .populate("team")
    .count();
};

const deleteRecord = async (playerId) => {
    return player.findByIdAndDelete(playerId);
};

const getplayerById = async (playerId) => {
    return player.findById(playerId);
};

const updateDetiles = async (playerId, updateBody) => {
    return player.findByIdAndUpdate(playerId, { $set: updateBody });
};

module.exports = {
    createPlayer,
    playerList,
    deleteRecord,
    getplayerById,
    updateDetiles,
};