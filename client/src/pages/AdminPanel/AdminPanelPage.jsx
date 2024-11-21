import React from 'react';
import { NavBar } from '../../widgets/User/NavBar'
import { AdminPanel } from '../../widgets/User/AdminPanel';

export const AdminPanelPage = () => {
    return (
        <div>
            <NavBar />
            <AdminPanel />
        </div>
    )
}
export default AdminPanelPage;