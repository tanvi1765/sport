const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        age: {
            type: Number,
        },
        gender: {
            type: String,
            trim: true,
        },
        specializations: {
            type: String,
            trim: true,
        },
        coaching_experience: {
            type: Number,
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

const coach = mongoose.model("coach", coachSchema);
module.exports = coach;