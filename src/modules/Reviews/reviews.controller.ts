import { Request, Response } from "express";
import { ReviewService } from "./reviews.service";

const createReview = async (req: Request, res: Response) => {
  const userId = req.user?.id; // Assuming req.user is set by auth middleware and contains the user's ID

  const result = await ReviewService.createReviewIntoDB(
    userId,
    req.body
  );

  res.status(200).json({
    success: true,
    data: result,
  });
};

const getReviewsByMedicine = async (req: Request, res: Response) => {
  const result = await ReviewService.getReviewsByMedicine(
    req.params.medicineId as string
  );

  res.status(200).json({
    success: true,
    data: result,
  });
};

export const ReviewController = {
  createReview,
  getReviewsByMedicine,
};