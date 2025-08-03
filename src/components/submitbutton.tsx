import { Button } from "./ui/button";

interface types {
    text:string
}

export default function Submitbutton({text}: types ){
    return <>
    <Button variant={"outline"}> {text} </Button>
    
    </>
}