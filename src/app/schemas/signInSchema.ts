import {z} from "zod";

export const messageSchema = z.object({
    identifier: z.string(),
    password: z.string(),
})