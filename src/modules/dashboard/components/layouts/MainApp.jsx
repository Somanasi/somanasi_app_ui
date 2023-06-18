import React from 'react'
import { FaBook, FaFilter, FaLifeRing, FaSearch } from 'react-icons/fa'
import { DashboardCardData } from '../../data/cards'
// import { FaBell, FaChevronCircleRight, FaFilter, FaSearch } from "react-icons/fa";
// import BarChart from '../charts/graphs-init';
// import { DashboardCardData } from '../../data/cards';


const MainApp = () => {
  return (
    <>
       <article className='w-full py-2 px-2'>
        {/* top section */}
        <div className='py-1 px-4 bg-green-50 w-50 flex justify-between items-center shadow-sm'>
          {/* Navigator */}
          <div className='font-bold'>
            Dashboard
          </div>


          {/* Search container */}
          <div className='py-1 px-4 flex flex-row items-center justify-start w-80 rounded-lg bg-white'> 
            <FaSearch/>
            <input type='search' placeholder='Search...' className='ml-2 py-1 px-2 outline-0 border-spacing-0 w-full'/>
          </div>

          {/* Filter page */}
          <div className='flex flex-row justify-center items-center mr-4'> 
            <div className='px-2 mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400'><FaLifeRing/></div>
            <div className='px-2 mr-2 w-8 h-6 grid items-center cursor-pointer hover:text-orange-400'><FaFilter/></div>
          </div>
        </div>

        


        {/* Display section */}
        <main className='w-full'>
          <setion className="bg-blue-400 grid lg:grid-cols-4 gap-1 py-2 px-6 h-12 mt-2 rounded-tl-md rounded-tr-md relative">
            {
              DashboardCardData.map((data, id) => {
                return   <article className='p-2 shadow-md rounded-md mt-2 bg-white flex flex-row justify-around items-start border-l-8 border-orange-500 mx-auto' key={id}>
                <div className='flex flex-col justify-start items-start'>
                  <small className='font-bold py-1'>{data.cardTitle}</small>
                  <small className='font-bold py-1'>{data.cardCapacity}</small>
                  <small className='font-bold py-1'>{data.time}</small>
                </div>
                <div className='w-12 h-12 flex justify-center items-center ml-4 text-4xl'>{data.cardIcon}</div>
              </article>
              })
            }
          </setion>

          <setion></setion>
        </main>
      </article>
    </>
  )
}

export default MainApp
