import React from 'react';
import { Box } from '@mui/material';
import StatisticsCard from './StatisticsCard';
import Header from './HeaderCard';
import SearchHeader from '../../components/SearchHeader';

const HomePage = () => {

        return (
                <Box sx={{ display: 'block', }}>
                        <Header />
                       

                        <main className="main-container">
                                <SearchHeader placeholder="ابحث عن مجموعة " />
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1 }}>
                                        <StatisticsCard title="المجموعة الأولى" backgroundColor='#1976D2' />
                                        <StatisticsCard title="المجموعة الثانية" backgroundColor='#1976D2' type="خاص" />
                                        <StatisticsCard title="المجموعة الثالثة" backgroundColor='#1976D2' type="خاص" />
                                        <StatisticsCard title="المجموعة الرابعة" backgroundColor='#1976D2' />
                                        <StatisticsCard title="المجموعة الخامسة" backgroundColor='#1976D2' type="خاص" />

                                </Box>
                        </main >
                </Box >
        );
};

export default HomePage;