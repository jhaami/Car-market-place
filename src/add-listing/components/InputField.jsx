// import { Input } from '@/components/ui/input'
// import React from 'react'

// function InputField({item}) {
//   return (
//     <div>
//         <Input name={item?.name}/>
//     </div>
//   )
// }

// export default InputField

import { Input } from '@/components/ui/input'
import React from 'react'

function InputField({ item,handleInputChange }) {
  return (
    <div>
      {/* Display the label */}
      
      <Input name={item?.name} required={item?.required} type={item?.fieldType}
        onChange={(e)=>handleInputChange(item.name,e.target.value)}
       />
    </div>
  )
}

export default InputField
