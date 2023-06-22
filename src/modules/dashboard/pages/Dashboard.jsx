import React from 'react'
import BarChart from '../components/charts/graphs-init';
import Dashboardfooter from '../components/layouts/Dashboardfooter';
import { FaClock, FaEllipsisV, FaEnvelope, FaFilter, FaHome, FaLifeRing, FaReact, FaSearch, FaVectorSquare } from 'react-icons/fa'
import { DashboardCardData } from '../data/cards'


const Dashboardliteral = () => {
  return (
    <>
      <article className='w-screen py-2 px-1 lg:px-12 md:px-4 sm:px-1'>
        {/* top section */}
        <div className='py-1 sm:px-1 lg:px-4 bg-green-50 sm:w-[100%] lg:w-50 flex justify-between items-center shadow-sm'>
          {/* Navigator */}
          <div className='font-bold'>
            Dashboard
          </div>


          {/* Search container */}
          <div className='py-1 px-2 flex flex-row items-center justify-start w-80 rounded-full bg-slate-50'> 
            <FaSearch/>
            <input type='search' placeholder='Search...' className='ml-2 py-1 px-4 outline-0 border-spacing-0 w-full rounded-full'/>
          </div>

          {/* Filter page */}
          <div className='flex flex-row sm:justify-end lg:justify-center items-center sm:mr-1 lg:mr-4'> 
            <div className='px-2 mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400'><FaLifeRing/></div>
            <div className='px-2 mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400'><FaFilter/></div>
          </div>
        </div>

      
        {/* Display section */}
        <main className='relative lg:mt-6 md:mt-2 sm:mt-0'>
          <setion className="grid md:grid-col-2 lg:grid-cols-4 gap-2 py-2 mt-2 rounded-tl-md rounded-tr-md relative mb-4">
            {
              DashboardCardData.map((data, id) => {
                return   <article className='p-2 shadow-md rounded-md mt-2 bg-white flex flex-row justify-around items-start border-l-8 border-orange-500 mx-auto' key={id}>
                <div className='flex flex-col justify-start items-start'>
                  <small className='font-bold py-1 text-sm'>{data.cardTitle}</small>
                  <small className='font-bold py-1 text-sm'>{data.cardCapacity}</small>
                  <small className='font-bold py-1 text-sm'>{data.time}</small>
                </div>
                <div className='w-12 h-12 flex justify-center items-center ml-2 text-4xl cursor-pointer'>{data.cardIcon}</div>
              </article>
              })
            }
          </setion>



          {/* Graph visualization */}
          <section className='py-4 mt-8 grid lg:grid-cols-2 sm:grid-col-1 gap-4 lg:px-8 sm:px-0 md:px-2'>
            <div className='shadow-md bg-slate-50 py-2 w-auto'>
              <div className='flex flex-row justify-between items-center border-b-2 border-gray-100 py-1 px-4'>
                <h1 className='font-bold'>Visualize ~ Studies</h1>
                <FaEllipsisV/>
              </div>
              <div className='w-full overflow-hidden h-68 px-2'>
               <BarChart />
              </div>
            </div>


            {/* Table section */}
            <div className='shadow-md bg-slate-50 py-4'>
              <div className='flex flex-row justify-between items-center border-b-2 border-gray-100 py-1 px-4'>
                <h1 className='font-bold'>Visualize ~ Studies</h1>
                <FaEllipsisV/>
              </div>
              {/* <div className='w-full overflow-hidden h-68'>
                <ul className='m-2 p-1 flex flex-row flex-wrap items-center justify-start'>
                  <li className='flex flex-row items-center justify-center py-1 px-2 cursor-pointer bg-gray-200 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-500'>
                    <FaClock/><small className='pl-2'>History</small>
                  </li>
                  <li className='flex flex-row items-center justify-center py-1 px-2 cursor-pointer bg-gray-200 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-500'>
                    <FaEnvelope/><small className='pl-2'>All Notofications</small>
                  </li>
                  <li className='flex flex-row items-center justify-center py-1 px-2 cursor-pointer bg-gray-200 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-500'>
                    <FaHome/><small className='pl-2'>Dashboard</small>
                  </li>
                  <li className='flex flex-row items-center justify-center py-1 px-2 cursor-pointer bg-gray-200 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-500'>
                    <FaReact/><small className='pl-2'>Chemistry</small>
                  </li>
                  <li className='flex flex-row items-center justify-center py-1 px-2 cursor-pointer bg-gray-200 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-500'>
                    <FaVectorSquare/><small className='pl-2'>Graphs</small>
                  </li>
                </ul>
              </div> */}
            </div>
          </section>


          {/* Footer sectiob */}
          <section className='mt-8'>
            <Dashboardfooter />
          </section>

        </main>
      </article>
    </>
  )
}

export default Dashboardliteral
