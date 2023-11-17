import React from 'react';
import { Box } from '@mui/material';
import SearchHeader from '../../components/SearchHeader';
import StatisticsCard from '../HomePage/StatisticsCard';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate

const MyGroupPage = () => {
        const navigate = useNavigate();

        const handleStatisticsCardClick = (path) => {
                navigate(path);
        };

        return (
                <Box sx={{ display: 'block' }}>
                        <main className="main-container">
                                <SearchHeader placeholder="البحث ضمن مجموعاتي" />
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1 }}>
                                        <StatisticsCard
                                                title="المجموعة الأولى"
                                                backgroundColor='#607D8B'
                                                onClick={handleStatisticsCardClick("/files")}
                                        />
                                        <StatisticsCard
                                                title="المجموعة الخامسة"
                                                backgroundColor='#607D8B'
                                                onClick={handleStatisticsCardClick("/files")}
                                        />
                                </Box>
                        </main>
                </Box>
        );
};

export default MyGroupPage;
