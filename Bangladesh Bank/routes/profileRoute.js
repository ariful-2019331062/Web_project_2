import express from "express";
const router = express.Router();
import { getProfileInfo } from "../controllers/profileController.js";

router.route("/").get(getProfileInfo);

export default router;
