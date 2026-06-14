import express from "express";

import { upload } from "../config/multer.js";

import {
  uploadResume,
} from "../controllers/resumeController.js";

const router = express.Router();

router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);

export default router;