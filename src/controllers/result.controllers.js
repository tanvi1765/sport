const { resultService } = require("../services");

/** create result */
const createResult = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const result = await resultService.createResult(reqBody);

        res.status(200).json({
            success: true,
            message: "result detiles create successfully!",
            data: { result },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get result list
const resultList = async (req, res) => {
    try {
        const getList = await resultService.resultList();

        res.status(200).json({
            success: true,
            message: "Get result list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const resultId = req.params.resultId;
        const resultEx = await resultService.getresultById(resultId);
        if (!resultEx) {
            throw new Error("result detiles not found!");
        }

        await resultService.deleteRecord(resultId);

        res.status(200).json({
            success: true,
            message: "result detiles delete successfully!",
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
        const resultId = req.params.resultId;

        const resultEx = await resultService.getresultById(resultId);
        if (!resultEx) {
            throw new Error("result not found!");
        }

        await resultService.updateDetiles(resultId, req.body);

        res.status(200).json({
            success: true,
            message: "result details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createResult,
    resultList,
    deleteRecord,
    updateDetiles
};

