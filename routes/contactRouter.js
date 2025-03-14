const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
} = require("../controllers/contactController");


router.route("/").get(getContacts);
router.route("/:id").post(createContact).get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
