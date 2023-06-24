import React, { useState } from 'react'
import { FaAccessibleIcon, FaBars, FaInfo } from 'react-icons/fa'
// import { FaTimes } from "react-icons/fa";
// import { NavigationsLinks } from '../../data/cards';
import { NavigationsLinks } from '../../data/cards'
import { Link } from "react-router-dom"

const Sidebar = () => {

  const [expanded, setExpanded] = useState(null);
  const [toggle, setToggle] = useState(true)

  const handleHeadingClick = (id) => {
    if (expanded === id) {
      setExpanded(null); 
    } else {
      setExpanded(id);
    }
  };
    
  return (
    <>
    <section className={`flex flex-col justify-between m-0 py-4 px-2 bg-blue-950 transition-all ${toggle ? 'lg:w-[18%] md:w-[30%] duration-300' : 'lg:w-[3%] md:w-[4%] duration-500'}`}>
     <nav>
      {/* Dashboard logo */}
      <section className={'flex items-center justify-between py-2 px-2 bg-slate-50 rounded-md'+ (toggle ? ' pl-2' : ' pl-4 bg-transparent')}>
       <div className={'text-xl font-bold text-black'+ (toggle ? ' block' : ' hidden')}>Logo</div>
       <FaBars size={20} className={'text-black cursor-pointer'+ (toggle ? ' text-black' : ' text-white text-xl')} onClick={() => {setToggle(!toggle)}}/>
      </section>


      {/* Profile settings */}
      <section className={'py-2 px-2 rounded-md mt-2 transition-all duration-500'+ (toggle ? ' block' : ' hidden')}>
      <div className='flex flex-col items-center justify-center shadow py-4'>
        <div className='w-[80px] h-[80px] rounded-full bg-slate-400'>

        </div>
        <div className='mt-2 flex flex-col items-center justify-center'>
          <small className='text-white text-md'>Michael&nbsp;Douglas</small>
          <small className='text-white text-md'>gtech29.gmail@gmail.com</small>
        </div>
      </div>
      </section>


      {/* Links sets */}
      <section className='flex flex-col justify-center items-left mt-2 transition-all duration-500'>
        {NavigationsLinks.map((item, id) => {
          return (
            <article key={id} className='p-2 flex flex-row items-center justify-start'>
              <div className='flex flex-col items-start w-[100%] rounded-md'>
                <div
                  className='flex flex-row items-center justify-start cursor-pointer py-1 px-2 flex-grow text-md flex-1'
                  onClick={() => handleHeadingClick(id)}
                >
                  <span className='text-white'>{item.headingIcon}</span>
                  <span className='ml-3 text-white'>{item.heading}</span>
                </div>
                {expanded === id && ( // Render the links only if expanded is true for this item
                  <div className='ml-9 flex flex-col justify-center items-start transition-all duration-500 w-[80%] rounded-md'>  
                    {item.data.map((link, key) => {
                      return (
                        <Link to={link.path} key={key} className='flex flex-row justify-start items-center mt-2 text-white text-sm'>
                          {link.icon}
                          <span className='ml-2'>{link.text}</span>
                        </Link>
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
     <div className={'flex flex-row justify-around items-center bg-slate-50 rounded-md py-2'+ (toggle ? ' flex-row' : ' flex-col')}>
      <button className='gid items-center p-2 bg-slate-400 rounded-sm'><FaAccessibleIcon/></button>
      <small className={'font-bold text-blue-600'+ (toggle ? ' block' : ' hidden gap-y-2')}>Logedin ~ 12:00noon</small>
      <FaInfo className={'cursor-pointer'+ (toggle && "mt-2")}/>
     </div>
    </section>
    </>
  )
}

export default Sidebar
