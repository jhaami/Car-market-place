import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div className='flex flex-col items-center p-10 gap-6 h-[600px]  w-full bg-[#eef0fc]'>
        <h2 className='text-lg'>Find cars for sale and for rent near you</h2>
        <h2 className='text-[60px] font-bold'>Find Your Dream Car</h2>
        <Search/>

        <img src='/bmw_PNG99558.png' className='mt-1 h-[500px]' />
    </div>
  )
}

export default Hero