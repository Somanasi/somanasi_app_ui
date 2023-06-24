import React from 'react'
import { FaBell, FaCog, FaSignInAlt } from 'react-icons/fa'

const Topbar = () => {

  return (
    <>
       <header className='w-100 py-2 lg:px-4 md:px-2 sm:px-1 flex flex-row justify-between items-center'>
        <div className=''>
          <p className='text-4xl text-amber-600'>Elimuendelezi</p>
        </div>


        <div className='py-2 lg:px-8 sm:px-1 flex flex-row justify-between items-center'> 
          <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 mr-4 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaSignInAlt/></div>
          <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 mr-4 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaBell/></div>
          <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 mr-4 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaCog/></div>
        </div>
       </header>
       <hr/>
    </>
  )
}

export default Topbar
