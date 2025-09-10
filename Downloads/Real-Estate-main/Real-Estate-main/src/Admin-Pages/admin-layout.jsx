import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/dashboard-side'
import './admin-layout.css'

const AdminLayout = () => {
    return (
        <>
            <h1 className="welcome-admin">Welcome Admin</h1>
            <div className="admin-layout">
                <Sidebar />
                <div className="admin-content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminLayout