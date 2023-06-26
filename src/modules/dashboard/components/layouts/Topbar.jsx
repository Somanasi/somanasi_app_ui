import React from 'react'
import { FaBell, FaCode, FaCog, FaEdit, FaLiraSign, FaSignInAlt } from 'react-icons/fa'

const Topbar = () => {

  return (
    <>
       <header className='w-100 py-2 lg:px-4 md:px-2 sm:px-1 flex flex-row justify-between items-center'>
        <div className=''>
          <p className='text-4xl text-amber-600'>Elimuendelezi</p>
        </div>


        <div className='py-2 lg:px-8 sm:px-1 flex flex-row justify-between items-center'> 
        {/* Subcriptions */}
          <div className='p-2 hover:text-white hover:bg-blue-700 transition-all duration-300 mr-4 rounded-md text-gray-500 cursor-pointer bg-gray-300 relative flex flex-col items-end justify-center group'>
            <FaSignInAlt/>
            </div>


          {/* Notification */}
          <div className='p-2 hover:text-white hover:bg-blue-700 transition-all duration-300 mr-4 rounded-md text-gray-500 cursor-pointer bg-gray-300 relative flex flex-col items-end justify-center group'>
            <FaBell/>
            <div className='hidden sm:w-[280px] lg:w-[200px] h-[280px] p-2 bg-slate-500 absolute top-10 sm:right-0 md:right-0 lg:right-[-2rem] rounded-md group-hover:block py-2 px-4'>
              <h1 className='w-full py-2 text-center border-b border-gray-100 text-white text-2xl'>Notifications</h1>

            </div>
          </div>


          {/* Settings */}
          <div className='p-2 hover:text-white hover:bg-blue-700 transition-all duration-300 mr-4 rounded-md text-gray-500 cursor-pointer bg-gray-300 relative flex flex-col items-end justify-center group'>
            <FaCog/>
            <div className='hidden sm:w-[280px] lg:w-[200px] h-[280px] p-2 bg-slate-500 absolute top-10 sm:right-0 md:right-0 lg:right-[-2rem] rounded-md group-hover:block py-2 px-4'>
              <h1 className='w-full py-2 text-center border-b border-gray-100 text-white text-2xl'>Panel Settings</h1>

              <div className='w-full flex items-center flex-row justify-start text-xl mt-4 hover:bg-orange-500 p-2 rounded-md'>
                <FaEdit/>
                <p className='pl-2'>Change Theme</p>
              </div>
              <div className='w-full flex items-center flex-row justify-start text-xl mt-2 hover:bg-orange-500 p-2 rounded-md'>
                <FaCode/>
                <p className='pl-2'>Panel Colors</p>
              </div>
              <div className='w-full flex items-center flex-row justify-start text-xl mt-2 hover:bg-orange-500 p-2 rounded-md'>
                <FaLiraSign/>
                <p className='pl-2'>FAQ</p>
              </div>
            </div>
          </div>

        </div>
       </header>
       <hr/>
    </>
  )
}

export default Topbar
