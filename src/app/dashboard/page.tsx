"use client"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


const Page =  () => {
    // const router  = useRouter()
    const {data : session  } =  authClient.useSession()
    console.log(session?.user.name)

    // useEffect(()=>{
    //     if(!session){
    //         router.push("/")
    //     }

    // } , [router , session])


  return (
    <div>
      <h2> hello this is a dashboard page</h2>
      <div>
        { session? session.user.name: ""}
        
      </div>
    </div>
  )
}

export default Page
