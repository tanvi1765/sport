const { newsService } = require("../services");

/** create news */
const createNews = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const news = await newsService.createNews(reqBody);

        res.status(200).json({
            success: true,
            message: "news detiles create successfully!",
            data: { news },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get news list
const newsList = async (req, res) => {
    try {
        const getList = await newsService.newsList();

        res.status(200).json({
            success: true,
            message: "Get news list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const newsId = req.params.newsId;
        const newsEx = await newsService.getnewsById(newsId);
        if (!newsEx) {
            throw new Error("news detiles not found!");
        }

        await newsService.deleteRecord(newsId);

        res.status(200).json({
            success: true,
            message: "news detiles delete successfully!",
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
        const newsId = req.params.newsId;

        const newsEx = await newsService.getnewsById(newsId);
        if (!newsEx) {
            throw new Error("news not found!");
        }

        await newsService.updateDetiles(newsId, req.body);

        res.status(200).json({
            success: true,
            message: "news details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createNews,
    newsList,
    deleteRecord,
    updateDetiles
};

