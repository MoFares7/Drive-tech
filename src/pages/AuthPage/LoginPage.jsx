import { Box } from '@mui/material';
import React, { useState } from 'react';

const defaultTheme = createTheme();

export default function LoginPage() {

        return (
                <ThemeProvider theme={defaultTheme}>
                        <Box sx={{
                                display: {
                                        xs: 'block',
                                        sm: 'block',
                                        md: 'flex',
                                }
                        }}>
                        </Box>
                </ThemeProvider>
        );
}