import express from "express";

import {
  completeInterview,
} from "../controllers/interviewResultController.js";

import {
  protect,
} from "../middleware/authMiddleware.js";
import {
  getInterviewResult,
} from "../controllers/interviewResultController.js";
const router =
  express.Router();

router.post(
  "/complete",
  protect,
  completeInterview
);
router.get(
  "/:id",
  protect,
  getInterviewResult
);

export default router;