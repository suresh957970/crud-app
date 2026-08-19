import Contact from "../models/contact.model.js";

export const getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        res.render("contacts.ejs", { contacts });
    } catch (error) {
        next(error);
    }
};

export const showCreateContact = (req, res) => {
    res.render("create-contact");
};

export const createContact = async (req, res, next) => {
    try {
        await Contact.create(req.body);
        res.redirect("/");
    } catch (error) {
        next(error);
    }
};

export const viewContact = async (req, res, next) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).send("Contact not found");
        }

        res.render("view-contact", { contact });
    } catch (error) {
        next(error);
    }
};

export const showEditContact = async (req, res, next) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).send("Contact not found");
        }

        res.render("edit-contact", { contact });
    } catch (error) {
        next(error);
    }
};

export const updateContact = async (req, res, next) => {
    try {
        await Contact.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.redirect(`/view-contact/${req.params.id}`);
    } catch (error) {
        next(error);
    }
};

export const deleteContact = async (req, res, next) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (error) {
        next(error);
    }
};