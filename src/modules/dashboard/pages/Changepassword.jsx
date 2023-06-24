import React from 'react'
import { FaLifeRing, } from 'react-icons/fa'

const ChangePasswordPage = () => {
  return (
    <>
       <article className='m-0 sm:px-1 md:px-2 lg:px-16'>
        {/* top section */}
        <div className='py-2 flex flex-row justify-between items-center'>
          {/* Navigator */}
          <div className='font-bold text-xl'>
            Password Management
          </div>

          {/* Filter page */}
          <div className='flex flex-row items-center'> 
            <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaLifeRing/></div>
          </div>
        </div>

        

        {/* Display section */}
        <main className='sm:w-[100%] lg:w-[50%] p-0'>
            <form className='mt-8 flex-1'>
                <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Old password</label>
                    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required />
                </div>
                <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">New password</label>
                    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required />
                </div>
               <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Repeat password</label>
                    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Password</button>
            </form>

        </main>
      </article>
    </>
  )
}

export default ChangePasswordPage
