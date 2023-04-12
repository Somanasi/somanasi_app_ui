import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components'
import ApplicationStateReducer from './store/ApplicationContext';

const App = () => {
  return (
    <>
      <Navbar  visible={appState} toggle={dispatchAppState}/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>

  )
}

export default App