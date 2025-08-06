"use client"

import { Calendar1Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { useState } from "react";

export default function Createinvoice() {
    const [ selected , setselected ] = useState(new Date())
  return (
    <>
      <Card className="w-full max-w-5xl my-2 mx-auto ">
        <CardContent className="p-5">
          <div className="flex flex-col gap-4 ">
            <div className="flex item-center gap-2">
              <Badge variant={"secondary"}> Draft </Badge>
              <Input className="w-60" placeholder=" test2364" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 my-3">
            <div>
              <Label> Invoice No.</Label>
              <div className="flex my-1">
                <span className="px-3 border border-r-0 rounded-l-md bg-muted flex items-center">
                  #
                </span>
                <Input className="rounded-l-none" placeholder="5" />
              </div>
            </div>

            <div>
              <Label className=""> Currency </Label>
              <Select defaultValue="USD">
                <SelectTrigger className="my-1">
                  <SelectValue placeholder="select currency " />
                </SelectTrigger>
                <SelectContent className="font-sans">
                  <SelectItem value="USD">United States Dollar USD</SelectItem>
                  <SelectItem value="INR">INDIA -- INR</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-20 w-[750px]">
              <div className="space-y-2 ">
                <Label> From </Label>
                <div className="space-y-2 ">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" />
                  <Input placeholder="Your Address" />
                </div>
              </div>

              <div>
                <div className="space-y-2  ">
                  <Label> To</Label>
                  <div className="space-y-2 ">
                    <Input placeholder="Client Name " />
                    <Input placeholder="Client Email " />
                    <Input placeholder="Client Address " />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="my-1 space-y-1">
              <div>
                <label> Date : </label>
                </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"secondary"}>
                    <Calendar1Icon /> 
                    { selected ? (
                        new Intl.DateTimeFormat("en-US" , {
                            dateStyle:"long",
                        }).format(selected)
                    ): (
                        <span> Pick a Date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="flex items-center justify-center  inset-0">
                  <Calendar
                    mode="single"
                    selected={selected}
                    onSelect={(date)=> setselected(date || new Date())}
                    className="rounded-md font-sans border shadow-sm"
                    disabled={(date)=> date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
                <Label className="my-2"> Invocie Due  </Label>
                <div >
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Due Date"/>
                    </SelectTrigger>
                    <SelectContent className="font-sans">
                        <SelectItem value="0"> Due on Reciept </SelectItem>
                        <SelectItem value="15"> Net 15 </SelectItem>
                        <SelectItem value="30"> Net 30 </SelectItem>
                    </SelectContent>
                </Select>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
