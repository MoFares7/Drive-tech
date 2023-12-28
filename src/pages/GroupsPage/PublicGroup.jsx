import React, { useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import GroupCard from '../HomePage/components/GroupCard';
import DialogForm from '../../components/DialogForm';
import SearchHeader from '../../components/SearchHeader';
import Header from '../HomePage/components/HeaderCard';
import MainButton from '../../components/MainButton';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupsAboutType } from './../../services/Group/getGroupsAboutTypeSlice';
import NoData from '../../components/NoData';
import noData from '../../assets/icons/null.svg';
const PublicGroupPage = () => {
        const dispatch = useDispatch();
        const groups = useSelector((state) => state.getGroupsAboutType.data);
        const { status, error } = useSelector((state) => state.getGroupsAboutType);

        useEffect(() => {
                dispatch(getGroupsAboutType('public'));
        }, [dispatch]);

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
                        <Box>
                                {status === 'loading' && (
                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <CircularProgress />
                                        </Box>
                                )}
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
                                                                        {groups.map((group) => (
                                                                                <GroupCard
                                                                                        key={group.group_id}
                                                                                        title={group.group.name}
                                                                                        backgroundColor="#607D8B"
                                                                                        type={group.group.type}
                                                                                        userId={group.userId}
                                                                                        groupId={group.group_id}
                                                                                        groupType='public'
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

                        <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                justifyItems: 'center',
                        }}>

                                <DialogForm
                                        typeGroup='public'
                                        titleButton="إضافة مجموعة عامة "
                                        headerTitle="إنشاء مجموعة عامة"
                                        subHeaderTitle="الرجاء قم بإدخال اسم المجموعة التي تريد إنشائها   "
                                />
                        </Box>
                </Box >
        )
}

export default PublicGroupPage





