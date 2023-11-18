import { Box } from '@mui/material'
import React from 'react'
import DialogFile from '../../components/DialogFile';
import FileCard from '../../components/FileCard'
import SearchHeader from '../../components/SearchHeader'
import Header from '../HomePage/HeaderCard';
import DialogForm from './../../components/DialogForm';

const FilesPage = () => {
        return (
                <Box sx={{ display: 'block', p: 2 }}>
                        <Header />
                        <SearchHeader placeholder="ابحث عن ملف معين" />

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1 }}>

                                <FileCard
                                        fileTitle="محاضرة تطبيقات الانترنت"
                                        pusherName="Mohamad Fare Al-Dabbas"
                                        pusherDate="Nov 17, 2023"
                                />
                                <FileCard
                                        fileTitle="مشروع المترجمات"
                                        pusherName="Mohamad Fare Al-Dabbas"
                                        pusherDate="Feb 13, 2023"
                                />
                        </Box>
                        <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                        }}>
                                <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        justifyItems: 'center',
                                }}>
                                        <DialogFile
                                                titleButton="إضافة ملف في هذه المجموعة "
                                                headerTitle="إضافة ملف"
                                                subHeaderTitle="الرجاء قم بإدخال الملف مع تحديد المستخدمين الذين لهم  الصلاحية للوصول للملف وإجراء العمليات عليه    "
                                        />
                                </Box>
                        </Box>
                </Box>

        )
}

export default FilesPage
