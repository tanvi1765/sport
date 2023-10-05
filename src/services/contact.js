const { contact } = require("../models");

/**
 * Create contact
 * @param {object} reqBody
 * @returns {Promise<contact>}
 */
const createcontact = async (reqBody) => {
    return contact.create(reqBody);
};

const contactList = async (req, res) => {
    return contact.find();
};

const deleteRecord = async (contactId) => {
    return contact.findByIdAndDelete(contactId);
};

const getcontactById = async (contactId) => {
    return contact.findById(contactId);
};

const updateDetiles = async (contactId, updateBody) => {
    return contact.findByIdAndUpdate(contactId, { $set: updateBody });
};

module.exports = {
    createcontact,
    contactList,
    deleteRecord,
    getcontactById,
    updateDetiles,
};