import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet/>
      </section>
    </div>

  )
}

export default App