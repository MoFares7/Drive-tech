import React from 'react';
import { Box } from '@mui/material';
import StatisticsCard from '../HomePage/StatisticsCard';
import MainButton from './../../components/MainButton';
import DialogForm from './../../components/DialogForm';
import SearchHeader from '../../components/SearchHeader';
import Header from '../HomePage/HeaderCard';

const PrivetGroupPage = () => {
  return (
    <Box sx={{
      flexDirection: 'column',
      alignItems: 'center',  // Center horizontally
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
        <SearchHeader placeholder="ابحث ضمن المجموعات الخاصة" />
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
        <StatisticsCard title="المجموعة الثانية" backgroundColor='#607D8B' />
        <StatisticsCard title="المجموعة الثالثة" backgroundColor='#607D8B' />
        <StatisticsCard title="المجموعة الخامسة" backgroundColor='#607D8B' />
      </Box>
      <DialogForm
        titleButton="إضافة مجموعة خاصة "
        headerTitle="إنشاء مجموعة خاصة"
        subHeaderTitle="الرجاء قم بإدخال اسم المجموعة التي تريد إنشائها   "
      />

    </Box >
  )
}

export default PrivetGroupPage
