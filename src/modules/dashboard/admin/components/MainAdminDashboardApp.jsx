import React from 'react'
import AdminDashboardAppTopBar from './AdminDashboardAppTopBar'
import Content from '../modules/content/views/Content'

const MainAdminDashboardApp = () => {
  return (
    <main>
        <AdminDashboardAppTopBar/>
        <Content />
    </main>
  )
}

export default MainAdminDashboardApp