import { z } from "zod";

export const medicineSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }), 
  price: z
    .number() 
    .refine((val) => val !== undefined, { message: "Price is required" }), 
});