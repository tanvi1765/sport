const { contect_us } = require("../models");

/**
 * Create contect_us
 * @param {object} reqBody
 * @returns {Promise<contect_us>}
 */
const createContect_us = async (reqBody) => {
    return contect_us.create(reqBody);
};

const contect_usList = async (req, res) => {
    return contect_us.find();
};

const deleteRecord = async (contect_usId) => {
    return contect_us.findByIdAndDelete(contect_usId);
};

const getcontect_usById = async (contect_usId) => {
    return contect_us.findById(contect_usId);
};

const updateDetiles = async (contect_usId, updateBody) => {
    return contect_us.findByIdAndUpdate(contect_usId, { $set: updateBody });
};

module.exports = {
    createContect_us,
    contect_usList,
    deleteRecord,
    getcontect_usById,
    updateDetiles,
};