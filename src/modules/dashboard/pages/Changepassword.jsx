import React from 'react'
import { FaLifeRing, } from 'react-icons/fa'

const ChangePasswordPage = () => {
  return (
    <>
       <article className='m-0 sm:px-1 md:px-2 lg:px-16'>
        {/* top section */}
        <div className='py-2 flex flex-row justify-between items-center mt-4'>
          {/* Navigator */}
          <div className='font-bold text-xl'>
           Manage password
          </div>

          {/* Filter page */}
          <div className='flex flex-row items-center'> 
            <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaLifeRing/></div>
          </div>
        </div>
        <hr/>

        {/* Display section */}
        <main className='sm:w-[100%] grid md:grid-col-1 lg:grid-cols-2 gap-12 mt-10'>
            <form className='flex-1'>
                <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Old password</label>
                    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required />
                </div>
                <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">New password</label>
                    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required />
                </div>
               <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Confirm password</label>
                    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Password</button>
            </form>


            <div class="block max-w-sm p-6 bg-white rounded-md shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 border-t-6 border-orange-500">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NOTE: Password Updates</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Make sure you remember the password for the next Login. Password changes also affects the saved password, such as "Remember me and Cookies". You will be required to use the current new password.</p>
            </div>

        </main>
      </article>
    </>
  )
}

export default ChangePasswordPage
