import ChangePassword from '../view/ChangePassword'
import Dashboard from '../view/Dashboard'
import UserProfile from '../view/UserProfile'
import { DashboardContextProvider } from "./dashboard-context"

const MainDashboard = () => {

  return (
    <DashboardContextProvider>
        <ChangePassword/>
        <Dashboard/>
        <UserProfile/>
    </DashboardContextProvider>
  )
}

export default MainDashboard
