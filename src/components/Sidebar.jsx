import { Build, BuildCircleOutlined, CenterFocusStrongOutlined, CenterFocusStrongTwoTone, DepartureBoardTwoTone, GiteOutlined, Home, HouseOutlined, Rule, Title, Unarchive, Work } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsPlus, BsPlusCircleFill } from 'react-icons/bs';

import {
        FaBars,
        FaBuilding,
        FaCodeBranch
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
        const { t } = useTranslation();
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
        const menuItem = [
                {
                        path: "/",
                        name: t('الرئيسية'),
                        icon: <Home />
                },
                {
                        path: "/department",
                        name: t("المجموعات"),
                        icon: <GiteOutlined />
                },

        ]
        return (
                <div>

                        <div className="container">
                                <div style={{ width: isOpen ? "250px" : "70px" }} className="sidebar">
                                        <div className="top_section">
                                                <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">{t('Drive')}</h1>
                                                <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                                                        <FaBars onClick={toggle} />
                                                </div>

                                        </div>
                                        {isOpen &&
                                                <Box sx={{
                                                        backgroundColor: '#1976D2',
                                                        color: 'white',
                                                        justifyContent: 'center',
                                                        textAlign: 'center',
                                                        width: '100px',
                                                        display: 'flex',
                                                        borderRadius: '10px',
                                                        m: 2,
                                                        p: 1

                                                }}>
                                                        <IconButton >
                                                                <BsPlusCircleFill sx={{ backgroundColor: 'white', color: 'red', }} />
                                                        </IconButton>
                                                        <Button sx={{
                                                                color: 'white',
                                                                fontFamily: 'Cairo',
                                                                fontSize: '18px',
                                                                alignContent: 'center'
                                                        }}>إضافة
                                                        </Button>
                                                </Box>
                                        }


                                        {
                                                menuItem.map((item, index) => (
                                                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                                                <div className="icon">{item.icon}</div>
                                                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                                        </NavLink>
                                                ))
                                        }
                                </div>

                        </div>
                        <main>{children}</main>
                </div>
        );
};

export default Sidebar;

