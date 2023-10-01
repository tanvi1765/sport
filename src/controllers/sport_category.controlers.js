const { sport_categoryService } = require("../services");

/** create sport_category */
const createSportCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const sport_category=await sport_categoryService.createSportCategory(reqBody);

        res.status(200).json({
            success: true,
            message: "sport_category detiles create successfully!",
            data: { sport_category },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get sport_category list
const sportCtegoryList = async (req, res) => {
    try {
        const getList = await sport_categoryService.sportCtegoryList();

        res.status(200).json({
            success: true,
            message: "Get sport_category list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const sport_categoryId = req.params.sport_categoryId;
        const sport_categoryEx = await sport_categoryService.getsportCtegoryById(sport_categoryId);
        if (!sport_categoryEx) {
            throw new Error("sport_category detiles not found!");
        }

        await sport_categoryService.deleteRecord(sport_categoryId);

        res.status(200).json({
            success: true,
            message: "sport_category detiles delete successfully!",
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
        const sport_categoryId = req.params.sport_categoryId;

        const sport_categoryEx = await sport_categoryService.getsportCtegoryById(sport_categoryId);
        if (!sport_categoryEx) {
            throw new Error("sport_category not found!");
        }

        await sport_categoryService.updateDetiles(sport_categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "sport_category details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createSportCategory,
    sportCtegoryList,
    deleteRecord,
    updateDetiles
};

