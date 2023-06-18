import React from 'react'
import { FaBell, FaCog, FaSignInAlt } from 'react-icons/fa'
// import { FaBars, FaChevronDown, FaBell, FaEnvelope, FaUser, FaSignOutAlt, FaCalendarAlt, FaLock } from "react-icons/fa";

const Topbar = () => {

  return (
    <>
       <header className='py-1 px-4 bg-green-200 w-50 flex justify-between items-center'>
        <div className='flex flex-row justify-around items-center'>
          {/* <div className='w-20 h-6 rounded bg-slate-400 overflow-hidden'></div> */}
          <p className='font-bold text-orange-500 text-2xl ml-2'>Elimuendelezi</p>
        </div>


        <div className='flex flex-row justify-center items-center mr-4'> 
          <div className='px-2 mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400 border-r-2 border-white-50'><FaSignInAlt/></div>
          <div className='px-2 mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400 border-r-2 border-white-50'><FaBell/></div>
          <div className='px-2 mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400 border-r-2 border-white-50'><FaCog/></div>
        </div>
       </header>
    </>
  )
}

export default Topbar
