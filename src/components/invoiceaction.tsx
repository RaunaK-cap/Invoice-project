import { CheckCircle2, DownloadCloud, Link2, Mail, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";

export function InvoiceAction (){
    return(
        <DropdownMenu >
            <DropdownMenuTrigger asChild className="font-sans">
                <Button size="icon" variant={"secondary"}> 
                    <MoreHorizontal className="size-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-sans mx-10">
                <DropdownMenuItem className=" flex items-center ">
                    <Link href="" className="flex justify-center items-center gap-2">
                    <Pencil className="size-3"/>
                    Edit invoice
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className=" flex items-center ">
                    <Link href="" className="flex justify-center items-center gap-2">
                    <DownloadCloud className="size-3"/>
                    Download
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className=" flex items-center ">
                    <Link href="" className="flex justify-center items-center gap-2">
                    <Mail className="size-3"/>
                    Remainder Email
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className=" flex items-center ">
                    <Link href="" className="flex justify-center items-center gap-2">
                    <Trash className="size-3"/>
                    Delete invoice
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className=" flex items-center ">
                    <Link href="" className="flex justify-center items-center gap-2">
                    <CheckCircle2 className="size-3"/>
                    Mark as Paid
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}