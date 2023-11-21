import React from 'react';
import { Box } from '@mui/material';
import StatisticsCard from './StatisticsCard';
import Header from './HeaderCard';
import SearchHeader from '../../components/SearchHeader';

const HomePage = () => {

        return (
                <Box sx={{
                        display: 'flex',
                        overflow: 'hidden',
                        flexDirection: 'column',
                        minHeight: '100vh',
                        width: '90%',


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
                                width: '90%',
                                textAlign: 'center',
                                display: 'flex',
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
                                width: '90%',
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