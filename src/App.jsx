import React, {useReducer, useState} from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components'
import ApplicationStateReducer from './components/StateFunction';

const App = () => {
  const [toggleMobileView, setToggleMobileView] = useState(false);
  const [appState, dispatchAppState] = useReducer(
    ApplicationStateReducer,
    {
      state_data: [],
      toggleMobileView: false,
    }
  )
  return (
    <>
      <Navbar  visible={appState.toggleMobileView} toggle={dispatchAppState}/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>

  )
}

export default App