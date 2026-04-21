import * as z from "zod"

export const AddAddresses = z.object({
    name:z.string()
        .nonempty("*Please enter your address name"),
    details:z.string()
        .nonempty("*Please enter your full address"),
    phone: z.string()
        .nonempty("*Please enter your phone number")
        .refine((value) => /^01[0125][0-9]{8}$/.test(value), {
            message: "*Only Egyptian phone numbers are allowed",
        }),
    city:z.string()
        .nonempty("*Please enter your city")

})

export type AddAddressesTypeShcema = z.infer<typeof AddAddresses >

