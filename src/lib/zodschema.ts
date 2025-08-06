import z from "zod";

export const onboardinguser_Schema = z.object({
    firstname: z.string().min(2, "firstname is required "),
    lastname: z.string().min(2, "lastname is required"),
    address: z.string().min(2, "address must required")
});

export const invoiceSchema = z.object({

    invoiceName: z.string().min(1, "invoice Name is required "),

    total: z.number().min(1, " 1$ is required"),

    status: z.enum(["PAID", "PENDING"]).default("PENDING"),

    date: z.string().min(1, "date is required "),

    dueDate: z.string().min(1, "due data is required "),

    FromName: z.string().min(1, "you name is required "),

    FromEmail: z.string().min(1, "Invalid Email address"),

    FromAddress: z.string().min(1, "email is required"),

    ClientName: z.string().min(1, "Client name is required"),

    ClientEmail: z.string().min(1, "Invalid email address"),

    ClientAddress: z.string().min(1, "Client Address is required"),

    Currency: z.string().min(1),

    InvoiceNumber : z.number().min(1),

    Note:z.string().optional(),

    InvoiceitemDescription : z.string().min(1 , "required"),

    InvoiceitemQuantity : z.number().min(1 , "required"),

    InvoiceItemRate: z.number().min(1 , "")



})