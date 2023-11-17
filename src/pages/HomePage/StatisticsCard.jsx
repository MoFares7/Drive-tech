import React, { useState } from 'react';
import { Box, Button, IconButton, Typography, Popover, MenuItem, ListItemIcon } from '@mui/material';
import { AddBusiness, AddToDrive, Delete, DragIndicator, Edit, Folder, Star } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const StatisticsCard = ({ title, backgroundColor, type }) => {
        const [isPopoverOpen, setIsPopoverOpen] = useState(false);
        const [anchorEl, setAnchorEl] = useState(null);
        const navigate = useNavigate(); // Import useNavigate from react-router-dom

        const handleIconClick = (event) => {
                setAnchorEl(event.currentTarget);
                setIsPopoverOpen(true);
        };

        const handleClosePopover = () => {
                setIsPopoverOpen(false);
        };

        const handleOptionClick = (option) => {
                // Handle the selected option
                console.log(`Selected option: ${option}`);
                handleClosePopover();
        };

        const handleStatisticsCardClick = () => {
                // Navigate to the "/files" route when the StatisticsCard is clicked
                navigate('/files');
        };

        return (
                <React.Fragment>
                        <Button
                                sx={{
                                        display: 'block',
                                        backgroundColor: backgroundColor,
                                        justifyContent: 'space-between',
                                        borderRadius: '10px',
                                        margin: '10px 10px',
                                        color: 'white',
                                        position: 'relative',
                                }}
                                onClick={handleStatisticsCardClick} 
                        >
                                {type === 'خاص' && (
                                        <Box
                                                sx={{
                                                        fontFamily: 'Cairo',
                                                        fontSize: '12px',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 0,
                                                        backgroundColor: '#E64A19',
                                                        borderTopRightRadius: '10px',
                                                        p: 0.5,
                                                }}
                                        >
                                                غروب خاص
                                        </Box>
                                )}

                                <Box sx={{ display: 'flex', p: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pr: 2, pl: 2 }}>
                                                <Folder className="card_icon" />
                                                <Typography sx={{ fontFamily: 'Cairo', pr: 1 }}>{title}</Typography>
                                        </Box>

                                        <IconButton onClick={handleIconClick}>
                                                <DragIndicator
                                                        sx={{
                                                                color: 'white',
                                                                '&:hover': {
                                                                        backgroundColor: '#303F9F',
                                                                },
                                                        }}
                                                />
                                        </IconButton>
                                </Box>
                        </Button>

                        {/* Popover for options */}
                        <Popover
                                open={isPopoverOpen}
                                anchorEl={anchorEl}
                                onClose={handleClosePopover}
                                anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                }}
                                transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                }}
                        >
                                <MenuItem sx={{fontFamily: 'Cairo'}} onClick={() => handleOptionClick('  ضمن المجموعة')}>
                                        <ListItemIcon>
                                                <Edit />
                                        </ListItemIcon>
                                        تعديل اسم المجموعة
                                </MenuItem>
                                <MenuItem sx={{ fontFamily: 'Cairo' }} onClick={() => handleOptionClick('إضافة مستخدمين ضمن المجموعة')}>
                                        <ListItemIcon>
                                                <AddBusiness />
                                        </ListItemIcon>
                                        إضافة مستخدمين ضمن المجموعة
                                </MenuItem>
                                <MenuItem sx={{ fontFamily: 'Cairo' }} onClick={() => handleOptionClick('Option 2')}>
                                        <ListItemIcon>
                                                <Delete />
                                        </ListItemIcon>
                                        حذف مستخدم ضمن المجموعة
                                </MenuItem>
                                {/* Add more options as needed */}
                        </Popover>
                </React.Fragment>
        );
};

export default StatisticsCard;
