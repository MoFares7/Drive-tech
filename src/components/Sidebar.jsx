

import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, ListItem, ListItemText, List, Box, Typography } from '@mui/material';
import { GiteOutlined, Home, Logout, Report } from '@mui/icons-material';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch } from 'react-redux';
import { logout } from '../services/Auth/logoutSlice';
import NormalDialog from './NormalDialog';

const Sidebar = ({ children }) => {
        const dispatch = useDispatch();
        const [showNestedOptions, setShowNestedOptions] = useState(false);
        const [openDialog, setOpenDialog] = useState(false);
        const navigate = useNavigate();

        const handleNestedOptionsClick = () => {
                setShowNestedOptions(!showNestedOptions);
        };

        const handleMainMenuItemClick = (path) => {
                navigate(path);
        };

        const handleOpenDialog = () => {
                setOpenDialog(true);
        };

        const handleCloseDialog = () => {
                setOpenDialog(false);
        };

        const handleLogout = () => {
                dispatch(logout());
                handleCloseDialog();
                navigate('/login');

        };

        const menuItem = [
                {
                        path: "/",
                        name: 'الرئيسية',
                        icon: <Home />,
                        onClick: () => handleMainMenuItemClick("/"),
                },
                {
                        name: "المجموعات",
                        icon: <GiteOutlined />,
                        onClick: handleNestedOptionsClick,
                        children: [

                                {
                                        path: "/public",
                                        name: " المجموعات العامة",
                                        onClick: () => handleMainMenuItemClick("/public"),
                                },
                                {
                                        path: "/privet",
                                        name: " المجموعات الخاصة",
                                        onClick: () => handleMainMenuItemClick("/privet"),
                                },

                        ],
                },
                {
                        path: "/report",
                        name: "التقارير",
                        icon: <Report />,
                        onClick: () => handleMainMenuItemClick("/report"),
                },
                {
                        path: "/login",
                        name: 'تسجيل الخروج',
                        icon: <Logout />,
                        onClick: () => handleOpenDialog(),

                },
        ];

        return (
                <div>
                        <div className="container">
                                <div style={{ width: "250px" }} className="sidebar">
                                        <div className="top_section">
                                                <h1 style={{ display: "block" }} className="logo">
                                                        Drive
                                                </h1>
                                        </div>
                                        {menuItem.map((item, index) => (
                                                <div key={index}>
                                                        <div
                                                                className={`link ${showNestedOptions && item.name === "المجموعات" ? '' : ''}`}
                                                                onClick={item.onClick}
                                                        >
                                                                <div className="icon">{item.icon}</div>
                                                                <div style={{ display: "block" }} className="link_text">
                                                                        {item.name}
                                                                </div>
                                                        </div>
                                                        {item.children && showNestedOptions && (
                                                                <List>
                                                                        {item.children.map((child, childIndex) => (
                                                                                <NavLink to={child.path} key={childIndex} className="link" activeClassName="active">
                                                                                        <ListItem>
                                                                                                <div className="icon">{/* Include icon for child option here */}</div>
                                                                                                <div className="link_text">{child.name}</div>
                                                                                        </ListItem>
                                                                                </NavLink>
                                                                        ))}
                                                                </List>
                                                        )}
                                                </div>
                                        ))}
                                </div>
                        </div>
                        <Box>{children}</Box>
                        <Dialog open={openDialog} onClose={handleCloseDialog}>
                                <DialogContent>
                                        <Typography sx={{
                                                fontFamily: 'cairo',
                                                fontSize: '20px'
                                        }}>هل تريد تسجيل الخروج؟</Typography>
                                </DialogContent>
                                <DialogActions>
                                        <Button
                                                sx={{
                                                        fontFamily: 'Cairo',
                                                        color: 'red',
                                                        '&:hover': {
                                                                backgroundColor: '#F44336',
                                                                color: 'white',
                                                                pl: 1
                                                        },
                                                }}
                                                onClick={handleCloseDialog}
                                        >
                                                تراجع
                                        </Button>
                                        <Button
                                                sx={{
                                                        backgroundColor: '#272356',
                                                        color: 'white',
                                                        fontFamily: 'Cairo',
                                                        '&:hover': {
                                                                backgroundColor: '#303F9F',
                                                        },
                                                }}

                                                onClick={handleLogout}
                                        >
                                                نعم
                                        </Button>
                                </DialogActions>
                        </Dialog>
                </div>
        );
};

export default Sidebar;