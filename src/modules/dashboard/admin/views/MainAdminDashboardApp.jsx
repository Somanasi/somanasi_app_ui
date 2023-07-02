import React, {useEffect} from 'react'
import AdminDashboardAppTopBar from '../components/AdminDashboardAppTopBar'
import links from '../modules/content/links'
import { adminState, adminStateDispatcher } from '../adminStore'
import AdminDashboardFooter from '../components/AdminDashboardFooter'

const MainAdminDashboardApp = () => {

  return (
    <main>
        <AdminDashboardAppTopBar/>
        <AdminDashboardFooter />
    </main>
  )
}

export default MainAdminDashboardApp