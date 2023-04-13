import React from 'react'
import { useDispatchAppState } from '../store/ApplicationContext'

const Logout = () => {
  console.log('user logged out')
  const dispatchState = useDispatchAppState();
  return (
    <div>Logout</div>
  )
}

export default Logout