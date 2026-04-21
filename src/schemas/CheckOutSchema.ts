import * as z from "zod"

export const CheckOut = z.object({
    details:z.string()
        .nonempty("*Please enter your full address")
        .min(10,"Address details must be at least 10 characters"),
    phone: z.string()
        .nonempty("*Please enter your phone number")
        .refine((value) => /^01[0125][0-9]{8}$/.test(value), {
            message: "*Only Egyptian phone numbers are allowed",
        }),
    city:z.string()
        .nonempty("*Please enter your city")
        .min(2,"City name must be at least 2 characters")

})

export type CheckOutTypeShcema = z.infer<typeof CheckOut >
