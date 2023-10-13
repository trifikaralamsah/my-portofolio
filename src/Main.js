import React from 'react'
import Navbar from './comoponents/Navbar'
import Layout from './comoponents/Layout'
import Footer from './comoponents/Footer'

const Main = () => {
  return (
    <div className='Main-app-wrapper h-[100vh]'>
        <Navbar />
        <Layout />
        <Footer />
    </div>
  )
}

export default Main