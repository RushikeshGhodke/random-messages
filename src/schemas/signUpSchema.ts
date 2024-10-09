import {z} from "zod";

export const userNameValidation = z
    .string()
    .min(5, "Username must be atleast 5 characters!")
    .max(13, "Username must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_\-]+$/, "Username must not contain special characters!")