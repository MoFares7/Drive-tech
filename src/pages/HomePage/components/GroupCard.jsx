import React, { useState } from 'react';
import { Box, Button, IconButton, Typography, Popover, MenuItem, ListItemIcon, Dialog } from '@mui/material';
import { AddBusiness, AddToDrive, Delete, DeleteForever, DragIndicator, Edit, Folder, Star } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteGroup } from './../../../services/Group/deleteGroupSlice';
import { getGroups } from './../../../services/Group/getGroupSlice';
import { addUserInGroup } from './../../../services/Group/addUserInGroup';
import MultipleSelectUser from '../../../components/MultipleSelectUser';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { leaveUserFromGroup } from './../../../services/Group/leaveUserFromGroup';
import { getGroupsAboutType } from '../../../services/Group/getGroupsAboutTypeSlice';

const GroupCard = ({ title, backgroundColor, type, userId, groupId, groupType }) => {
        const dispatch = useDispatch();
        const [isPopoverOpen, setIsPopoverOpen] = useState(false);
        const [isDialogOpen, setIsDialogOpen] = useState(false);
        const [anchorEl, setAnchorEl] = useState(null);
        const [selectedUserIds, setSelectedUserIds] = useState([]);
        const navigate = useNavigate();
        const [addButton, setAddButton] = useState('add');

        const handleIconClick = (event) => {
                event.stopPropagation();
                setAnchorEl(event.currentTarget);
                setIsPopoverOpen(true);
        };

        const handleClosePopover = () => {
                setIsPopoverOpen(false);
        };

        const handleOptionClick = async (option) => {
                if (option === 'حذف المجموعة') {
                        dispatch(deleteGroup(groupId));
                        dispatch(getGroupsAboutType(groupType));
                } else if (option === 'إضافة مستخدمين ضمن المجموعة') {
                        try {
                                // Dispatch the addUserInGroup action and wait for it to complete
                                await dispatch(addUserInGroup({ groupId: groupId, userId: userId }));

                                // If the dispatch was successful, set the dialog open
                                setIsDialogOpen(true);
                        } catch (error) {
                                // Handle the error if the dispatch fails
                                console.error('Error adding user to group:', error);
                        }
                }
                else if (option === 'حذف مستخدم ضمن المجموعة') {
                        try {
                                await dispatch(leaveUserFromGroup({ groupId: groupId, userId: userId }));
                                console.log('abbas heley')

                        } catch (error) {
                                // Handle the error if the dispatch fails
                                console.error('Error leaving user from group:', error);
                        }
                }
                else {
                        console.log(`Selected option: ${option}`);
                }
                handleClosePopover();
        };

        const handleStatisticsCardClick = () => {
                navigate(`/files/${groupId}`);
        };

        const handleCreateClick = () => {
                console.log('Selected User IDs:', selectedUserIds);
                const newAddButton = addButton === 'add' ? 'add' : 'add';
                setAddButton(newAddButton);

                // Use the SpeechSynthesis API to make the browser speak the color
                const message = new SpeechSynthesisUtterance(newAddButton);
                window.speechSynthesis.speak(message);

        }

        const handleCloseDialog = () => {
                setIsDialogOpen(false);
        }

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
                                {type === 'private' && (
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
                                <MenuItem sx={{ fontFamily: 'Cairo' }} onClick={() => handleOptionClick('حذف المجموعة')}>
                                        <ListItemIcon>
                                                <DeleteForever />
                                        </ListItemIcon>
                                        حذف المجموعة
                                </MenuItem>
                                <MenuItem sx={{ fontFamily: 'Cairo' }} onClick={() => handleOptionClick('إضافة مستخدمين ضمن المجموعة')}>
                                        <ListItemIcon>
                                                <AddBusiness />
                                        </ListItemIcon>
                                        إضافة مستخدمين ضمن المجموعة
                                </MenuItem>
                                <MenuItem sx={{ fontFamily: 'Cairo' }} onClick={() => handleOptionClick('حذف مستخدم ضمن المجموعة')}>
                                        <ListItemIcon>
                                                <Delete />
                                        </ListItemIcon>
                                        حذف مستخدم ضمن المجموعة
                                </MenuItem>
                                {/* Add more options as needed */}
                        </Popover>
                        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                                <DialogTitle sx={{ fontFamily: 'Cairo' }}>حدد المستخدمين</DialogTitle>
                                <DialogContent>
                                        {/* Pass the callback function to the MultipleSelectUser component */}
                                        <MultipleSelectUser onUsersSelected={setSelectedUserIds} />
                                </DialogContent>
                                <DialogActions>
                                        {/* ... (other JSX) */}
                                        <Button
                                                sx={{
                                                        backgroundColor: '#272356',
                                                        color: 'white',
                                                        fontFamily: 'Cairo',
                                                        '&:hover': {
                                                                backgroundColor: '#303F9F',
                                                        },
                                                }}
                                                onClick={handleCreateClick}
                                        >
                                                إضافة
                                        </Button>
                                </DialogActions>
                        </Dialog>
                </React.Fragment>
        );
};

export default GroupCard;
