import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const SidebarLayout = () => {
        return (
                
                <div className="container">
                        <Sidebar />
                             <Outlet />
                        
                </div>
        );
};

export default SidebarLayout;