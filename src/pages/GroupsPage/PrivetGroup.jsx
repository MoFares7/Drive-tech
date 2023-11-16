import React from 'react';
import { Box } from '@mui/material';
import StatisticsCard from '../HomePage/StatisticsCard';
import MainButton from './../../components/MainButton';

const PrivetGroupPage = () => {
  return (
    <Box sx={{ display: 'block' }}>
      <main className="main-container">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1 }}>
          <StatisticsCard title="المجموعة الثانية" backgroundColor='#607D8B' />
          <StatisticsCard title="المجموعة الثالثة" backgroundColor='#607D8B' />
          <StatisticsCard title="المجموعة الخامسة" backgroundColor='#607D8B' />
        </Box>
        <MainButton width="200px" color="#3F51B5" title="إضافة مجموعة خاصة" />

      </main >
    </Box >
  )
}

export default PrivetGroupPage
