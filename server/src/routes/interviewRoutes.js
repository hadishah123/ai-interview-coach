import express from "express";

import {
  generateInterview,
  getInterviewById,
  getHistory,
} from "../controllers/interviewController.js";

import {
  protect,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/generate",
  protect,
  generateInterview
);

router.get(
  "/history",
  protect,
  getHistory
);

router.get(
  "/:id",
  protect,
  getInterviewById
);

export default router;