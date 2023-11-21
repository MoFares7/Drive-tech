import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, ListItem, ListItemText, List, Box } from '@mui/material';
import { GiteOutlined, Home, Logout } from '@mui/icons-material';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate

const Sidebar = ({ children }) => {
        const [isOpen, setIsOpen] = useState(false);
        const [showNestedOptions, setShowNestedOptions] = useState(false);
        const navigate = useNavigate(); // Use useNavigate hook to get the navigate function

        const toggle = () => {
                setIsOpen(!isOpen);
                setShowNestedOptions(false);
        };

        const handleNestedOptionsClick = () => {
                setShowNestedOptions(!showNestedOptions);
        };

        const handleMainMenuItemClick = (path) => {
                navigate(path);
        };

        const menuItem = [
                {
                        path: "/",
                        name: ('الرئيسية'),
                        icon: <Home />,
                        onClick: () => handleMainMenuItemClick("/"),
                },
                {
                        name: ("المجموعات"),
                        icon: <GiteOutlined />,

                        onClick: handleNestedOptionsClick,
                        children: [
                                {
                                        path: "/my-group",
                                        name: (" مجموعاتي الشخصية"),
                                        onClick: () => handleMainMenuItemClick("/my-group"),
                                },
                                {
                                        path: "/public",
                                        name: (" المجموعات العامة"),
                                        onClick: () => handleMainMenuItemClick("/public"),
                                },
                                {
                                        path: "/privet",
                                        name: (" المجموعات الخاصة"),
                                        onClick: () => handleMainMenuItemClick("/privet"),
                                },
                        ],
                },
                {
                        path: "/login",
                        name: ('تسجيل الخروج'),
                        icon: <Logout />,
                        onClick: () => handleMainMenuItemClick("/login"),
                },
        ];

        return (
                <div>
                        <div className="container">
                                <div style={{ width:  "250px"  }} className="sidebar">
                                        <div className="top_section">
                                                <h1 style={{ display:  "block"  }} className="logo">
                                                        {('Drive')}
                                                </h1>
                                                <div style={{ marginLeft:  "50px"  }} className="bars">
                                                        {/* <FaBars onClick={toggle} /> */}
                                                </div>
                                        </div>

                                        <div>
                                                {menuItem.map((item, index) => (
                                                        <div key={index}>
                                                                <div className={`link ${showNestedOptions && item.name === ("المجموعات") ? '' : ''}`} onClick={item.onClick}>
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
                        </div>
                        <Box>{children}</Box>
                </div>
        );
};

export default Sidebar;
