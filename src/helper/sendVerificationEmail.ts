import { Resend } from 'resend';
import VerificationEmail from "../../email/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import {ApiError} from "next/dist/server/api-utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
) : Promise<ApiResponse> {
    try {

        await resend.emails.send({
            from: '<onboarding@resend.dev>',
            to: email,
            subject: 'Random Messages | Verification OTP',
            react: VerificationEmail({username, otp: verifyCode}),

        })

        return {
            success: true,
            message: "Verification email sent",
        }
    } catch (emailError) {
        console.error("Verification email error", emailError);
        return {
            success: false,
            message: "Failed to send verification email.",
        }
    }
}