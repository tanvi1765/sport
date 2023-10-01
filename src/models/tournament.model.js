const { string } = require("joi");
const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema(
    {
        tournament_name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        Organizer: {
            type: String,
            trim: true,
        },
        start_date: {
            type: Date,
            default:Date.now(),
        },
        end_date: {
            type: Date,
            default:Date.now(),
        },
        location: {
            type: String,
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

const tournament = mongoose.model("tournament", tournamentSchema);

module.exports = tournament;