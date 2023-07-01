import React, { useState } from 'react'
import { FaCamera, FaLifeRing, } from 'react-icons/fa'


const Profile = () => {
  const [updateprofile, setUpdateProfile] = useState(false)

  return (
    <>
       <article className='m-0 sm:px-1 md:px-2 lg:px-16'>
        {/* top section */}
        <div className='py-2 flex flex-row justify-between items-center mt-4'>
          {/* Navigator */}
          <div className='font-bold text-xl'>
         {!updateprofile ? "View profile" : "Update profile"}
          </div>

          {/* Filter page */}
          <div className='flex flex-row items-center'> 
            <button className={`px-2 py-1 mr-2 rounded-md text-md font-bold cursor-pointer text-white ${!updateprofile ? "bg-orange-400" : "bg-blue-400"}`} onClick={() => {setUpdateProfile(!updateprofile)}}>
            {!updateprofile ? "Update profile" : "View profile"}</button>
            <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaLifeRing/></div>
          </div>
        </div>
        <hr/>

        

        {/* Display section */}
        <main className='w-100 p-0 m-0 flex'>
         {!updateprofile ? <section className='flex-1 mt-4'>
            {/* Top section */}
            <article className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-2'>
              {/* Avatar */}
              <div className='m-auto mt-[0rem]'>
                <h1 className='py-2 border-b border-blue-400 text-blue-700 font-bold'>Avatar</h1>
                <div className='flex flex-row items-center justify-start'>
                  <div className='w-[100px] h-[100px] bg-gray-400 rounded-full'>

                  </div>
                  <div className='ml-4 shadow-inner px-2 py-4 flex flex-col justify-center items-start'>
                    <span className='p-2 text-md text-gray-600'>Logedin: Michael Douglas</span>
                    <span className='p-2 text-md text-gray-600'>Time: 12:00 noon</span>
                    <span className='p-2 text-md text-gray-600'>Status: Active</span>
                  </div>
                </div>
              </div>

              <div className='m-auto'>
                <h1 className='py-2 border-b border-blue-400 text-blue-700 font-bold'>Personal Details</h1>
                <div className='shadow-inner px-2 py-2 flex flex-col justify-center items-start'>
                  <span className='p-2 text-gray-600'>Full Mame: Michael Douglas</span>
                  <span className='p-2 text-gray-600'>National ID: 28374624</span>
                  <span className='p-2 text-gray-600'>Age: 24years</span>
                  <span className='p-2 text-gray-600'>Gender: Male</span>
                  <span className='p-2 text-gray-600'>Nationality: Kenyan</span>
                </div>
              </div>

              <div className='m-auto'>
                <h1 className='py-2 border-b border-blue-400 text-blue-700 font-bold'>Academic Details</h1>
                <div className='shadow-inner px-2 py-2 flex flex-col justify-center items-start'>
                  <span className='p-2 text-gray-600'>Course Name: Computer Science</span>
                  <span className='p-2 text-gray-600'>No. of Units Covered: 12 of 48</span>
                  <span className='p-2 text-gray-600'>Study Perios: 1st Quater</span>
                  <span className='p-2 text-gray-600'>Certificates: 10</span>
                  <span className='p-2 text-gray-600'>Core-units: 16</span>
                </div>
              </div>

              <div className='m-auto'>
                <h1 className='py-2 border-b border-blue-400 text-blue-700 font-bold'>Study Summary</h1>
                <div className='shadow-inner px-2 py-2 flex flex-col justify-center items-start w-auto'>
                  <span className='p-2 text-gray-600'>Study Hours: 48hrs/week</span>
                  <span className='p-2 text-gray-600'>Course Covered: 12</span>
                  <span className='p-2 text-gray-600'>Activities: 2 active</span>
                  <span className='p-2 text-gray-600'>Groups: 4 joined</span>
                </div>
              </div>

              <div className='m-auto'>
                <h1 className='py-2 border-b border-blue-400 text-blue-700 font-bold'>History</h1>
                <div className='shadow-inner px-2 py-2 flex flex-col justify-center items-start'>
                  <span className='p-2 text-gray-600'>Logedin: Michael Douglas</span>
                  <span className='p-2 text-gray-600'>Time: 12:00 noon</span>
                  <span className='p-2 text-gray-600'>Status: Active</span>
                </div>
              </div>
            </article>
          </section>

          :
          // Elese condition
          <div className='w-[100%] grid sm:gridcols-1 md:grid-cols-2 gap-2 mt-4'>
            <div className='bg-blue-50 mt-2 py-4 px-2 flex flex-col items-center justify-center'>
              <h1 className='text-gray-500 font-bold'>Chanege Profile Photo</h1>
              <div className='mt-2 flex flex-col items-center justify-center'>
                <div className='w-[250px] h-[250px] bg-slate-300 rounded-full relative'>
                  <div className='w-full h-full rounded-full overflow-hidden'>

                  </div>
                  <div className='absolute bottom-[2rem] right-[2rem] w-[30px] h-[30px]'>
                   <input type="file" id="file" className='hidden'/>
                   <label for="file"><FaCamera className='w-full h-full text-gray-600'/></label>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section >> Fields updates */}
            <div className='w-full mt-2'>
              <h1 className='text-gray-500 font-bold'>Personal Details</h1>
              <form className='flex-1 mt-2'>
                <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" required value='Michael Douglas'/>
                </div>
                <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">National ID</label>
                    <input type="text" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" value='98364523' required />
                </div>
                <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Age</label>
                    <input type="text" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" value='27' required />
                </div>
                <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Gender</label>
                    <input type="text" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" value='Male' required />
                </div>
                <div class="mb-6">
                    <label for="repeat-password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Nationality</label>
                    <input type="text" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" value='Kenyan' required />
                </div>
          
                <button type="submit" class="text-white bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Update</button>
              </form>
            </div>

          </div>
          }
        </main>
      </article>
    </>
  )
}

export default Profile
