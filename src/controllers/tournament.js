const { tournamentService } = require("../services");

/** create tournament */
const createTournament = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const tournament = await tournamentService.createTournament(reqBody);

        res.status(200).json({
            success: true,
            message: "tournament detiles create successfully!",
            data: { tournament },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get tournament list
const tournamentList = async (req, res) => {
    try {
        const getList = await tournamentService.tournamentList();

        res.status(200).json({
            success: true,
            message: "Get tournament list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const tournamentId = req.params.tournamentId;
        const tournamentEx = await tournamentService.gettournamentById(tournamentId);
        if (!tournamentEx) {
            throw new Error("tournament detiles not found!");
        }

        await tournamentService.deleteRecord(tournamentId);

        res.status(200).json({
            success: true,
            message: "tournament detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// // update detiles
const updateDetiles = async (req, res) => {
    try {
        const tournamentId = req.params.tournamentId;

        const tournamentEx = await tournamentService.gettournamentById(tournamentId);
        if (!tournamentEx) {
            throw new Error("tournament not found!");
        }

        await tournamentService.updateDetiles(tournamentId, req.body);

        res.status(200).json({
            success: true,
            message: "tournament details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createTournament,
    tournamentList,
    deleteRecord,
    updateDetiles
};

