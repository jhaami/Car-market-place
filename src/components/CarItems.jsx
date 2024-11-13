import { Separator } from '@radix-ui/react-select';
import React from 'react'
import { LuFuel } from "react-icons/lu";
import { MdOutlineSpeed } from "react-icons/md";
import { GiGearStick } from "react-icons/gi";
import { IoIosOpen } from "react-icons/io";


function CarItems({car}) {
  return (
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
     <h2 className='absolute m-1 p-1 rounded-full bg-green-500 text-white text-sm'>New</h2>
        <img src={car?.image} width={'100%'} height={250} className='rounded-md'/>
        <div className='p-4'>
          <h2 className='font-bold text-black text-lg mb-2'>{car?.name}</h2>
          <Separator className='border-y-2'/>
          <div className='grid grid-cols-3 mt-2'>
            <div className='flex flex-col items-center'>
            <LuFuel className='text-lg mb-2'/>
            <h2>{car.miles}</h2>
            </div>
            <div className='flex flex-col items-center'>
            <MdOutlineSpeed className='text-lg mb-2'/>
            <h2>{car.fuelType}</h2>
            </div>
            <div className='flex flex-col items-center'>
            <GiGearStick className='text-lg mb-2'/>
            <h2>{car.gearType}</h2>
            </div>
            
          </div>
        </div>
        <Separator className='my-2 border-y-2'/>
        <div className='flex items-center justify-between'>
          <h2 className='font-bold text-xl'>${car.price}</h2>
          <h2 className='text-primary text-sm flex gap-2 items-center'>View Details <IoIosOpen /></h2>
        </div>
        
    </div>
  )
}

export default CarItems;