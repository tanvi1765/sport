const mongoose = require("mongoose");
const config = require("../config/config");

const sportsgallerySchema = new mongoose.Schema(
    {
        sport_img: {
            type: String,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.sport_img) {
                    data.sport_img = `${config.base_url}sport_img/${data.sport_img}`;
                }
            },
        },
    }
);

const sportsgallery = mongoose.model("sportsgallery", sportsgallerySchema);
module.exports = sportsgallery;