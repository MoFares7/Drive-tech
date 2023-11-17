import { Box } from '@mui/material'
import React from 'react'
import FileCard from '../../components/FileCard'
import SearchHeader from '../../components/SearchHeader'

const FilesPage = () => {
        return (
                <Box sx={{ display: 'block' ,p:2}}>
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
                </Box>

        )
}

export default FilesPage
