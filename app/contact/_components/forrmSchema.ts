import {z} from "zod";

export const form_validation = z.object({
    name: z.string().min(1, "Can't be empty").max(50).optional(),
    email: z.string().email().max(50),
    phone: z.number().max(12),
    message: z.string().max(255).optional(),
});