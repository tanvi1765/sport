const { tournament } = require("../models");

/**
 * Create tournament
 * @param {object} reqBody
 * @returns {Promise<tournament>}
 */
const createTournament = async (reqBody) => {
    return tournament.create(reqBody);
};

const tournamentList = async (req, res) => {
    return tournament.find()
        .populate("team");
};

const deleteRecord = async (tournamentId) => {
    return tournament.findByIdAndDelete(tournamentId);
};

const gettournamentById = async (tournamentId) => {
    return tournament.findById(tournamentId);
};

const updateDetiles = async (tournamentId, updateBody) => {
    return tournament.findByIdAndUpdate(tournamentId, { $set: updateBody });
};

module.exports = {
    createTournament,
    tournamentList,
    deleteRecord,
    gettournamentById,
    updateDetiles,
};