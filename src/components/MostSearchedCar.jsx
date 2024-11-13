import React from 'react'
import FakeData from './Shared/FakeData'
import CarItems from './CarItems'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function MostSearchedCar() {
  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center my-16'>Most Searched Cars</h2>
        <Carousel>
  <CarouselContent>
  {
            FakeData.carList.map((car,index)=>{
                return(
                  <CarouselItem key={index} className="basis-1/4">
                  <CarItems car={car} key={index}/>
                  </CarouselItem>
                    
                )
            })
        }
    
   
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

       
    </div>
  )
}

export default MostSearchedCar