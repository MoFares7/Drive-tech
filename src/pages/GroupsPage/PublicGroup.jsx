import React from 'react';
import { Box } from '@mui/material';
import StatisticsCard from '../HomePage/StatisticsCard';
import DialogForm from '../../components/DialogForm';
import SearchHeader from '../../components/SearchHeader';
import Header from '../HomePage/HeaderCard';

const PublicGroupPage = () => {

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
                                display: 'flex',
                        }}>
                                <SearchHeader placeholder="ابحث ضمن المجموعات العامة" />
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
                                <StatisticsCard title="المجموعة الأولى" backgroundColor='#607D8B' />
                                <StatisticsCard title="المجموعة الرابعة" backgroundColor='#607D8B' />
                        </Box>
                        <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                        }}>
                                <DialogForm
                                        titleButton="إضافة مجموعة عامة "
                                        headerTitle="إنشاء مجموعة عامة"
                                        subHeaderTitle="الرجاء قم بإدخال اسم المجموعة التي تريد إنشائها   "
                                />
                        </Box>
                </Box >
        )
}

export default PublicGroupPage





