const multer = require("multer");
const fs = require("fs");
const path = require("path");

// img uplode
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == "sport_img") {
            fs.mkdirSync(path.join(__dirname, "../public/sport_img"), {
                recursive: true,
            });
            cb(null, path.join(__dirname, "../public/sport_img"));
        }
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
            cb("only .png,.jpg and .jpeg format are allowed!");
        }
        cb(null, new Date().getTime() + ext);
    },
});

const upload = multer({
    storage: storage,
});

module.exports = { upload };