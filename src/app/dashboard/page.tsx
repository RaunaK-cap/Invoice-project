
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { headers } from "next/headers"
import { redirect } from "next/navigation"



const Page =  async () => {
  const session = await auth.api.getSession({
    headers: await headers()
})

  const data = await prisma.user.findUnique({
    where:{
      id: session?.user.id
    },
    select:{
      firstname:true,
      lastname:true,
      address:true
    }
  })
  console.log(data)

  if(!data?.address || !data?.firstname || !data?.lastname){
    return redirect("/onboarding")
  }

  return (
    <div className="px-6 py-2">
      <h2> Hello , This is a dashboard page</h2>
      <div>
        { session? session.user.name: ""}
        
      </div>
    </div>
  )
}

export default Page
