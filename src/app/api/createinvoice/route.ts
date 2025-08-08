import { prisma } from "@/lib/db";
import { invoiceSchema } from "@/lib/zodschema";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const data = await req.json()
    const verified_data = invoiceSchema.safeParse(data)
    if (!verified_data.success) {
        return NextResponse.json({
            message: "Invalid Format .!!!! please try again"
        })
    }
    console.log(verified_data.data)


    try {
        await prisma.invoice.create({
            data: {
                total: verified_data.data.total,
                status: verified_data.data.status,
                date: verified_data.data.date,
                duedate: verified_data.data.duedate,
                ClientAddress: verified_data.data.ClientAddress,
                ClientEmail: verified_data.data.ClientAddress,
                ClientName: verified_data.data.ClientName,
                FormAddress: verified_data.data.FromAddress,
                FromEmail: verified_data.data.FromEmail,
                FormName: verified_data.data.FromName,
                InvoiceitemDescription: verified_data.data.InvoiceitemDescription,
                InvoiceItemQuantity: verified_data.data.InvoiceItemQuantity,
                InvoiceItemRate: verified_data.data.InvoiceItemRate,
                InvoiceNumber: verified_data.data.InvoiceNumber,
                Currency: verified_data.data.Currency,
                Note: verified_data.data.Note,
                createdat: verified_data.data.createdat,
                Updatedat: verified_data.data.Updatedat
            }
        })

        return NextResponse.json({
            message: "data has been stored succesfully",
            yourmessages: verified_data.data
        })

    } catch (e) {
        return NextResponse.json({
            message: "can't saved it , try again"
        })
    }

}