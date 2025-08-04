import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export default function Createinvoice(){
    return <>
    <Card className="w-full max-w-5xl mx-auto ">
        <CardContent className="p-5">
            <div className="flex flex-col gap-1">
                <div className="flex item-center gap-2">

                <Badge variant={"secondary"}> Draft </Badge>
                <Input placeholder-shown=" test2364"/>
                </div>

            </div>

            <div>
                
            </div>
        </CardContent>
    </Card>
    </>
}