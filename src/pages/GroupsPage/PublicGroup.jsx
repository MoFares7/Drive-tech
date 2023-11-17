import React from 'react';
import { Box } from '@mui/material';
import StatisticsCard from '../HomePage/StatisticsCard';
import DialogForm from '../../components/DialogForm';
import SearchHeader from '../../components/SearchHeader';

const PublicGroupPage = () => {

        return (
                <Box sx={{ display: 'block' }}>
                        <main className="main-container">
                                <SearchHeader placeholder="ابحث ضمن المجموعات العامة" />

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1 }}>
                                        <StatisticsCard title="المجموعة الأولى" backgroundColor='#607D8B' />
                                        <StatisticsCard title="المجموعة الرابعة" backgroundColor='#607D8B' />

                                </Box>
                                <DialogForm
                                        titleButton="إضافة مجموعة عامة "
                                        headerTitle="إنشاء مجموعة عامة"
                                        subHeaderTitle="الرجاء قم بإدخال اسم المجموعة التي تريد إنشائها   "
                                />
                        </main >
                </Box >
        )
}

export default PublicGroupPage





