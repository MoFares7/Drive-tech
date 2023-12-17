import { Box, CircularProgress } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import FileCard from './components/FileCard';
import SearchHeader from '../../components/SearchHeader';
import Header from '../HomePage/components/HeaderCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllFiles } from './../../services/File/getAllFilesSlice';
import noData from '../../assets/icons/not-found.svg';
import MainButton from './../../components/MainButton';
import { createFiles } from './../../services/File/createFileSlice';
import NoData from '../../components/NoData';

const FilesPage = () => {
        const dispatch = useDispatch();
        const { groupId } = useParams();
        const [selectedFile, setSelectedFile] = useState(null);
        const fileInputRef = useRef(null);

        const files = useSelector((state) => state.getAllFiles.data);
        const status = useSelector((state) => state.getAllFiles.status);

        useEffect(() => {
                dispatch(getAllFiles({ groupId }));
        }, [dispatch, groupId]);

        const handleFileChange = async (event) => {
                const file = event.target.files[0];
                //! Check if a file is selected
                if (file) {
                        try {
                                //! Create form data to include file and other data
                                const formData = new FormData();
                                formData.append('link', file);
                                formData.append('group_id', groupId);
                                formData.append('name', file.name);


                                await dispatch(createFiles({ body: formData }));

                                //! Optionally, you can refresh the files list after adding a new file
                                dispatch(getAllFiles({ groupId }));
                        } catch (error) {
                                console.error('Error uploading file:', error);
                        }
                }
        };

        return (
                <Box sx={{ display: 'block', p: 2 }}>
                        <Header />
                        <Box
                                sx={{
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
                                }}
                        >
                                <SearchHeader placeholder="ابحث عن ملف معين" />
                        </Box>
                        {status === 'loading' && (
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                                        <CircularProgress />
                                </Box>
                        )}
                        {/* {status === 'fulfilled' && (
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                                        <img src={noData} alt="No data" />
                                </Box>
                        )} */}
                        {status === 'succeeded' && (
                                <Box>
                                        {files.length === 0 ? (
                                                <NoData
                                                        image={noData}
                                                        messageText='لا يوجد ملفات حاليا'
                                                />
                                        ) : (
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1 }}>
                                                        {files.map((file) => (
                                                                <FileCard key={file.id} fileTitle={file.name} pusherName={file.user.name} pusherDate={file.created_at} fileId={file.id} groupId={file.group_id} />
                                                        ))}
                                                </Box>
                                        )}
                                </Box>
                        )}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifyItems: 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifyItems: 'center' }}>
                                        <MainButton width="300px" color="#3F51B5" title="إضافة ملف ضمن الغروب" onClick={() => fileInputRef.current.click()} />
                                        <input
                                                type="file"
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx"
                                                ref={fileInputRef}
                                                style={{ display: 'none' }}
                                        />
                                </Box>
                        </Box>
                </Box>
        );
};

export default FilesPage;
