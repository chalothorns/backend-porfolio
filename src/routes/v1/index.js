import { Router } from "express";
import {router as contactsRoutes} from "./contact.route.js";

export const router = Router();
router.use("/contacts", contactsRoutes);