import React from 'react';
import { FaBars, FaCalendarAlt, FaCog, 
  FaPalette, FaRegChartBar, FaRegFileVideo, FaUsers, FaRoute, FaTasks, FaChevronDown, FaBell, FaEnvelope, FaUser, FaFilter, FaSearch, FaUserFriends, FaClipboardCheck,FaChartLine, FaStar, FaHive, FaCompass } from "react-icons/fa";
import BarChart from './graphs-init';

const Dashboard = () => {
  return (
    <main className='p-0 w-100 h-full m-0 grid col-span-1 md:grid-cols-6'>
     {/* Side bar */}
     <section className='col-span-1 md:col-span-2 lg:col-span-1 h-100 z-40 h-screen'> 
      <div className='p-2 m-0 bg-white flex justify-between items-center'>
        <p className='text-xl font-bold'>Logo</p>
        <FaBars size={20} className='cursor-pointer'/>
      </div>

      <div className='w-100 p-2'>

        <article className='w-100 bg-green-100 p-1 mt-1 rounded-md'>
          <h1 className='font-bold m-2 pb-1 flex items-center'><FaPalette />&nbsp;&nbsp;Dashboard</h1>
          <div className='w-100 pl-2 ml-2'>
            <span className='flex justify-start items-center cursor-pointer m-1 p-1 bg-white rounded-md'>
              <div><FaCalendarAlt /></div>
              <p className='pl-2 stroke-zinc-800'>Calenda</p>
            </span>
            <span className='flex justify-start items-center cursor-pointer m-1 p-1 bg-white rounded-md'>
              <div><FaCog /></div>
              <p className='pl-2 stroke-zinc-800'>Settings</p>
            </span>
          </div>
        </article>
        {/* Others */}

        {/* Courses */}
        <article className='w-100 bg-orange-100 p-1 mt-1 rounded-md'>
        <h1 className='font-bold m-2 pb-1 flex items-center'><FaTasks />&nbsp;&nbsp;Courses</h1>
          <div className='w-100 pl-2 ml-2'>
            <span className='flex justify-start items-center cursor-pointer m-1 p-1 bg-white rounded-md'>
              <div className='pl-2 stroke-zinc-800'><FaClipboardCheck /></div>
              <p className='pl-2 stroke-zinc-800'>Complete</p>
            </span>
            <span className='flex justify-start items-center cursor-pointer m-1 p-1 bg-white rounded-md'>
              <div className='pl-2 stroke-zinc-800'><FaChartLine /></div>
              <p className='pl-2 stroke-zinc-800'>In progress</p>
            </span>
            <span className='flex justify-start items-center cursor-pointer m-1 p-1 bg-white rounded-md'>
              <div className='pl-2 stroke-zinc-800'><FaStar /></div>
              <p className='pl-2 stroke-zinc-800'>Favorite</p>
            </span>
          </div>
        </article>

        {/* Activities */}
        <article className='w-100 bg-blue-100 p-1 mt-1 rounded-md'>
        <h1 className='font-bold m-2 pb-1 flex items-center'><FaRoute />&nbsp;&nbsp;Activities</h1>
          <div className='w-100 pl-2 ml-2'>
            <span className='flex justify-start items-center cursor-pointer m-1 p-1 bg-white rounded-md'>
              <div className='pl-2 stroke-zinc-800'><FaHive /></div>
              <p className='pl-2 stroke-zinc-800'>Packages</p>
            </span>
            <span className='flex justify-start items-center cursor-pointer m-1 p-1 bg-white rounded-md'>
              <div className='pl-2 stroke-zinc-800'><FaUsers /></div>
              <p className='pl-2 stroke-zinc-800'>Community</p>
            </span>
            <span className='flex justify-start items-center cursor-pointer m-1 p-1 bg-white rounded-md'>
              <div className='pl-2 stroke-zinc-800'><FaRegFileVideo /></div>
              <p className='pl-2 stroke-zinc-800'>Conferences</p>
            </span>
            <span className='flex justify-start items-center cursor-pointer m-1 p-1 bg-white rounded-md'>
              <div className='pl-2 stroke-zinc-800'><FaRegChartBar /></div>
              <p className='pl-2 stroke-zinc-800'>Analytics</p>
            </span>
          </div>
        </article>

        {/* Footer copyright */}
        <article className='w-100 bg-black-700 p-1 mt-1 rounded-md'>
          <p className='text-center text-sm '>Copyright &copy; 2023 Elimuendelezi.co.ke</p>
        </article>
      </div>
     </section>

     {/* Right display */}
     <section className='col-span-1 md:col-span-4 lg:col-span-5 p-0 m-0 h-screen bg-white-100'>
      {/* Top Display */}
      <header className='bg-amber-600 p-0 m-0 w-100 h-14 flex flex-wrap justify-between items-center'>
        <p className='font-bold text-white text-2xl pl-3'>Elimuendelezi</p>
        {/* Profile */}
        <div className='flex justify-end items-center md:mr-6'>
          <div className='flex flex-wrap justify-between items-center mr-4'>
            <div className='w-10 h-16 grid items-center relative'>
              <FaBell size={20} color='white' className='cursor-pointer'/>
              <span className="absolute top-0 right-0 text-white w-6 h-6 rounded-full p-1 bg-red-600 flex justify-center align-top">10</span>
            </div>
            <div className='w-10 h-16 grid items-center relative'>
              <FaEnvelope size={20} color='white' className='cursor-pointer'/>
              <span className='absolute top-0 right-0 text-white w-6 h-6 rounded-full p-1 bg-red-600 flex justify-center align-top'>12</span>
            </div>
          </div>

          <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center mr-2'>
            <FaUser size={20} color='grey'/>
          </div>
          <div className='w-8 h-8 rounded-sm bg-slate-300 flex justify-center items-center cursor-pointer'><FaChevronDown /></div>
        </div>
      </header>

      {/* Main display init */}
      <article className='bg-white-600 p-0 m-0 w-100'>
        {/* Navigation status */}
        <div className='flex flex-wrap justify-between items-center p-1 mt-1 shadow-md w-100'> 
          <p className='font-bold pl-2'>Dashbord</p>
          <div className='flex justify-center items-center mr-4'>
            <div className='pr-3 flex justify-end items-center'>
              <FaSearch />
              <input type='search' placeholder='Search...' className='p-2 border-none outline-none'/>
            </div>
            <div className='flex justify-center items-center'>
              <p>Filter</p>
              <FaFilter />
            </div>
          </div>
        </div>

        {/* USer data section */}  
          <section className="w-100 p-1">
            <div className='p-2'>
              <h1 className='font-bold text-2xl text-purple-600'>Highlights</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              <div className='flex justify-center items-center flex-wrap'>
                <div className='flex flex-col justify-center items-center shadow-lg rounded-md w-100 h-50 p-1 inset-1 m-1 border-t-4 border-blue-400'>
                  <div className='w-100'>
                    <FaUserFriends size={60}/>
                  </div>
                  <span className='tex-center text-xl p-1 px-12'>Community</span>
                  <p className='font-bold p-1 text-4xl'>+20</p>
                </div>
              </div>
               <div className='flex justify-center items-center flex-wrap'>
                <div className='flex flex-col justify-center items-center shadow-lg rounded-md w-100 h-50 p-1 inset-1 m-1 border-t-4 border-purple-400'>
                  <div className='w-100'>
                    <FaCompass size={60}/>
                  </div>
                  <span className='tex-center text-xl p-1 px-12'>Activities</span>
                  <p className='font-bold p-1 text-4xl'>+53</p>
                </div>
              </div>
               <div className='flex justify-center items-center flex-wrap'>
                <div className='flex flex-col justify-center items-center shadow-lg rounded-md w-100 h-50 p-1 inset-1 m-1 border-t-4 border-green-400'>
                  <div className='w-100'>
                    <FaStar size={60}/>
                  </div>
                  <span className='tex-center text-xl p-1 px-12'>Favorites</span>
                  <p className='font-bold p-1 text-4xl'>+99</p>
                </div>
              </div>
               <div className='flex justify-center items-center flex-wrap'>
                <div className='flex flex-col justify-center items-center shadow-lg rounded-md w-100 h-50 p-1 inset-1 m-1 border-t-4 border-blue-400'>
                  <div className='w-100'>
                    <FaUserFriends size={60}/>
                  </div>
                  <span className='tex-center text-xl p-1 px-12'>Courses</span>
                  <p className='font-bold p-1 text-4xl'>+13</p>
                </div>
              </div>
            </div>

            <span className='grid sm:grid-cols-1 md:grid-cols-2 mt-2'>
              <div className='p-2'>
                <h1 className='font-bold text-2xl text-orange-500'>Analysis</h1>
                <div className='shadow-lg mt-2 px-4'>
                  <BarChart />
                </div>
              </div>
              {/* Display content for analysis */}
              <div className='p-2'>
                <h1 className='font-bold text-2xl text-blue-500'>Activities</h1>

                <div className='flex flex-col'>

                  <div className='shadow-sm p-1 flex items-center w-100 rounded-md mt-1'>
                    <div className='w-10 py-2 mt-2'>
                      <FaBell size={20}/>
                    </div>
                    <p className='font-bold text-md'></p>
                  </div>

                </div>
              </div>
            </span>
          </section>
        <div></div>
      </article>
     </section>
    </main>
  )
}

export default Dashboard