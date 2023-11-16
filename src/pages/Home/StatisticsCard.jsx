import React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { DragIndicator, Folder } from '@mui/icons-material';
import '../../App.css';

const StatisticsCard = ({ title }) => {
        return (
                <Button
                        sx={{
                                display: 'flex',
                                backgroundColor: '#1976D2',
                                justifyContent: 'space-between',
                                borderRadius: '10px',
                                alignItems: 'stretch',
                                margin: '10px 10px',
                                color: 'white'
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
                </Button>
        );
};

export default StatisticsCard;