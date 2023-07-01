import React from 'react'
import ChangePasswordPage from '../pages/Changepassword'
import Sidebar from '../components/layouts/Sidebar'
import Topbar from '../components/layouts/Topbar'

const ChangePassword = () => {
  return (
    <main className='w-[100%] h-screen flex m-0 p-0'>
        {/* Side bar */}
        <Sidebar />

        {/* Right display */}
        <section className='flex-grow bg-slate-100 relative transition-all duration-500'>
        {/* Top Display */}
        <Topbar />

        {/* Main display init */}
         <ChangePasswordPage/>

        </section>
    </main>
  )
}

export default ChangePassword
