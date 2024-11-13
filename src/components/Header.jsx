import {  UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {
    const{user,isSignedIn}=useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-1">
  Aj3<span className="text-blue-500">Call.</span>
</h1>


        <ul className='hidden md:flex gap-16'>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
        </ul>

        {
            isSignedIn?
             <div className='flex items-center gap-5'>
              
                <UserButton/>
                <Link to={'/profile'}>
                <Button>Submit Listening</Button>
                </Link>
             </div>:
             <div>
             
             <Button>Submit Listening</Button>
             
             </div>
        }
    </div>
  )
}

export default Header