import React from 'react';
import { Box } from '@mui/material';
import StatisticsCard from '../HomePage/StatisticsCard';
import MainButton from '../../components/MainButton';

const PublicGroupPage = () => {
        return (
                <Box sx={{ display: 'block' }}>          
                        <main className="main-container">
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1 }}>
                                        <StatisticsCard title="المجموعة الأولى" backgroundColor='#607D8B' />
                                        <StatisticsCard title="المجموعة الرابعة" backgroundColor='#607D8B' />
                                   
                                </Box>
                                <MainButton width="200px" color="#3F51B5" title="إضافة مجموعة عامة" />

                        </main >
                </Box >
        )
}

export default PublicGroupPage





