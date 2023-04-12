import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { ApplicationStateProvider } from './store/ApplicationContext'

const App = () => {
  return (
    <ApplicationStateProvider>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </ApplicationStateProvider>

  )
}

export default App