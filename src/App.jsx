import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components'

const App = () => {

  return (
    <>
      <Navbar />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>

  )
}

export default App