import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { ApplicationStateProvider } from './store/ApplicationContext'

const App = () => {
  // Set page title
  PageTitle(document.URL);
  return (
    <ApplicationStateProvider>
      <Navbar/>
      <>
        <Outlet/>
      </>
      <Footer/>
    </ApplicationStateProvider>

  )
}

export default App