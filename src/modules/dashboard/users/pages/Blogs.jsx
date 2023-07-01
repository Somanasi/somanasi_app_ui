import React from 'react'
import { FaLifeRing, } from 'react-icons/fa'

const Blogs = () => {
  return (
    <>
       <article className='m-0 sm:px-1 md:px-2 lg:px-16'>
        {/* top section */}
        <div className='py-2 flex flex-row justify-between items-center mt-4'>
          {/* Navigator */}
          <div className='font-bold text-xl'>
           Create Blog
          </div>

          {/* Filter page */}
          <div className='flex flex-row items-center'> 
            <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaLifeRing/></div>
          </div>
        </div>
        <hr/>

        {/* Display section */}   
        <main className='sm:w-[100%] mt-10'>
            <form className='flex-1 flex flex-col'>
                <div className='flex flex-row justify-between items-center gap-x-8 sm:flex-col-1 md:flex-col-2'>
                    <div class="sm:w-full lg:w-[80%] m-auto">
                        <div class="mb-6">
                            <label for="author" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Authour name</label>
                            <input type="text" id="author" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required placeholder='example:- Vashid Vidat' />
                        </div>
                        <div class="mb-6">
                            <label for="date" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Publication Date</label>
                            <input type="date" id="date" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required />
                        </div>
                        <div class="mb-6">
                            <label for="category" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Categories and Tags</label>
                            <input type="text" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required placeholder='Example:- Science, Leadership, Computer...'/>
                        </div>
                        <div class="mb-6">
                            <label for="avatar" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Add image/Avatar</label>
                            <input type="file" id="avatar" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required placeholder='Your image'/>
                        </div>
                       
                    </div>

                    <div class="sm:w-full lg:w-[80%] m-auto">
                        <div class="mb-6">
                            <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Title</label>
                            <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required placeholder='Example:- How units are registered'/>
                        </div>
                        <div class="mb-6">
                            <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Content Area</label>
                           <textarea rows="6" className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none' required placeholder='Example:-The main reason of condacting course analysis is to fit the schedule... NOTE: NOT more than 100words.'/>
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post to blog</button>
                    </div>
                </div>
               
            </form>

        </main>
      </article>
    </>
  )
}

export default Blogs
