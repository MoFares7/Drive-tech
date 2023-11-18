import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import fileLogo from '../assets/images/pdf.png';
import { Box, Button, IconButton, Typography, Popover, MenuItem, ListItemIcon } from '@mui/material';
import { AddBusiness, AddToDrive, Delete, Details, DragIndicator, Edit, Folder, OpenInBrowser, Star } from '@mui/icons-material';

export default function FileCard({ onClose, fileTitle, pusherName, pusherDate }) {

        const [isPopoverOpen, setIsPopoverOpen] = useState(false);
        const [anchorEl, setAnchorEl] = useState(null);

        const handleIconClick = (event) => {
                event.stopPropagation();
                setAnchorEl(event.currentTarget);
                setIsPopoverOpen(true);

        }
        const handleClosePopover = () => {
                setIsPopoverOpen(false);
        };
        const handleOptionClick = (option) => {
                // Handle the selected option
                console.log(`Selected option: ${option}`);
                handleClosePopover();
        };

        return (
                <Card sx={{ maxWidth: 345, p: 1, m: 2, fontFamily: 'Cairo' }}>
                        <CardHeader
                                sx={{ fontFamily: 'Cairo' }}
                                avatar={<Avatar sx={{ bgcolor: red[500], m: 1, }} aria-label="recipe">F</Avatar>}
                                action={
                                        <IconButton aria-label="settings" onClick={handleIconClick}>
                                                <MoreVertIcon />
                                        </IconButton>
                                }
                                title={pusherName}
                                subheader={pusherDate}
                        />
                        <CardMedia
                                component="img"
                                height="300"
                                image={fileLogo}
                                alt="Paella dish"

                        />
                        <CardContent>
                                <Typography variant="body2" color="text.secondary" sx={{
                                        fontFamily: 'Cairo'
                                }}>
                                        {fileTitle}
                                </Typography>
                        </CardContent>
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
                                <MenuItem sx={{ fontFamily: 'Cairo' }} onClick={() => handleOptionClick('  ضمن المجموعة')}>
                                        <ListItemIcon>
                                                <OpenInBrowser />
                                        </ListItemIcon>
                                        فتح الملف
                                </MenuItem>
                                <MenuItem sx={{ fontFamily: 'Cairo' }} onClick={() => handleOptionClick('إضافة مستخدمين ضمن المجموعة')}>
                                        <ListItemIcon>
                                                <Delete />
                                        </ListItemIcon>
                                        حذف الملف بشكل نهائي
                                </MenuItem>
                                <MenuItem sx={{ fontFamily: 'Cairo' }} onClick={() => handleOptionClick('Option 2')}>
                                        <ListItemIcon>
                                                <Details />
                                        </ListItemIcon>
                                       تفاصيل الملف
                                </MenuItem>
                                {/* Add more options as needed */}
                        </Popover>
                </Card>
        );
}
