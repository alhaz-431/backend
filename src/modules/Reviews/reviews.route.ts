import { Router } from "express";
import { ReviewController } from "./reviews.controller";

const router = Router();

router.post("/", ReviewController.createReview);
router.get("/:medicineId", ReviewController.getReviewsByMedicine);

export const ReviewRoutes = router;