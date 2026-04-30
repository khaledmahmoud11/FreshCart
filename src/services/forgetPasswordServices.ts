import { ForgetPasswordEnterEmailTypeShcema, UpdatePasswordTypeShcema, VerificationCodeTypeShcema } from "@/schemas/ForgetPasswordSchema";

export async function sendEmail(data:ForgetPasswordEnterEmailTypeShcema| string){
    const body =
        typeof data === "string"
        ? { email: data }
        : data;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/forgotPasswords`,{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "content-type":"application/json"
        }
    });
    const responseData = await response.json();
    return responseData;
}

export async function VerifyResetCode(data:VerificationCodeTypeShcema ){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verifyResetCode`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    });
    const responseData = await response.json();
    return responseData;
}




interface ResetPasswordPayload {
    email: string;
    newPassword: string;
};

export async function resetPasswordService(data:UpdatePasswordTypeShcema,email: string) {
    const payload: ResetPasswordPayload = {
        email,
        newPassword: data.password,
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/resetPassword`,{
        method:"PUT",
        body:JSON.stringify(payload),
        headers:{
            "content-type":"application/json"
        }
    });
    const responseData = await response.json();
    return responseData;
}