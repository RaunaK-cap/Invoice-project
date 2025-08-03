import z from "zod";

export const onboardinguser_Schema = z.object({
    firstname: z.string().min(2 , "firstname is required "),
    lastname:z.string().min(2 , "lastname is required"),
    address:z.string().min(2 , "address must required")
});