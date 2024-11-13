import React from 'react'
import { Textarea } from "@/components/ui/textarea"


function TextArea({item}) {
  return (
    <div>
        <Textarea onChange={(e)=>handleInputChange(item.name,e.target.value)}/>

    </div>
  )
}

export default TextArea