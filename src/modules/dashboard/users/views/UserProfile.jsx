import React from 'react';
import Sidebar from '../components/layouts/Sidebar';
import Topbar from '../components/layouts/Topbar';
import Profile from '../pages/Profile';


const UserProfile = () => {
  return (
    <main className='w-[100%] h-screen flex m-0 p-0'>
     {/* Side bar */}
     <Sidebar />

     {/* Right display */}
     <section className='flex-grow bg-slate-100 relative transition-all duration-500'>
        
      {/* Top Display */}
      <Topbar />

      {/* Main display init */}
      <Profile/>

     </section>
    </main>
  )
}

export default UserProfile