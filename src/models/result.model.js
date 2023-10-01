const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
    {
        winner_team: {
            type: String,
            trim: true,
        },
        loser_team: {
            type: String,
            trim: true,
        },
        team_score: {
            type: Number,
        },
        news: {
            type: mongoose.Types.ObjectId,
            ref: "news",
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

const result = mongoose.model("result", resultSchema);
module.exports = result;