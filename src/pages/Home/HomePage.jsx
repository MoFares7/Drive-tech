
import React from 'react';
import { Box } from '@mui/material';
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
                        <main className="main-container">
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1 }}>
                                        <StatisticsCard title="المجموعة الأولى" />
                                        <StatisticsCard title="المجموعة الثانية" />
                                        <StatisticsCard title="المجموعة الثالثة" />
                                      
                                </Box>
                        </main >
                </Box >
        );
};

export default HomePage;