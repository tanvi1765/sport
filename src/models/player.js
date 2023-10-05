const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
        date_of_birth: {
            type: Date,
            default: Date.now(),
        },
        nationality: {
            type: String,
            trim: true,
        },
        position: {
            type: String,
            trim: true,
        },
        team: {
            type: mongoose.Types.ObjectId,
            ref: "team",
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

const player = mongoose.model("player", playerSchema);
module.exports = player;