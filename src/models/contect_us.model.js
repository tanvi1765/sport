const mongoose = require("mongoose");

const contectusSchema = new mongoose.Schema(
    {
        full_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        phone: {
            type: Number,
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

const contect_us = mongoose.model("contect_us", contectusSchema);

module.exports = contect_us;