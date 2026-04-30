import * as z from "zod"
export const ForgetPasswordEnterEmailSchema = z.object({
    email:z.string()
        .nonempty("Email is require")
        .email("Email format is invalid"),
})

export type ForgetPasswordEnterEmailTypeShcema = z.infer<typeof ForgetPasswordEnterEmailSchema >


export const VerificationCodeSchema = z.object({
    resetCode:z.string()
        .nonempty("code is require")
})

export type VerificationCodeTypeShcema = z.infer<typeof VerificationCodeSchema >

export const UpdatePasswordSchema = z.object({
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

export type UpdatePasswordTypeShcema = z.infer<typeof UpdatePasswordSchema >