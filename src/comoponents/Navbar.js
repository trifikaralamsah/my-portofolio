import React from 'react'
import { UserProvider } from '../config/context/User'
import AuthenticatedUser from './AuthenticatedUser'

const Navbar = () => {
  return (
    <div className='py-5 w-full bg-slate-900 font-inter'>
        <div className='text-white flex justify-between w-full px-10'>
            <span>My Gallery</span>
            <ul className='flex gap-4'>
                <li className=''>About Me</li>
                <li className=''>Hobby</li>
                <li className=''>Future</li>
                <li className=' self-end'>
                    <UserProvider>
                        <AuthenticatedUser />
                    </UserProvider>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar