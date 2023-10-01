const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
    {
        team_name: {
            type: String,
            trim: true,
        },
        established_year: {
            type: Number,
        },
        player: {
            type: mongoose.Types.ObjectId,
            ref: "player",
        },
        coach: {
            type: mongoose.Types.ObjectId,
            ref: "coach",
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

const team = mongoose.model("team", teamSchema);

module.exports = team;