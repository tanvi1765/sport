const mongoose = require("mongoose");

const founderSchema = new mongoose.Schema(
    {
        founder_name: {
            type: String,
            trim: true,
        },
        nationality: {
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

const founder = mongoose.model("Founder", founderSchema);

module.exports = founder;