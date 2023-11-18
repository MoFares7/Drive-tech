import React from 'react';
import { Box } from '@mui/material';
import StatisticsCard from './StatisticsCard';
import Header from './HeaderCard';
import SearchHeader from '../../components/SearchHeader';

const HomePage = () => {

        return (
                <Box sx={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        minHeight: '100vh',

                }}>
                        <Header />
                        <Box sx={{
                                pt: 4,
                                pr: 2,
                                pl: 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                                flexDirection: 'column',
                                width: '100%',
                                textAlign: 'center',
                        }}>
                                <SearchHeader placeholder="ابحث عن مجموعة " />
                        </Box>
                        <Box>

                        </Box>
                        <Box sx={{
                                pr: 2,
                                pl: 2,
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                                m: 1,
                                pt: 2,
                                width: '100%',
                        }}>
                                <StatisticsCard title="المجموعة الأولى" backgroundColor='#1976D2' />
                                <StatisticsCard title="المجموعة الثانية" backgroundColor='#1976D2' type="خاص" />
                                <StatisticsCard title="المجموعة الثالثة" backgroundColor='#1976D2' type="خاص" />
                                <StatisticsCard title="المجموعة الرابعة" backgroundColor='#1976D2' />
                                <StatisticsCard title="المجموعة الخامسة" backgroundColor='#1976D2' type="خاص" />
                        </Box>

                </Box >
        );
};

export default HomePage;