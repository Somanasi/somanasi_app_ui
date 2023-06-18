import React from 'react';
import Sidebar from '../components/layouts/Sidebar';
import Topbar from '../components/layouts/Topbar';
import MainApp from '../components/layouts/MainApp';
// import Dashboardfooter from '../components/layouts/Dashboardfooter';

const Dashboard = () => {
  return (
    <main className='w-screen h-screen m-0 p-0 flex'>
     {/* Side bar */}
     <Sidebar />

     {/* Right display */}
     <section className='flex-grow bg-white'>
      {/* Top Display */}
      <Topbar />

      {/* Main display init */}
      <MainApp />

     </section>
    </main>
  )
}

export default Dashboard