const { teamService } = require("../services");

/** create team */
const createTeam = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const team = await teamService.createTeam(reqBody);

        res.status(200).json({
            success: true,
            message: "team detiles create successfully!",
            data: { team },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get team list
const teamList = async (req, res) => {
    try {
        const getList = await teamService.teamList();

        res.status(200).json({
            success: true,
            message: "Get team list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const teamId = req.params.teamId;
        const teamEx = await teamService.getteamById(teamId);
        if (!teamEx) {
            throw new Error("team detiles not found!");
        }

        await teamService.deleteRecord(teamId);

        res.status(200).json({
            success: true,
            message: "team detiles delete successfully!",
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
        const teamId = req.params.teamId;

        const teamEx = await teamService.getteamById(teamId);
        if (!teamEx) {
            throw new Error("team not found!");
        }

        await teamService.updateDetiles(teamId, req.body);

        res.status(200).json({
            success: true,
            message: "team details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createTeam,
    teamList,
    deleteRecord,
    updateDetiles
};

