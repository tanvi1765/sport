const { coachService } = require("../services");

/** create coach */
const createCoach = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const coach = await coachService.createCoach(reqBody);

        res.status(200).json({
            success: true,
            message: "coach detiles create successfully!",
            data: { coach },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/* get coach list */
const coachList = async (req, res) => {
    try {
        const getList = await coachService.coachList();

        res.status(200).json({
            success: true,
            message: "Get coach list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/* delete list */
const deleteRecord = async (req, res) => {
    try {
        const coachId = req.params.coachId;
        const coachEx = await coachService.getcoachById(coachId);
        if (!coachEx) {
            throw new Error("coach detiles not found!");
        }

        await coachService.deleteRecord(coachId);

        res.status(200).json({
            success: true,
            message: "coach detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

/* update detiles */
const updateDetiles = async (req, res) => {
    try {
        const coachId = req.params.coachId;

        const coachEx = await coachService.getcoachById(coachId);
        if (!coachEx) {
            throw new Error("coach not found!");
        }

        await coachService.updateDetiles(coachId, req.body);

        res.status(200).json({
            success: true,
            message: "coach details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createCoach,
    coachList,
    deleteRecord,
    updateDetiles
};

