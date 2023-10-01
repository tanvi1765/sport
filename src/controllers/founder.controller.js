const { founderService } = require("../services");

/** create founder */
const createFounder = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const founder=await founderService.createFounder(reqBody);

        res.status(200).json({
            success: true,
            message: "founder detiles create successfully!",
            data: { founder },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get founder list
const founderList = async (req, res) => {
    try {
        const getList = await founderService.founderList();

        res.status(200).json({
            success: true,
            message: "Get founder list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const founderId = req.params.founderId;
        const founderEx = await founderService.getfounderById(founderId);
        if (!founderEx) {
            throw new Error("founder detiles not found!");
        }

        await founderService.deleteRecord(founderId);

        res.status(200).json({
            success: true,
            message: "founder detiles delete successfully!",
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
        const founderId = req.params.founderId;

        const founderEx = await founderService.getfounderById(founderId);
        if (!founderEx) {
            throw new Error("founder not found!");
        }

        await founderService.updateDetiles(founderId, req.body);

        res.status(200).json({
            success: true,
            message: "founder details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createFounder,
    founderList,
    deleteRecord,
    updateDetiles
};

