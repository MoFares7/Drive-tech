import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { DragIndicator, Folder } from '@mui/icons-material';
import '../../App.css';

const StatisticsCard = ({ title }) => {
        return (
                <Box
                        sx={{
                                display: 'flex',
                                backgroundColor: '#1976D2',
                                justifyContent: 'space-between',
                                borderRadius: '10px',
                                alignItems: 'stretch',
                                margin: '10px 10px',
                        }}
                >
                        <Box sx={{ display: 'flex', p: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', pr: 2, pl: 2 }}>
                                        <Folder className="card_icon" />
                                        <Typography sx={{ fontFamily: 'Cairo', pr: 1 }}>{title}</Typography>
                                </Box>
                        </Box>
                        <IconButton>
                                <DragIndicator sx={{ color: 'white' }} />
                        </IconButton>
                </Box>
        );
};

export default StatisticsCard;