import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { ClerkProvider } from '@clerk/clerk-react';
import { ClerkProvider } from '@clerk/clerk-react'
import Home from './home'
import Profile from './profile';
import AddListing from './add-listing';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  // {
  //   path:"/contact",
  //   element:<Contact/>
  // },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/addlisting",
    element:<AddListing/>
  }
])

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
