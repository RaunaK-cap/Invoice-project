"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { onboardinguser_Schema } from "@/lib/zodschema";
import axios from "axios"
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function Onboarding(){
    const [ formdata  , setformdata ] = useState({ firstname: "" , lastname:"" , address:""})
    

    const [ isinvoicedata , startinvoicedata] = useTransition()
    const verifiedinputs = onboardinguser_Schema.safeParse({ ...formdata}) // we've to spread the object so that zod can see the everyvalue
    console.log(verifiedinputs.data)
   

    async function sendingdata (){
        startinvoicedata(async ()=>{
            const response = await axios.post("/api/invoicedata" , {
                firstname : verifiedinputs.data?.firstname,
                lastname: verifiedinputs.data?.lastname,
                address: verifiedinputs.data?.address
            })
    
            console.log(response)
            if(!response){
                toast("error pleae try again")
                
            }
            toast(`${ response.data.message}`)
            
    
            redirect("/dashboard")

        })
    }


    return (
        <div className="min-h-screen w-screen font-sans flex items-center justify-center ">
            <Card className=" w-[25rem] ">
                <CardHeader >
                    <CardTitle className="text-2xl flex justify-center font-bold"> You are almost finished  </CardTitle>
                    <CardDescription className="flex justify-center">
                        Enter your information to finish Onboarding process
                    </CardDescription>
                    <CardContent className="relative mt-3">
                        <form  action={sendingdata}>
                            <div className="grid-cols-2 flex items-center gap-2 ">
                                    
                            <div className="flex flex-col gap-2 ">
                                <Label> First name </Label>
                                <Input  onChange={(e)=> setformdata({ ...formdata , firstname:e.target.value})} placeholder="sydney69" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label> last name</Label>
                                <Input onChange={(e)=> setformdata({ ...formdata , lastname:e.target.value})} placeholder="sweeney"/>
                            </div>
                           
                            </div>
                            <div className=" w-full mt-2 gap-2 flex flex-col ">
                                <Label> Address </Label>
                                <Input onChange={(e)=> setformdata({ ...formdata , address:e.target.value})} placeholder="sydneybathtab-69"/>
                            </div>

                            <div className="flex flex-col mt-5">
                            <Button 
                            disabled={isinvoicedata || !formdata.firstname || !formdata.lastname || !formdata.address}
                            
                            > 
                            {isinvoicedata? (<>
                                    <div className="flex items-center gap-2" >
                                        <Loader2 className="size-4 animate-spin" />
                                        <p> Please wait ...</p>
                                    </div>
                             </>):"Submit"} 
                            </Button>
                            </div>
                        
                        </form>
                        
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    )
}