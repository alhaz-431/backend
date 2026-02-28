import { z } from "zod";

// Medicine create/update validation
export const medicineSchema = z.object({
  name: z.string().nonempty({ message: "Medicine name is required" }),
  description: z.string().optional(),
  price: z.number().refine((val) => val > 0, { message: "Price must be greater than 0" }),
  stock: z.number().refine((val) => val >= 0, { message: "Stock must be 0 or more" }),
  image: z.string().url().optional(),
  categoryId: z.string().nonempty({ message: "Category is required" }),
  sellerId: z.string().nonempty({ message: "Seller is required" }),
});