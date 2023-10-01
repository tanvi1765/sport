const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
    {
        news_title: {
            type: String,
            trim: true,
        },
        publication_date: {
            type: Date,
            default: Date.now(),
        },
        Content: {
            type: String,
            trim: true,
        },
        Comments: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const news = mongoose.model("news", newsSchema);
module.exports = news;