import React from 'react'
import { FaClock, FaEllipsisV, FaEnvelope, FaFilter, FaHome, FaLifeRing, FaReact, FaSearch, FaVectorSquare } from 'react-icons/fa'
import { DashboardCardData } from '../../data/cards'
import BarChart from '../charts/graphs-init';


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
        <main className='w-full lg:px-10'>
          <setion className="bg-slate-50 grid lg:grid-cols-4 gap-1 py-2 px-6 h-24 mt-2 rounded-tl-md rounded-tr-md relative mb-4">
            {
              DashboardCardData.map((data, id) => {
                return   <article className='p-2 shadow-md rounded-md mt-2 bg-white flex flex-row justify-around items-start border-l-8 border-orange-500 mx-auto' key={id}>
                <div className='flex flex-col justify-start items-start'>
                  <small className='font-bold py-1'>{data.cardTitle}</small>
                  <small className='font-bold py-1'>{data.cardCapacity}</small>
                  <small className='font-bold py-1'>{data.time}</small>
                </div>
                <div className='w-12 h-12 flex justify-center items-center ml-4 text-4xl cursor-pointer'>{data.cardIcon}</div>
              </article>
              })
            }
          </setion>



          {/* Graph visualization */}
          <section className='py-4 px-2 mt-6 grid lg:grid-cols-2 sm:grid-col-1 gap-4'>
            <div className='shadow-md bg-slate-50 py-4 px-2'>
              <div className='flex flex-row justify-between items-center border-b-2 border-gray-100 py-1'>
                <h1 className='font-bold'>Visualize ~ Studies</h1>
                <FaEllipsisV/>
              </div>
              <div className='w-full overflow-hidden h-60 px-2'>
               <BarChart />
              </div>
            </div>


            {/* Table section */}
            <div className='shadow-md bg-slate-50 py-4 px-2'>
              <div className='flex flex-row justify-between items-center border-b-2 border-gray-100 py-1'>
                <h1 className='font-bold'>Table ~ Courses</h1>
                <FaEllipsisV/>
              </div>
              <div className='w-full overflow-hidden h-60 px-2'>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg h-100">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-full">

                    <thead class="text-xs text-gray-700 uppercase bg-gray-5 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">Course Name</th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">Units</div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">Length</div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div class="flex items-center">Price</div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                          <div class="flex items-center">Action</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr class="border-b dark:border-gray-700 bg-slate-400">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Computer Science</th>
                        <td class="px-6 py-4 dark:text-white">48</td>
                        <td class="px-6 py-4 dark:text-white">3hrs/day</td>
                        <td class="px-6 py-4 dark:text-white">$2999</td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700 bg-slate-400">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Nursing</th>
                        <td class="px-6 py-4 dark:text-white">32</td>
                        <td class="px-6 py-4 dark:text-white">3hrs/day</td>
                        <td class="px-6 py-4 dark:text-white">$20300</td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>



          {/* Links Available */}
          <section className='p2'>
           <div className='shadow-md bg-slate-50 py-4 px-2'>
              <div className='flex flex-row justify-between items-center border-b-2 border-gray-100 py-1'>
                <h1 className='font-bold'>Links ~ History</h1>
                <FaEllipsisV/>
              </div>
              <div className='w-full overflow-hidden px-2'>
                <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mt-1">
                  <li class="mr-2">
                    <a href="#" class="px-4 py-3 hover:text-white bg-gray-200 text-black hover:bg-blue-600 rounded-full active flex flex-row items-center" aria-current="page"> <FaHome/>&nbsp;Home Packages</a>
                  </li>
                  <li class="mr-2">
                    <a href="#" class="px-4 py-3 hover:text-white bg-gray-200 text-black hover:bg-blue-600 rounded-full active flex flex-row items-center" aria-current="page"> <FaVectorSquare/>&nbsp;Constructions</a>
                  </li>
                  <li class="mr-2">
                    <a href="#" class="px-4 py-3 hover:text-white bg-gray-200 text-black hover:bg-blue-600 rounded-full active flex flex-row items-center" aria-current="page"> <FaReact/>&nbsp;Reactions</a>
                  </li>
                  <li class="mr-2">
                    <a href="#" class="px-4 py-3 hover:text-white bg-gray-200 text-black hover:bg-blue-600 rounded-full active flex flex-row items-center" aria-current="page"> <FaEnvelope/>&nbsp;Comments</a>
                  </li>
                  <li class="mr-2">
                    <a href="#" class="px-4 py-3 hover:text-white bg-gray-200 text-black hover:bg-blue-600 rounded-full active flex flex-row items-center" aria-current="page"> <FaClock/>&nbsp;Time elapse</a>
                  </li>
                </ul>

              </div>
            </div>
          </section>

        </main>
      </article>
    </>
  )
}

export default MainApp
