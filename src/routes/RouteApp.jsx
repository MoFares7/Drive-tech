import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import SidebarLayout from '../components/SidebarLayout';
import PublicGroupPage from '../pages/GroupsPage/PublicGroup';
import PrivetGroupPage from '../pages/GroupsPage/PrivetGroup';
import LoginPage from '../pages/AuthPage/LoginPage';
import FilesPage from '../pages/GroupsPage/FilesPage';
import SignUpPage from '../pages/AuthPage/SignUpPage';
import RouteAuth from './RouteAuth';

const RouteApp = () => {
        return (
                <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signUp" element={<SignUpPage />} />
                        <Route element={<SidebarLayout />}>
                                <Route index element={<HomePage />} />
                                <Route path="/public" element={<PublicGroupPage />} />
                                <Route path="/privet" element={<PrivetGroupPage />} />
                                <Route path="/files/:groupId" element={<FilesPage />} />
                                <Route path="/login" element={<LoginPage />} />
                        </Route>
                </Routes>

        )
}

export default RouteApp
