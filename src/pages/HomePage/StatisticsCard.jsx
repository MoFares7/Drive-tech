import React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { DragIndicator, Folder } from '@mui/icons-material';
import '../../App.css';

const StatisticsCard = ({ title, backgroundColor, type }) => {
        return (
                <Button
                        sx={{
                                display: 'block',
                                backgroundColor: backgroundColor,
                                justifyContent: 'space-between',
                                borderRadius: '10px',
                                margin: '10px 10px',
                                color: 'white',
                                position: 'relative', // Make the button a positioned container
                        }}
                >
                        {type === 'خاص' && (
                                <Box
                                        sx={{
                                                fontFamily: 'Cairo',
                                                fontSize: '12px',
                                                position: 'absolute', // Position the خاص box absolutely
                                                top: 0,
                                                right: 0,
                                                backgroundColor: '#E64A19',
                                                borderTopRightRadius: '10px',
                                                p: 0.5, // You can adjust the padding as needed
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

                                <IconButton>
                                        <DragIndicator sx={{ color: 'white' }} />
                                </IconButton>
                        </Box>
                </Button>
        );
};

export default StatisticsCard;
