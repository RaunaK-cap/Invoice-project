import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Onboarding(){
    return (
        <div className="min-h-screen w-screen font-sans flex items-center justify-center ">
            <Card className=" w-[25rem] mx-auto  ">
                <CardHeader >
                    <CardTitle className="text-2xl font-bold"> You are almost finished  </CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                    <CardContent className="relative -left-5">
                        <form>
                            <div className="grid-cols-2 flex items-center gap-2 mt-2">
                                    
                            <div className="flex flex-col gap-2">
                                <Label> First name </Label>
                                <Input placeholder="sydney69" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label> last name</Label>
                                <Input placeholder="sweeney"/>
                            </div>
                           
                            </div>
                            <div className=" w-full mt-2 gap-2 flex flex-col">
                                <Label> Address </Label>
                                <Input placeholder="sydneybathtab-69"/>
                            </div>
                            
                            <div className="flex flex-col mt-2">
                            <Button > Submit </Button>
                            </div>
                        </form>
                    </CardContent>

                </CardHeader>

            </Card>

        </div>
    )
}