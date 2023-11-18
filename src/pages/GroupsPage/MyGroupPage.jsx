import React from 'react';
import { Box } from '@mui/material';
import SearchHeader from '../../components/SearchHeader';
import StatisticsCard from '../HomePage/StatisticsCard';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../HomePage/HeaderCard';

const MyGroupPage = () => {
        // const navigate = useNavigate();

        // const handleStatisticsCardClick = (path) => {
        //         navigate(path);
        // };

        return (
                <Box sx={{
                        flexDirection: 'column',
                        alignItems: 'center',  
                        minHeight: '100vh',
                }}>
                        <Header />
                        <Box sx={{
                                pt:4,
                                pr: 2,
                                pl: 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                                flexDirection: 'column',
                                width: '100%',
                                textAlign: 'center',
                        }}>
                                <SearchHeader placeholder="البحث ضمن مجموعاتي" />
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
                                <StatisticsCard
                                        title="المجموعة الأولى"
                                        backgroundColor='#607D8B'
                                // onClick={handleStatisticsCardClick("/files")}
                                />
                                <StatisticsCard
                                        title="المجموعة الخامسة"
                                        backgroundColor='#607D8B'
                                // onClick={handleStatisticsCardClick("/files")}
                                /> <StatisticsCard
                                        title="المجموعة الخامسة"
                                        backgroundColor='#607D8B'
                                // onClick={handleStatisticsCardClick("/files")}
                                />   </Box>
                </Box >

        );
};

export default MyGroupPage;
