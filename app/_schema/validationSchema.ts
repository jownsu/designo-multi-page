import {z} from "zod";

export const contact_schema = z.object({
    name: z.string().min(1, "Can't be empty").max(50).optional(),
    email: z.string().min(1, "Can't be empty").email("Provide a valid email").max(50),
    phone: z.string().min(1, "Can't be empty").max(12, "Max of 12"),
    message: z.string().max(255, "Exceeded the character limit").optional(),
});