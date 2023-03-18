import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import App from './App'
import './index.css'

const routes = createBrowserRouter (
  createRoutesFromElements (
    <Route 
      element={<App />}
      errorElement={<Error />}
      path='/'
    >
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  </React.StrictMode>,
)
