import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator";
  import { CiSearch } from "react-icons/ci";
  // import {Data} from '../components/Shared/Data'
  import { CarMakes, Pricing,Cars } from "/src/components/Shared/Data";




function Search() {
  return (
    <div className='p-2 md:p-2 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]'>
        <Select>
      
  <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent>
  {
    Cars.map((ver,i)=>{
      return(
        <SelectItem key={i} value={ver.model}>{ver.model}</SelectItem>
      )
    })
  }
    
    
  </SelectContent>
</Select>
<Separator orientation="vertical" className='hidden md:block'/>

<Select>
  <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Car Makes" />
  </SelectTrigger>
  <SelectContent>
  {
    CarMakes.map((maker,i)=>{
      return(
      <SelectItem key={i} value={maker.name}>{maker.name}</SelectItem>
      )
    })
  }
  </SelectContent>
</Select>
<Separator orientation="vertical" className='hidden md:block'/>

<Select>
  <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
  {Pricing.map((price, i) => (
           <SelectItem key={i} value={price.amount}>{price.amount}</SelectItem>
          ))}
    
  </SelectContent>
</Select>
<Separator orientation="vertical" className='hidden md:block'/>
<div>
<CiSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all '/>
</div>

    </div>
  )
}

export default Search

// import React from 'react'
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
// import { Separator } from "@/components/ui/separator";
// import { CiSearch } from "react-icons/ci";
// import { CarMakes, Pricing } from "/src/components/Shared/Data";

// function Search() {
//   return (
//     <div className="p-4 md:p-6 bg-white rounded-full md:rounded-full shadow-lg flex flex-col md:flex-row gap-6 items-center w-full md:w-[60%] border border-gray-200">
//       <Select>
//         <SelectTrigger className="outline-none w-full text-lg hover:bg-gray-100 focus:ring focus:ring-indigo-300 transition ease-in-out duration-200 rounded-md p-2">
//           <SelectValue placeholder="Select Theme" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="light">Light</SelectItem>
//           <SelectItem value="dark">Dark</SelectItem>
//           <SelectItem value="system">System</SelectItem>
//         </SelectContent>
//       </Select>

//       <Separator orientation="vertical" className="hidden md:block mx-4 border-gray-300" />

//       <Select>
//         <SelectTrigger className="outline-none w-full text-lg hover:bg-gray-100 focus:ring focus:ring-indigo-300 transition ease-in-out duration-200 rounded-md p-2">
//           <SelectValue placeholder="Choose Car Make" />
//         </SelectTrigger>
//         <SelectContent>
//           {CarMakes.map((maker, i) => (
//             <SelectItem key={i} value={maker.name}>{maker.name}</SelectItem>
//           ))}
//         </SelectContent>
//       </Select>

//       <Separator orientation="vertical" className="hidden md:block mx-4 border-gray-300" />

//       <Select>
//         <SelectTrigger className="outline-none w-full text-lg hover:bg-gray-100 focus:ring focus:ring-indigo-300 transition ease-in-out duration-200 rounded-md p-2">
//           <SelectValue placeholder="Pricing" />
//         </SelectTrigger>
//         <SelectContent>
//           {Pricing.map((price, i) => (
//             <SelectItem key={i} value={price.amount}>{price.amount}</SelectItem>
//           ))}
//         </SelectContent>
//       </Select>

//       <Separator orientation="vertical" className="hidden md:block mx-4 border-gray-300" />

//       <div className="flex justify-center items-center">
//         <CiSearch className="text-[40px] bg-indigo-500 rounded-full p-2 text-white hover:bg-indigo-600 transition-all duration-200 cursor-pointer shadow-md hover:scale-105" />
//       </div>
//     </div>
//   );
// }

// export default Search;
