import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components'

const App = () => {
  const [toggleMobileView, setToggleMobileView] = useState(false);
  return (
    <>
      <Navbar  visible={toggleMobileView} toggle={setToggleMobileView}/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>

  )
}

export default App