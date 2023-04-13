import React from 'react'
import { useDispatchAppState } from '../store/ApplicationContext'

const Logout = () => {
  console.log('user logged out')
  const dispatchState = useDispatchAppState();
  const userLogout = useDispatchAppState( {
    type: 'USER_LOGIN_STATUS',
    payload: {
      isLoggedIn: false,
    }
  })
  return (
    <div>Logout</div>
  )
}

export default Logout