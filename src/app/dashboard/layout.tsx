
import { DashboardLinks } from "@/components/DashboardLinks";
import Submitbutton from "@/components/submitbutton";
import { Button } from "@/components/ui/button";
import { Themetoggler } from "@/components/ui/themetoggler";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function dashboardlayout({ children }: { children: ReactNode }) {
  return <>
    <div className="min-h-screen font-sans grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div className="hidden border-r  bg-muted/20 md:block">
      <div className="flex flex-col max-h-screen h-full gap-2">
        <div className="h-14 flex  bg-muted/ items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2">
          <p className="font-bold text-lg flex items-center gap-2">
          <Image src="/invoiceImage.png" alt="Img" width="45" height="10" />
             Invoice </p>
          </Link>   
        </div>
        <div className="flex-1">
          <nav className="flex-col gap-5 items-start px-2 text-sm ">
            <DashboardLinks/>
          </nav>
        </div>
      </div>

    </div>
    <div className="flex flex-col">
      <header className="h-14 flex items-center gap-2 border-b bg-muted/20 px-4 lg:h-[60px] lg:px-6 justify-end">
      <Themetoggler/>
      <form action={async ()=>{
        "use server"
        await authClient.signOut()
      }}>
          <Submitbutton text="Logout"/>
      </form>
      </header>
      <main>
        {children}
      </main>

    </div>

    </div>
  </>;
}