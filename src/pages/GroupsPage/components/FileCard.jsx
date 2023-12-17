import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import fileLogo from '../../../assets/images/pdf.png';
import { Box, Button, IconButton, Typography, Popover, MenuItem, ListItemIcon } from '@mui/material';
import { Delete, OpenInBrowser } from '@mui/icons-material';
import { deleteFile } from './../../../services/File/deleteFileSlice';
import { getAllFiles } from './../../../services/File/getAllFilesSlice';
import { useDispatch } from 'react-redux';
import { downloadFile } from '../../../services/File/downloadFileSlice';

export default function FileCard({ groupId, fileId, fileTitle, pusherName, pusherDate }) {
        const dispatch = useDispatch();
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
        const handleOptionClick = async (option) => {
                if (option === 'حذف الملف بشكل نهائي') {
                        await dispatch(deleteFile(fileId));
                        console.log('Deleted file. Now fetching all files...');
                        await dispatch(getAllFiles(groupId));
                        console.log('Fetched all files successfully.');
                } else {
                        if (option === 'تحميل الملف') {
                                dispatch(downloadFile(fileId));
                        }
                }
                handleClosePopover();
        };


        return (
                <Card sx={{ maxWidth: 345, p: 1, m: 2, fontFamily: 'Cairo', borderRadius: 5 }}>
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
                                <MenuItem sx={{ fontFamily: 'Cairo' }} onClick={() => handleOptionClick('تحميل الملف')}>
                                        <ListItemIcon>
                                                <OpenInBrowser />
                                        </ListItemIcon>
                                        تحميل الملف
                                </MenuItem>
                                <MenuItem sx={{ fontFamily: 'Cairo' }} onClick={() => handleOptionClick('حذف الملف بشكل نهائي')}>
                                        <ListItemIcon>
                                                <Delete />
                                        </ListItemIcon>
                                        حذف الملف بشكل نهائي
                                </MenuItem>
                        </Popover>
                </Card>
        );
}
