"use client"
import { HomeIcon, LinkIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


export const DashboardLinksarray =[
    {
        id:0,
        name:"Dashboard",
        href:"/dashboard",
        icon: HomeIcon
    } ,
    {
        id:1,
        name:"Invoice",
        href:"/dashboard/invoice",
        icon: LinkIcon
    }
]

export function DashboardLinks(){
    const pathname = usePathname()
    return <>
    {
        DashboardLinksarray.map((link)=> (
            <Link 
            // className=" flex gap-1 p-3 my-1 items-center  hover:bg-slate-100 dark:hover:bg-muted/50 rounded-lg 
            
            // "
            className={`${pathname === link.href?"text-primary bg-primary/5 ":"text-muted-foreground hover:text-foreground"} flex items-center gap-1 rounded-lg p-3  dark:hover:bg-muted/50 transition-all hover:text-primary`}
            
            href={link.href} key={link.id}>
                <link.icon className="size-5" />
                {link.name}
            </Link>
        ))
    }
    
    </>
}