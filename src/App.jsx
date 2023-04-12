import React, {useReducer,} from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components'
import ApplicationStateReducer from './store/StateFunction';

const App = () => {
  const [appState, dispatchAppState] = useReducer(
    ApplicationStateReducer,
    {
      state_data: [],
      reviews: [],
      toggleMobileView: false,
      isLoggedIn: true,
    }
  )
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