const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
    },
    expire_time: {
      type: Date,
      default: null,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const token = mongoose.model("token", tokenSchema);

module.exports = token;
