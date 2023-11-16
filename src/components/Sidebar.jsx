import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, ListItem, ListItemText, List } from '@mui/material';
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
                // You can add any additional logic here before navigating
                // For now, let's just navigate to the specified path
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
                                        path: "/public",
                                        name: ("إدارة المجموعات العامة"),
                                        onClick: () => handleMainMenuItemClick("/public"),
                                },
                                {
                                        path: "/privet",
                                        name: ("إدارة المجموعات الخاصة"),
                                        onClick: () => handleMainMenuItemClick("/privet"),
                                },
                        ],
                },
                {
                        path: "/logut",
                        name: ('تسجيل الخروج'),
                        icon: <Logout />,
                        onClick: () => handleMainMenuItemClick("/logout"),
                },
        ];

        return (
                <div>
                        <div className="container">
                                <div style={{ width: isOpen ? "250px" : "70px" }} className="sidebar">
                                        <div className="top_section">
                                                <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
                                                        {('Drive')}
                                                </h1>
                                                <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                                                        <FaBars onClick={toggle} />
                                                </div>
                                        </div>

                                        <div>
                                                {menuItem.map((item, index) => (
                                                        <div key={index}>
                                                                <div className={`link ${showNestedOptions && item.name === ("المجموعات") ? '' : ''}`} onClick={item.onClick}>
                                                                        <div className="icon">{item.icon}</div>
                                                                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
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
                        <main>{children}</main>
                </div>
        );
};

export default Sidebar;
