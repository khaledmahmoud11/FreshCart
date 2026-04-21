import * as z from "zod"
 
export const registerSchema = z.object({
    name:z.string()
        .nonempty("*Please enter your Name")
        .min(2,"*Name is too short"),
    email:z.string()
        .nonempty("*Please enter your email")
        .email("*Invalid email address"),
    password: z.string()
        .min(8, "*Password must be at least 8 characters long")
        .refine((value) => /[A-Z]/.test(value), {
            message: "*Must contain at least one uppercase letter",
        })
        .refine((value) => /[a-z]/.test(value), {
            message: "*Must contain at least one lowercase letter",
        })
        .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
            message: "*Must contain at least one special character",
        }),
    rePassword:z.string().nonempty("rePassword is required"),
    phone: z.string()
        .nonempty("*Please enter your phone number")
        .refine((value) => /^01[0125][0-9]{8}$/.test(value), {
            message: "*Only Egyptian phone numbers are allowed",
        }),
}).refine((data)=> data.password === data.rePassword ,{
    path:["rePassword"],
    message:"password not match"
})

export type registerTypeShcema = z.infer<typeof registerSchema >


export const loginSchema = z.object({
    email:z.string()
        .nonempty("email field is require")
        .email("email format is invalid"),
    password:z.string().nonempty("password is required")
})

export type loginTypeShcema = z.infer<typeof loginSchema >


export const changePasswordSchema = z.object({
    currentPassword:z.string()
        .nonempty("*currentPassword is required"),
    password: z.string()
        .min(8, "*Password must be at least 8 characters long")
        .refine((value) => /[A-Z]/.test(value), {
            message: "*Must contain at least one uppercase letter",
        })
        .refine((value) => /[a-z]/.test(value), {
            message: "*Must contain at least one lowercase letter",
        })
        .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
            message: "*Must contain at least one special character",
        }),
    rePassword:z.string().nonempty("rePassword is required"),
}).refine((data)=> data.password === data.rePassword ,{
    path:["rePassword"],
    message:"password not match"
})


export type changePasswordTypeShcema = z.infer<typeof changePasswordSchema >



export const changeDataSchema = z.object({
    name:z.string()
        .nonempty("*Please enter your Name")
        .min(2,"*Name is too short"),
    email:z.string()
        .nonempty("*Please enter your email")
        .email("*Invalid email address"),

    phone: z.string()
        .nonempty("*Please enter your phone number")
        .refine((value) => /^01[0125][0-9]{8}$/.test(value), {
            message: "*Only Egyptian phone numbers are allowed",
        }),
})

export type changeDataTypeShcema = z.infer<typeof changeDataSchema >
