const mongoose = require("mongoose");

const sportCtegorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        sport_date: {
            type: Date,
            default: Date.now(),
        },
        sportsgallery: {
            type: mongoose.Types.ObjectId,
            ref: "sportsgallery",
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

const sportCtegory = mongoose.model("sportCtegory", sportCtegorySchema);
module.exports = sportCtegory;