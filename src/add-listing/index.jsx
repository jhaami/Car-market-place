import Header from '@/components/Header'
import React, { useState } from 'react'


import carDeatails from './../components/Shared/carDeatails.json'
import InputField from './components/InputField'
import Dropdownfield from './components/Dropdownfield'
import TextArea from './components/TextArea'
import { Separator } from '@/components/ui/separator'
import features from './../components/Shared/features.json'
import Checkboxfield from './components/Checkboxfield'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
// import { Separator } from '@radix-ui/react-separator'


function AddListing() {
    const[formData,setFormData]=useState([]);
    

    const handlInputeChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(formData);
    }

     const onsubmit=(e)=>{
        e.preventDefault();
     }
  return (
    <div>
        <Header/>
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>
                Add New Listing
            </h2>

            <form className='p-10 border roubded-xl mt-10'>
                <div>
                {/* Car details */}
                    <h2 className='font-medium text-xl mb-6'>Car details</h2>
                    <div  className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {carDeatails.carDetails.map((item,i)=>{
                            return(
                                <div key={i}>
                                <label className='font-medium text-sm'>{item?.label} {item?.required&& <span className='text-red-500'>*</span>}</label>
                                    {item.fieldType=='text' || item.fieldType=='number'
                                    ?<InputField item={item} handleInputChange={handlInputeChange}/>
                                    :item.fieldType=='dropdown'?<Dropdownfield item={item} handleInputChange={handlInputeChange}/>
                                    :item.fieldType=='textarea'?<TextArea item={item} handleInputChange={handlInputeChange}/>
                                    :null}
                                </div>

                    
                            )
                        })}
                    </div>
                </div>

                <Separator  className='my-6'/>

                {/* Feature List */}
                <div>
                    <h2 className='font-medium text-xl my-6'>Features</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                        {features.features.map((item,i)=>{
                            return(
                                <div key={i} className='flex gap-2 items-center'>
                                    <Checkbox onCheckedChange={(value)=>handlInputeChange(item.name,value)}/><h2>{item.label}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Car image */}
                <div className='mt-10 flex justify-end'>
                    <Button onClick={(e)=>onsubmit(e)}>Submit</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddListing