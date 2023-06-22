import React from 'react'
import { FaBell, FaCog, FaSignInAlt } from 'react-icons/fa'
// import { FaBars, FaChevronDown, FaBell, FaEnvelope, FaUser, FaSignOutAlt, FaCalendarAlt, FaLock } from "react-icons/fa";

const Topbar = () => {

  return (
    <>
       <header className='py-1 sm:px-2 lg:px-4 bg-green-200 flex justify-between items-center'>
        <div className='flex flex-row justify-around items-center'>
          {/* <div className='w-20 h-6 rounded bg-slate-400 overflow-hidden'></div> */}
          <p className='font-bold text-orange-500 text-2xl ml-2'>Elimuendelezi</p>
        </div>


        <div className='flex justify-around items-center sm:mr-1 lg:mr-4 sm:flex-wrap'> 
          <div className='mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400 border-r-2 border-white-50'><FaSignInAlt/></div>
          <div className='px-2 mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400 border-r-2 border-white-50'><FaBell/></div>
          <div className='px-2 mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400 border-r-2 border-white-50'><FaCog/></div>
        </div>
       </header>
    </>
  )
}

export default Topbar
