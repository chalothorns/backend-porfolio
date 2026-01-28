import { Router } from "express";
import { createContact, deleteContact, getContact, getContacts } from "../../modules/contactme/contactController.js";

export const router = Router()

router.get("/:id", getContact);

router.get("/", getContacts);

router.post("/", createContact);

router.delete("/:id", deleteContact);