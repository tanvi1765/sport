const { user } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<user>}
 */
const createUser = async (reqBody) => {
    return user.create(reqBody);
};

const userList = async (req, res) => {
    return user.find();
};

const deleteRecord = async (userId) => {
    return user.findByIdAndDelete(userId);
};

const getuserById = async (userId) => {
    return user.findById(userId);
};

const updateDetiles = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody });
};

const getUserByEmail=async(email)=>{
    return user.findOne({email});
 };

module.exports = {
    createUser,
    userList,
    deleteRecord,
    getuserById,
    updateDetiles,
    getUserByEmail
};