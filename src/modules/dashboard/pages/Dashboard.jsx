import React from 'react'
import BarChart from '../components/charts/graphs-init';
import Dashboardfooter from '../components/layouts/Dashboardfooter';
import { FaClock, FaEllipsisV, FaEnvelope, FaFilter, FaHome, FaLifeRing, FaReact, FaSearch, FaVectorSquare } from 'react-icons/fa'
import { DashboardCardData } from '../data/cards'


const Dashboardliteral = () => {
  return (
    <>
      <article className='m-0 sm:px-1 md:px-2 lg:px-16'>
        {/* top section */}
        <div className='py-2 flex flex-row justify-between items-center'>
          {/* Navigator */}
          <div className='font-bold text-xl'>
            Dashboard
          </div>


          {/* Search container */}
          <div className='flex flex-row items-center'> 
            <FaSearch/>
            <input type='search' placeholder='Search...' className='ml-2 px-2 border-none outline-none py-1'/>
          </div>

          {/* Filter page */}
          <div className='flex flex-row items-center'> 
            <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 mr-4 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaLifeRing/></div>
            <div className='p-2 hover:text-white hover:bg-blue-700  transition-all duration-300 rounded-md text-gray-500 cursor-pointer bg-gray-300'><FaFilter/></div>
          </div>
        </div>

      
        {/* Display section */}
        <main className='p-0 m-0'>
          <setion className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
            {
              DashboardCardData.map((data, id) => {
                return   <article className='w-[240px] p-4 flex flex-row justify-between items-start shadow rounded-md mt-4 border-t-4 border-orange-500' key={id}>
                <div className='flex flex-col justify-between items-start'>
                  <small className='text-gray-600 font-bold text-md'>{data.cardTitle}</small>
                  <small className='text-gray-600 font-bold text-md'>{data.cardCapacity}</small>
                  <small className='text-gray-600 font-bold text-md'>{data.time}</small>
                </div>
                <div className='text-4xl'>{data.cardIcon}</div>
              </article>
              })
            }
          </setion>



          {/* Graph visualization */}
          <section className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:mt-4 lg:mt-12 gap-2'>
            <div className='m-0 py-2 lg:px-4 md:px-2 shadow-inner'>
              <div className='flex flex-row justify-between items-center border-b border-gray-300 py-2'>
                <h1 className='text-xl text-gray-500 font-bold'>Visualize ~ Studies</h1>
                <FaEllipsisV/>
              </div>
              <div className='w-[100%]'>
               <BarChart />
              </div>
            </div>


            {/* Table section */}
            <div className='m-0 py-2 lg:px-4 md:px-2 shadow-inner'>
              <div className='flex flex-row justify-between items-center border-b border-gray-300 py-2'>
                <h1 className='text-xl text-gray-500 font-bold'>Visualize ~ Studies</h1>
                <FaEllipsisV/>
              </div>
              <div className='w-[100%] pt-4'>
                <ul className='w-inherit flex flex-row flex-wrap gap-4 items-center justify-start w-[90%] mx-auto'>
                  <li className='flex flex-row items-center justify-center bg-slate-200 hover:bg-blue-500 hover:text-white transition-all duration-500 cursor-pointer rounded-full text-lg'>
                    <FaClock/><small className='pl-2'>History</small>
                  </li>
                  <li className='flex flex-row items-center justify-center bg-slate-200 hover:bg-blue-500 hover:text-white transition-all duration-500 cursor-pointer rounded-full text-lg'>
                    <FaEnvelope/><small className='pl-2'>All Notofications</small>
                  </li>
                  <li className='flex flex-row items-center justify-center bg-slate-200 hover:bg-blue-500 hover:text-white transition-all duration-500 cursor-pointer rounded-full text-lg'>
                    <FaHome/><small className='pl-2'>Dashboard</small>
                  </li>
                  <li className='flex flex-row items-center justify-center bg-slate-200 hover:bg-blue-500 hover:text-white transition-all duration-500 cursor-pointer rounded-full text-lg'>
                    <FaReact/><small className='pl-2'>Chemistry</small>
                  </li>
                  <li className='flex flex-row items-center justify-center bg-slate-200 hover:bg-blue-500 hover:text-white transition-all duration-500 cursor-pointer rounded-full text-lg'>
                    <FaVectorSquare/><small className='pl-2'>Graphs</small>
                  </li>
                </ul>
              </div>
            </div>
          </section>


          {/* Footer sectiob */}
          <section className=''>
            <Dashboardfooter />
          </section>
        </main>
      </article>
    </>
  )
}

export default Dashboardliteral
