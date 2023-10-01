const { playerService } = require("../services");

/** create player */
const createPlayer = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const player = await playerService.createPlayer(reqBody);

        res.status(200).json({
            success: true,
            message: "player detiles create successfully!",
            data: { player },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get player list
const playerList = async (req, res) => {
    try {
        const getList = await playerService.playerList();

        res.status(200).json({
            success: true,
            message: "Get player list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const playerId = req.params.playerId;
        const playerEx = await playerService.getplayerById(playerId);
        if (!playerEx) {
            throw new Error("player detiles not found!");
        }

        await playerService.deleteRecord(playerId);

        res.status(200).json({
            success: true,
            message: "player detiles delete successfully!",
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
        const playerId = req.params.playerId;

        const playerEx = await playerService.getplayerById(playerId);
        if (!playerEx) {
            throw new Error("player not found!");
        }

        await playerService.updateDetiles(playerId, req.body);

        res.status(200).json({
            success: true,
            message: "player details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createPlayer,
    playerList,
    deleteRecord,
    updateDetiles
};

