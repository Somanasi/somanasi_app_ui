import React from 'react'
import { AdminDashboardStateProvider } from '../adminStore'
import {Outlet} from 'react-router-dom'
import SideBar from '../components/SideBar'
import MainAdminDashboardApp from '../components/MainAdminDashboardApp'
import AdminDashboardFooter from '../components/AdminDashboardFooter'

const AdminDashoboard = () => {
  return (
    <AdminDashboardStateProvider>
        <SideBar />
        <MainAdminDashboardApp />
        <Outlet />
        <AdminDashboardFooter />
    </AdminDashboardStateProvider>
  )
}

export default AdminDashoboard