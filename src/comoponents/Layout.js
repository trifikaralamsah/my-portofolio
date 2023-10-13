import React from 'react'
// import AuthenticatedUser from './AuthenticatedUser'
// import { UserProvider } from '../config/context/User'


const Layout = () => {

  return (
    <div className="container mx-auto border rounded-lg shadow-lg p-10 columns-3 ">
        {/* <UserProvider>
            <AuthenticatedUser />
        </UserProvider> */}
        <img src="https://source.unsplash.com/600x400?tree" alt="one" className="mb-4" />
        <img src="https://source.unsplash.com/600x400?computer" alt="two" className="mb-4" />
        <img src="https://source.unsplash.com/600x400?art" alt="threer" className="mb-4" />
        <img src="https://source.unsplash.com/600x400?house" alt="four" className="mb-4" />
        <img src="https://source.unsplash.com/600x400?view" alt="five" className="mb-4" />
        <img src="https://source.unsplash.com/600x400?car" alt="six" className="mb-4" />
    </div>
  )
}

export default Layout