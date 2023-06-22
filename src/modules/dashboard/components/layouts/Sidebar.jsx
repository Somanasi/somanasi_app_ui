import React, { useState } from 'react'
import { FaAccessibleIcon, FaBars, FaInfo, FaSignOutAlt } from 'react-icons/fa'
// import { FaTimes } from "react-icons/fa";
// import { NavigationsLinks } from '../../data/cards';
import { NavigationsLinks } from '../../data/cards'

const Sidebar = () => {

  const [expanded, setExpanded] = useState(null);

  const handleHeadingClick = (id) => {
    if (expanded === id) {
      setExpanded(null); 
    } else {
      setExpanded(id);
    }
  };
    
  return (
    <>
    <section className='hidden sm:block py-2 px-1 bg-gray-900 sm:w-[100%] lg:w-[20%] h-screen fixed left-0 top-0 z-50 right-0
    md:w-[40%]'>
     <nav>
      {/* Dashboard logo */}
      <section className='w-100 rounded p-2 flex border-b-2 border-white select-none
     flex-row justify-between items-center'>
       <div className='font-bold text-white'>Logo</div>
       <FaBars size={20} className='text-white'/>
      </section>


      {/* Profile settings */}
      <section className='w-100 rounded p-1 flex 
     flex-row justify-between items-center mt-1'>
      <div className='mx-auto w-50 p-1 flex flex-col justify-center items-center'>
        <div className='w-16 h-16 rounded-full bg-slate-400 gird items-center'>

        </div>
        <div className='flex flex-col justify-center items-center'>
          <small className='text-white'>Michael&nbsp;Douglas</small>
          <small className='text-white'>gtech29.gmail@gmail.com</small>
        </div>
      </div>
      </section>


      {/* Links sets */}
      <section className='w-[100%] rounded p-2 flex 
     flex-col justify-between items-cente mt-2 border-t-2 border-white'>
        {NavigationsLinks.map((item, id) => {
          return (
            <article key={id} className='flex flex-col justify-start py-1 transition-all duration-300'>
              <div className='p-0 flex flex-col'>
                <div
                  className='flex flex-row items-center p-2 rounded-md cursor-pointer text-white transition-opacity duration-500 bg-yellow-500 w-full px-4'
                  onClick={() => handleHeadingClick(id)}
                >
                  <span>{item.headingIcon}</span>
                  <span className='pl-4 font-bold text-sm'>{item.heading}</span>
                </div>
                {expanded === id && ( // Render the links only if expanded is true for this item
                  <div className='w-100 rounded p-2 flex flex-col justify-between items-start ml-4 text-sm transition-all duration-300'>
                    {item.data.map((link, key) => {
                      return (
                        <button key={key} className='flex flex-row justify-start items-center mt-1 hover:bg-green-500 w-full rounded p-2 hover:text-white transition-all duration-300 text-white'>
                          {link.icon}
                          <span className='pl-4 font-bold'>{link.text}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </section>
     </nav>
     {/* End of navigation */}

     {/* Start di rhe logut */}
     <div className='w-100 bg-lime-50 rounded p-2 flex 
     flex-row justify-between items-center absolute bottom-1 right-4 left-4'>
      <button className='rounded bg-red-400 text-center 
      tracking-wider px-2 text-white py-1'><FaAccessibleIcon/></button>
      <small>12:00noon</small>
      <FaInfo/>
     </div>
    </section>
    </>
  )
}

export default Sidebar
