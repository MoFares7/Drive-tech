import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, ListItem, ListItemText, List } from '@mui/material';
import { GiteOutlined, Home } from '@mui/icons-material';
import { BsPlusCircleFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ children }) => {
        const [open, setOpen] = useState(false);
        const [dialogPosition, setDialogPosition] = useState({ top: 0, left: 0 });

        const handleClick = (event) => {
                event.preventDefault();
                const { clientX, clientY } = event;
                setDialogPosition({ top: clientY, left: clientX });
                setOpen(true);
        };

        const handleClose = () => {
                setOpen(false);
        };

        const handleOptionClick = (option) => {
                console.log('Option clicked:', option);
                handleClose();
        };

        const handleContextMenu = (event) => {
                event.preventDefault();
                handleClick(event);
        };

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
        ];

        return (
                <div>
                        <div className="container">
                                <div style={{ width: isOpen ? "250px" : "70px" }} className="sidebar" onContextMenu={handleContextMenu}>
                                        <div className="top_section">
                                                <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">{t('Drive')}</h1>
                                                <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                                                        <FaBars onClick={toggle} />
                                                </div>
                                        </div>
                                        {isOpen &&
                                                <div>
                                                        {/* Your existing button or content goes here */}
                                                        <Button
                                                                sx={{
                                                                        backgroundColor: '#1976D2',
                                                                        color: 'white',
                                                                        justifyContent: 'center',
                                                                        textAlign: 'center',
                                                                        width: '100px',
                                                                        display: 'flex',
                                                                        borderRadius: '10px',
                                                                        fontSize: '18px',
                                                                        fontFamily: 'Cairo',
                                                                        m: 2,
                                                                        p: 2,
                                                                        '&:hover': {
                                                                                backgroundColor: '#535bf2',
                                                                        },
                                                                }}
                                                                variant="contained"
                                                                endIcon={<BsPlusCircleFill sx={{ backgroundColor: 'white', marginLeft: 3 }} />}
                                                                onClick={handleClick}
                                                        >
                                                                إضافة
                                                        </Button>

                                                        <Dialog
                                                                open={open}
                                                                onClose={handleClose}
                                                                style={{ position: 'absolute', top: dialogPosition.top, left: dialogPosition.left }}
                                                                sx={{ width: '500px' }}  // Set your desired width here
                                                        >
                                                                <DialogTitle>اختر الخيار</DialogTitle>
                                                                <DialogContent>
                                                                        <List>
                                                                                {/* Replace the options with your actual options */}
                                                                                {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
                                                                                        <ListItem button key={index} onClick={() => handleOptionClick(option)}>
                                                                                                <ListItemText primary={option} />
                                                                                        </ListItem>
                                                                                ))}
                                                                        </List>
                                                                </DialogContent>
                                                                <DialogActions>
                                                                        <Button onClick={handleClose} color="primary">
                                                                                إغلاق
                                                                        </Button>
                                                                </DialogActions>
                                                        </Dialog>
                                                </div>
                                        }
                                        {menuItem.map((item, index) => (
                                                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                                        <div className="icon">{item.icon}</div>
                                                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                                </NavLink>
                                        ))}
                                </div>
                        </div>
                        <main>{children}</main>
                </div>
        );
};

export default Sidebar;
