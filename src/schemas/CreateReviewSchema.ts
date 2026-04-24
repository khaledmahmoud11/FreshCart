import * as z from "zod"

export const CreateReviewSchema = z.object({
  review: z.string().min(1, { message: "*Please enter your review for this product" }),
  rating: z.any()
    .refine((val) => val !== undefined && val !== null && val !== "" && val !== 0, {
      message: "*Please select a rating",
    })
    .transform((val) => Number(val))
    .pipe(
      z.number().min(1).max(5)
    ),
});
export type CreateReviewTypeSchema = z.infer<typeof CreateReviewSchema >

export const editReviewSchema = z.object({
  review: z.string().min(1, { message: "*Please enter your review for this product" }),
  rating: z.any()
    .refine((val) => val !== undefined && val !== null && val !== "" && val !== 0, {
      message: "*Please select a rating",
    })
    .transform((val) => Number(val))
    .pipe(
      z.number().min(1).max(5)
    ),
});
export type EditReviewTypeSchema = z.infer<typeof editReviewSchema >