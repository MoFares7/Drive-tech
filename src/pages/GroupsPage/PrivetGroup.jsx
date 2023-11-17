import React from 'react';
import { Box } from '@mui/material';
import StatisticsCard from '../HomePage/StatisticsCard';
import MainButton from './../../components/MainButton';
import DialogForm from './../../components/DialogForm';
import SearchHeader from '../../components/SearchHeader';

const PrivetGroupPage = () => {
  return (
    <Box sx={{ display: 'block' }}>
      <main className="main-container">
        <SearchHeader placeholder="ابحث ضمن المجموعات الخاصة" />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1 }}>
          <StatisticsCard title="المجموعة الثانية" backgroundColor='#607D8B' />
          <StatisticsCard title="المجموعة الثالثة" backgroundColor='#607D8B' />
          <StatisticsCard title="المجموعة الخامسة" backgroundColor='#607D8B' />
        </Box>
        <DialogForm
          titleButton="إضافة مجموعة خاصة "
          headerTitle="إنشاء مجموعة خاصة"
          subHeaderTitle="الرجاء قم بإدخال اسم المجموعة التي تريد إنشائها   "
        />
      </main >
    </Box >
  )
}

export default PrivetGroupPage
