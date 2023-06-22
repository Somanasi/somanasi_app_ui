import React from 'react'
import { FaFilter, FaLifeRing, FaSearch } from 'react-icons/fa'


const Profile = () => {
  return (
    <>
       <article className='w-screen py-2 px-1 lg:px-12 md:px-4 sm:px-1'>
        {/* top section */}
        <div className='py-1 sm:px-1 lg:px-4 bg-green-50 sm:w-[100%] lg:w-50 flex justify-between items-center shadow-sm'>
          {/* Navigator */}
          <div className='font-bold'>
            Profile
          </div>


          {/* Search container */}
          <div className='py-1 px-4 flex flex-row items-center justify-start sm:w-[10%] lg:w-[20%] rounded-lg bg-white'> 
            <FaSearch/>
            <input type='search' placeholder='Search...' className='ml-2 py-1 px-2 outline-0 border-spacing-0 w-full'/>
          </div>

          {/* Filter page */}
          <div className='flex flex-row sm:justify-end lg:justify-center items-center sm:mr-1 lg:mr-4'> 
            <div className='px-2 mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400'><FaLifeRing/></div>
            <div className='px-2 mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400'><FaFilter/></div>
          </div>
        </div>

        

        {/* Display section */}
        <main className='py-1 px-4 w-50 flex justify-between items-center shadow-sm mt-4'>
          <section className='w-full h-100 bg-white shadow-smm mt-4 px-2 flex flex-row'>
            <div className='flex flex-col justify-center items-center'>
              <div className='w-20 h-20 rounded-full bg-gray-200'>
                {/* Image goes here */}
              </div>
              <div className='px-2 py-4'>
                <form>

                </form>
              </div>
            </div>

            <div className='flex flex-row items-center justify-center'>
              <form className='w-full bg-black px-2 py-4'>
                
              </form>
            </div>
          </section>

          {/* Links view page */}
        </main>
      </article>
    </>
  )
}

export default Profile
