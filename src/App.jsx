import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './modules/layout'
import { ApplicationStateProvider } from './store/ApplicationContext'

const App = () => {
  
  return (
    <ApplicationStateProvider>
      <Navbar />
      <>
        <Outlet />
      </>
      {/* <Footer /> */}
    </ApplicationStateProvider>

  )
}

export default App