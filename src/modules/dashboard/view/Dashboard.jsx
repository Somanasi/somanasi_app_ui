import React from 'react';
import Sidebar from '../components/layouts/Sidebar';
import Topbar from '../components/layouts/Topbar';
import Dashboardliteral from '../pages/Dashboard';

const Dashboard = () => {
  return (
    <main className='h-screen flex flex-row flex-wrap'>
     {/* Side bar */}
     <Sidebar />

     {/* Right display */}
     <section className='sm:w-[100%] lg:w-auto flex-auto'>
      {/* Top Display */}
      <Topbar />

      {/* Main display init */}
      <Dashboardliteral/>

     </section>
    </main>
  )
}

export default Dashboard