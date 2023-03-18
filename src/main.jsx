import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import App from './App'
import Error from './routes/Error'
import Home from './routes/Home'
import Courses from './routes/Courses'

const routes = createBrowserRouter (
  createRoutesFromElements (
    <Route 
      element={<App />}
      errorElement={<Error />}
      path='/'
    >
      <Route 
        element={<Home/>}
        index
      />
      <Route
        element={<Courses />}
        path='courses'
      />
      <Route
        element={<Blog/>}
        path='blog'
      />
      <Route
        element={<AboutUs/>}
        path='about_us'
      />
      <Route
        element={<ContactUs/>}
        path='contact_us'
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
