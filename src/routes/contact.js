const express = require("express");
const { contactValidation } = require("../validations");
const { contactCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create contact
router.post(
    "/create-contact",
    validate(contactValidation.createcontact),
    contactCantroller.createcontact
);

// get contact
router.get(
    "/list",
    contactCantroller.contactList
);

 // dalete
router.delete(
    "/delete-contact/:contactId",
    contactCantroller.deleteRecord
);

// update
router.put(
    "/update/:contactId",
    contactCantroller.updateDetiles
);

module.exports = router;