import express from "express";

import {
  saveAnswer,
} from "../controllers/interviewAnswerController.js";

import {
  protect,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/save",
  protect,
  saveAnswer
);

export default router;