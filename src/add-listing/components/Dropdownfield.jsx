import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function Dropdownfield({item,handleInputChange}) {
  return (
    <div><Select onValueChange={(value)=>handleInputChange(item.name,value)}>
    <SelectTrigger className="w-full">
      <SelectValue placeholder={item.label} />
    </SelectTrigger>
    <SelectContent>
    {
        item?.options?.map((option,i)=>{
            return(
                <SelectItem key={i} value={option}>{option}</SelectItem>
            )
        })
    }
      
     
    </SelectContent>
  </Select>
  </div>
  )
}

export default Dropdownfield