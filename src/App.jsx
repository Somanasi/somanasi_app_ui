import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet/>
      </section>
      <Footer/>
    </>

  )
}

export default App