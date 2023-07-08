import { createContext, useContext, useReducer } from "react";
import { AdminDashboardStateReducer } from "./AdminDashboardStateReducer";
import { FaUserShield } from 'react-icons/fa';



const AdminDashboardContext = createContext(null);
const AdminContextDispatcher = createContext(null);
export const AdminDashboardStateProvider = ({ children }) => {
  const [state, dispatcher] = useReducer(
    AdminDashboardStateReducer,
    {
        links: [
            {
                to: "/admin",
                order: 2,
                disabled: false,
                showSublinks: false,
                title: "Admin Dashboard",
                icon: <FaUserShield size={20}/>,
            }
        ],
        toggleDashboardSidebar: true,
    });
    return (
        <AdminDashboardContext.Provider value={state}>
            <AdminContextDispatcher.Provider value={dispatcher} >
                {children}
            </AdminContextDispatcher.Provider>
        </AdminDashboardContext.Provider>
    )
};

export const adminState = () => useContext(AdminDashboardContext);
export const adminStateDispatcher = () => useContext(AdminContextDispatcher);