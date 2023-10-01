const { contactService } = require("../services");

/** create contact */
const createcontact = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const contact=await contactService.createcontact(reqBody);

        res.status(200).json({
            success: true,
            message: "contact detiles create successfully!",
            data: { contact },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get contact list
const contactList = async (req, res) => {
    try {
        const getList = await contactService.contactList();

        res.status(200).json({
            success: true,
            message: "Get contact list successfully!",
            data: getList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// // delete list
const deleteRecord = async (req, res) => {
    try {
        const contactId = req.params.contactId;
        const contactEx = await contactService.getcontactById(contactId);
        if (!contactEx) {
            throw new Error("contact detiles not found!");
        }

        await contactService.deleteRecord(contactId);

        res.status(200).json({
            success: true,
            message: "contact detiles delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// // update detiles
const updateDetiles = async (req, res) => {
    try {
        const contactId = req.params.contactId;

        const contactEx = await contactService.getcontactById(contactId);
        if (!contactEx) {
            throw new Error("contact not found!");
        }

        await contactService.updateDetiles(contactId, req.body);

        res.status(200).json({
            success: true,
            message: "contact details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    createcontact,
    contactList,
    deleteRecord,
    updateDetiles
};

