import React from 'react'
import { FaFilter, FaLifeRing, } from 'react-icons/fa'
// import { Dashboardfooter } from "../components/layouts/Dashboardfooter"


const Profile = () => {
  return (
    <>
       <article className='m-0 sm:px-1 md:px-2 lg:px-16'>
        {/* top section */}
        <div className='py-2 flex flex-row justify-between items-center'>
          {/* Navigator */}
          <div className='font-bold text-xl'>
            My Profile
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
        </main>
      </article>
    </>
  )
}

export default Profile
