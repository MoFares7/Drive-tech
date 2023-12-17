import React, { useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import GroupCard from './components/GroupCard';
import Header from './components/HeaderCard';
import SearchHeader from '../../components/SearchHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getGroups } from './../../services/Group/getGroupSlice';
import noData from '../../assets/icons/null.svg';
import NoData from '../../components/NoData';

const HomePage = () => {
        const dispatch = useDispatch();

        const groups = useSelector((state) => state.getGroups.data);
        const { status, error } = useSelector((state) => state.getGroups);

        useEffect(() => {
                dispatch(getGroups());
        }, [dispatch]);

        console.log(localStorage.getItem('token'));
        return (
                <Box sx={{
                        display: 'flex',
                        overflow: 'hidden',
                        flexDirection: 'column',
                        minHeight: '100vh',
                        width: '90%',
                }}>
                        <Header />
                        <Box sx={{
                                pt: 4,
                                pr: 4,
                                pl: 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                                flexDirection: 'column',
                                width: '90%',
                                textAlign: 'center',
                                // display: 'flex',
                        }}>
                                <SearchHeader placeholder="ابحث عن مجموعة " />
                        </Box>
                        <Box>

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
                                width: '90%',
                        }}>
                                {/* Conditional rendering for loading */}
                                {status === 'loading' && (
                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <CircularProgress />
                                        </Box>
                                )}

                                {/* Render groups if not loading */}
                                {status === 'succeeded' && (
                                        <Box>
                                                {
                                                        groups.length === 0 ? (
                                                                <NoData
                                                                        image={noData}
                                                                        messageText='لا يوجد مجموعات حاليا'
                                                                />
                                                        ) :
                                                                <Box sx={{
                                                                        display: 'flex', flexDirection: 'flex-wrap'
                                                                }}>

                                                                        {groups.map((group) => (
                                                                                <GroupCard
                                                                                        key={group.group_id}
                                                                                        title={group.group.name}
                                                                                        backgroundColor="#1976D2"
                                                                                        type={group.group.type}
                                                                                        userId={group.userId}
                                                                                        groupId={group.group_id}
                                                                                />
                                                                        ))}
                                                                </Box>
                                                }
                                        </Box>


                                )}

                                {/* Render error message if failed */}
                                {status === 'failed' && (
                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <Typography color="error">{error}</Typography>
                                        </Box>
                                )}
                        </Box>
                </Box>
        );
};


export default HomePage;







