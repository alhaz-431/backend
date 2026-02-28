
import { z } from 'zod';
import { MAX_UPLOAD_SIZE } from '../../constant';

export const userValidationSchema = z.object({
  profilePicture: z
    .any()
    .refine((file) => file?.size <= MAX_UPLOAD_SIZE, {
      message: `File size must be less than ${MAX_UPLOAD_SIZE / 1024 / 1024} MB`,
    }),
});