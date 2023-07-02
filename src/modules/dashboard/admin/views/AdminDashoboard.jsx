import React from "react";
import { AdminDashboardStateProvider } from "../adminStore";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const AdminDashoboard = () => {
  return (
    <AdminDashboardStateProvider>
      <div className='admin'>
        <SideBar />
        <Outlet />
      </div>
    </AdminDashboardStateProvider>
  );
};

export default AdminDashoboard;
