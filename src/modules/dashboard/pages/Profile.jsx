import React from 'react'
import { FaFilter, FaLifeRing, FaSearch } from 'react-icons/fa'


const Profile = () => {
  return (
    <>
       <article className='m-0 sm:px-1 md:px-2 lg:px-16'>
        {/* top section */}
        <div className='py-2 flex flex-row justify-between items-center'>
          {/* Navigator */}
          <div className='font-bold text-xl'>
            Dashboard
          </div>

          {/* Filter page */}
          <div className='flex flex-row items-center'> 
            <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 mr-4 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaLifeRing/></div>
            <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaFilter/></div>
          </div>
        </div>

        

        {/* Display section */}
        <main className='w-100 p-0 m-0 flex'>
          <section className='flex-1 mt-4'>
            {/* Top section */}
            <article className='grid sm:grid-cols-1 md:grid-cols-2 mt-4 gap-14'>
            <div class="flex flex-col justify-center items-start">
              <h1 class="text-xl text-gray-500 font-bold py-2 border-b border-gray-300">View Profile</h1>
              <div class="mt-2 flex flex-col">
                <div class="w-[120px] h-[120px] bg-gray-300 rounded-full overflow-hidden">Image</div>
                <div class="mt-2">
                  <p class="pt-2 text-md">Michael Douglas</p>
                  <p class="pt-2 text-md">gtech27.inifityi@gmail.com</p>
                  <p class="pt-2 text-md">Status: Logged in</p>
                </div>
              </div>
            </div>


              <div className=''>
                <h1 className='text-xl text-gray-500 font-bold py-2 border-b border-gray-300'>Personal Details</h1>
                <form class="flex-auto">
                  <div class="mt-4 flex flex-row justify-between">
                    <label for="name" class="block mt-1 font-bold text-gray-600">Full&nbsp;Name</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2 w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>

                  <div class="mt-4 flex flex-row justify-start items-center">
                    <label for="name" class="block mt-1 font-bold text-gray-600">National&nbsp;ID</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2  w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>

                  <div class="mt-4 flex flex-row justify-start items-center">
                    <label for="name" class="block mt-1 font-bold text-gray-600">Gender&nbsp;/Sex</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2  w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>

                  <div class="mt-4 flex flex-row justify-start items-center">
                    <label for="name" class="block mt-1 font-bold text-gray-600">Age</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2  w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>
                  {/* <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Submit</button> */}
                </form>

              </div>
            </article>

            {/* Bottom section */}
            <article className='grid grid-cols-2 mt-6 gap-14'>
              <div>
                <h1 className='text-xl text-gray-500 font-bold py-2 border-b border-gray-300'>Academic Details</h1>
                <form class="mx-auto">
                  <div class="mt-4 flex flex-row justify-between">
                    <label for="name" class="block mt-1 font-bold text-gray-600">Courses</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2 w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>

                  <div class="mt-4 flex flex-row justify-start items-center">
                    <label for="name" class="block mt-1 font-bold text-gray-600">Study hours:</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2 w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>

                  <div class="mt-4 flex flex-row justify-between items-center">
                    <label for="name" class="block mt-1 font-bold text-gray-600">Rewards</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2 w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>

                  <div class="mt-4 flex flex-row justify-between items-center">
                    <label for="name" class="block mt-1 font-bold text-gray-600">Remarks</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2 w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>
                  {/* <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Submit</button> */}
                </form>
              </div>

              <div>
                <h1 className='text-xl text-gray-500 font-bold py-2 border-b border-gray-300'>Location & Others</h1>
                <form class="mx-auto">
                  <div class="mt-4 flex flex-row justify-between items-center">
                    <label for="name" class="block mt-1 font-bold text-gray-600">Current&nbsp;Location</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2 w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>

                  <div class="mt-4 flex flex-row justify-start items-center">
                    <label for="name" class="block mt-1 font-bold text-gray-600">Social&nbsp;Media</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2  w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>

                  <div class="mt-4 flex flex-row justify-start items-center">
                    <label for="name" class="block mt-1 font-bold text-gray-600">Website</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2 w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>

                  <div class="mt-4 flex flex-row justify-start items-center">
                    <label for="name" class="block mt-1 font-bold text-gray-600">Home&nbsp;Address</label>
                    <input type="text" id="name" name="name" class="border border-gray-300 rounded-md py-1 px-2 w-[60%] m-auto outline-none boder-none" placeholder="Enter your name" required/>
                  </div>
                  {/* <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Submit</button> */}
                </form>
              </div>

            </article>
          </section>
        </main>
      </article>
    </>
  )
}

export default Profile
