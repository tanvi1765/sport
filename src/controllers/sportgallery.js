const { sportgalleryService } = require("../services");

/** create sportgallery */
const createsportGallery = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        if (req.file) {
            reqBody.sport_img = req.file.filename;
        } else {
            throw new Error("image is required");
        }

        const sportgallery = await sportgalleryService.createsportGallery(reqBody);

        res.status(200).json({
            success: true,
            message: "sportgallery detiles create successfully!",
            data: { sportgallery },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get sportgallery list
const sportGalleryList = async (req, res) => {
    try {
        const getList = await sportgalleryService.sportGalleryList();

        res.status(200).json({
            success: true,
            message: "Get sportgallery list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const sportgalleryId = req.params.sportgalleryId;
        const sportgalleryEx = await sportgalleryService.getsportgalleryById(sportgalleryId);
        if (!sportgalleryEx) {
            throw new Error("sportgallery detiles not found!");
        }

        await sportgalleryService.deleteRecord(sportgalleryId);

        res.status(200).json({
            success: true,
            message: "sportgallery detiles delete successfully!",
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
        const sportgalleryId = req.params.sportgalleryId;

        const sportgalleryEx = await sportgalleryService.getsportgalleryById(sportgalleryId);
        if (!sportgalleryEx) {
            throw new Error("sportgallery not found!");
        }

        await sportgalleryService.updateDetiles(sportgalleryId, req.body);

        res.status(200).json({
            success: true,
            message: "sportgallery details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createsportGallery,
    sportGalleryList,
    deleteRecord,
    updateDetiles
};

