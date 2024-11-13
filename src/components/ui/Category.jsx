import React from 'react'
import {CategoryItems} from '../Shared/Data'
function Category() {
  return (
    <div className='mt-[120px]'>
      <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>

      {
        CategoryItems.map((cate,i)=>{
            return(
                <div key={i} className='border rounded-md p-3 items-center flex flex-col hover:shadow-md cursor-pointer'>
                    <img src={cate.icon} width={36} height={36}/>
                    <h2>{cate.name}</h2>
                </div>
            )
        })
      }
      </div>
      
  </div>
  )
}

export default Category