import { auth } from "@/lib/auth";
import { prisma} from "@/lib/db";
import { onboardinguser_Schema } from "@/lib/zodschema";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req:NextRequest){
    const invoicedata = await req.json()
    const verified_invoice_data = onboardinguser_Schema.safeParse(invoicedata)
    if(!verified_invoice_data.success){
        return NextResponse.json({
            message:"Enter the valid information"
        })
    };
    console.log(verified_invoice_data)
    const session = await auth.api.getSession({
        headers:await headers()
    })

    try{
         await prisma.user.update({
            where:{
                id: session?.user.id
            }, 
            data:{
                firstname: verified_invoice_data.data?.firstname,
                lastname:verified_invoice_data.data?.lastname,
                address:verified_invoice_data.data?.address
            }
        })
        return NextResponse.json({
            message:"onboarding successfull"
        })
        
    }catch(error){
        return NextResponse.json({
            message:"error while onboarding . please try again",
            error
        })
    }
}
