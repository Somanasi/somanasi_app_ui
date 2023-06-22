import React from 'react'
import { FaFilter, FaLifeRing, FaSearch } from 'react-icons/fa'


const Profile = () => {
  return (
    <>
       <article className=''>
        {/* top section */}
        <div className=''>
          {/* Navigator */}
          <div className='font-bold'>
            Profile
          </div>


          {/* Search container */}
          <div className=''> 
            <FaSearch/>
            <input type='search' placeholder='Search...' className='ml-2 py-1 px-2 outline-0 border-spacing-0 w-full'/>
          </div>

          {/* Filter page */}
          <div className=''> 
            <div className=''><FaLifeRing/></div>
            <div className=''><FaFilter/></div>
          </div>
        </div>

        

        {/* Display section */}
        <main className=''>
          <section className=''>
            <div className=''>
              <div className=''>
                {/* Image goes here */}
              </div>
              <div className=''>
                <form>

                </form>
              </div>
            </div>

            <div className=''>
              <form className=''>
                
              </form>
            </div>
          </section>

          {/* Links view page */}
        </main>
      </article>
    </>
  )
}

export default Profile
