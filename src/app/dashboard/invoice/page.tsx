import { InvoiceList } from "@/components/InoviceList"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusIcon } from "lucide-react"
import Link from "next/link"


const page = () => {
  return (
    <Card className="m-4 ">
    <CardHeader>
      <div className="flex justify-between items-center">
        <div>
        <CardTitle> Invoice </CardTitle>
        <CardDescription> Manage your all invoice </CardDescription>
        </div>
        <div className="text-xs flex   items-center">
          <Link href="/dashboard/invoice/create" className={buttonVariants()}> 
          <PlusIcon className="size-5"/>
          <p > Create Invoice </p>
          </Link>
        </div>
      </div>
      <InvoiceList/>
    </CardHeader>
  </Card>
  )
}

export default page
