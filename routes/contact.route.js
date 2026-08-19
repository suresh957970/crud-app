import express from "express";

import {
    getContacts,
    showCreateContact,
    createContact,
    viewContact,
    showEditContact,
    updateContact,
    deleteContact,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.get("/", getContacts);
router.get("/create-contact", showCreateContact);
router.post("/create-contact", createContact);
router.get("/view-contact/:id", viewContact);
router.get("/edit-contact/:id", showEditContact);
router.post("/update-contact/:id", updateContact);
router.get("/delete-contact/:id", deleteContact);

export default router;