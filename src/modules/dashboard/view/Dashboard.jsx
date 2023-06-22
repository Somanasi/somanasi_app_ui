import React from 'react';
import Sidebar from '../components/layouts/Sidebar';
import Topbar from '../components/layouts/Topbar';
// import Dashboardliteral from '../pages/Dashboard';
import Profile from '../pages/Profile';


const Dashboard = () => {
  return (
    <main className='w-[100%] h-screen flex m-0 p-0'>
     {/* Side bar */}
     <Sidebar />

     {/* Right display */}
     <section className='flex-grow bg-slate-100 relative'>
      {/* Top Display */}
      <Topbar />

      {/* Main display init */}
      {/* <Dashboardliteral/> */}
      <Profile/>

     </section>
    </main>
  )
}

export default Dashboard