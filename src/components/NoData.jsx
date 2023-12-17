import { Box, Typography } from '@mui/material'
import React from 'react'

const NoData = ({ image, messageText }) => {
        return (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'top', pt: 10, height: '100vh' }}>

                        <Box sx={{ display: 'block', justifyContent: 'center', alignItems: 'top', pt: 10, height: '100vh' }}>
                                <img src={image} height="400" alt="No data" style={{ alignItems: 'center', justifyContent: 'center' }} />
                                <Typography sx={{
                                        fontFamily: 'Cairo',
                                        fontSize: '18px',
                                        color: '#FFFFFF',
                                        textAlign: 'center'
                                }}>{messageText}</Typography>
                        </Box>
                </Box>

        )
}

export default NoData
