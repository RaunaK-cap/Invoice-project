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
    },
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
            className={`${pathname === link.href?"text-primary bg-primary/5 ":"text-muted-foreground hover:text-foreground"} flex items-center gap-2 rounded-lg p-2 my-1 dark:hover:bg-muted/50 transition-all hover:text-primary`}
            href={link.href} key={link.id}>
                <link.icon className="size-5" />
                {link.name}
            </Link>
        ))
    }
    
    </>
}