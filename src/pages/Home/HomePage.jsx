import { Box, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import StatisticsCard from './StatisticsCard';
import Header from './HeaderCard';
import { useTranslation } from 'react-i18next';

const HomePage = () => {

        const { i18n } = useTranslation();

        const changeLanguage = (lng) => {
                i18n.changeLanguage(lng);
        };

        return (
                <Box sx={{ display: 'block' }}>
                        <Header />
                        <main className='main-container'>
                                <div className='main-cards'>
                                        <StatisticsCard />
                                </div>
                        </main>
                </Box>
        );
};
export default HomePage;