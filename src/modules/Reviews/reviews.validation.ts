import { z } from "zod";

export const createReviewValidation = z.object({
  body: z.object({
    medicineId: z.string(),
    rating: z.number().min(1).max(5),
    comment: z.string().optional(),
  }),
});