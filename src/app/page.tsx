"use client"
import { Button } from "@/components/ui/button";
import { Themetoggler } from "@/components/ui/themetoggler";
import { useRouter } from "next/navigation";

export default  function Home() {
  
  const route = useRouter()
  return (
    <div className="font-sans  flex flex-col  items-center justify-center ">
     <div>
      <p> this is invoice home pages </p>
     </div>
     <Button 
     variant={"default"}
     className="cursor-pointer"
     onClick={()=>{
        route.push("/login")
     }}> Get started </Button>
     <Themetoggler/>
     <div>
      
     </div>
    </div>
  );
}
