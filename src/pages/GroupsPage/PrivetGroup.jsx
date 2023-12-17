import React, { useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import GroupCard from '../HomePage/components/GroupCard';
import DialogForm from './../../components/DialogForm';
import SearchHeader from '../../components/SearchHeader';
import Header from '../HomePage/components/HeaderCard';
import DialogFormPrivate from '../../components/DialogFormPrivate';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupsAboutType } from './../../services/Group/getGroupsAboutTypeSlice';
import NoData from '../../components/NoData';
import noData from '../../assets/icons/null.svg';

const PrivetGroupPage = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.getGroupsAboutType.data);
  const { status, error } = useSelector((state) => state.getGroupsAboutType);

  useEffect(() => {
    dispatch(getGroupsAboutType('private'));
  }, [dispatch]);

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
        textAlign: 'center', display: 'flex',
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
                        backgroundColor='#607D8B'
                        type={group.group.type}
                        userId={group.userId}
                        groupId={group.group_id}
                        groupType='private'
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
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
      }}>
        <DialogFormPrivate
          titleButton="إضافة مجموعة خاصة "
          headerTitle="إنشاء مجموعة خاصة"
          subHeaderTitle="الرجاء قم بإدخال اسم المجموعة التي تريد إنشائها   "
        />
      </Box>
    </Box >
  )
}

export default PrivetGroupPage



