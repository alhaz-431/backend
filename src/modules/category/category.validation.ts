import { z } from "zod";

export const medicineSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }), // ✅ ঠিক আছে
  price: z
    .number() // number type check
    .refine((val) => val !== undefined, { message: "Price is required" }), // undefined check
});