import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const leaveUserFromGroup = createAsyncThunk(
        'api/group/leave/user',
        async ({ userId, groupId }) => {
                try {
                        const response = await axios.get(
                                `http://127.0.0.1:8000/api/group/leave/user/${userId}/${groupId}`,
                                {},
                                {
                                        headers: {
                                                Authorization: `Bearer ${localStorage.getItem('token')}`,
                                        },
                                }
                        );
                        console.log('Leave user from Group:', response.data);
                        return response.data; 
                } catch (e) {
                        throw e;
                }
        }
);

const leaveUserFromGroupSlice = createSlice({
        name: 'leaveUserFromGroup',
        initialState: {
                isLoading: false,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(leaveUserFromGroup.pending, (state) => {
                                state.isLoading = true;
                                state.error = null;
                        })
                        .addCase(leaveUserFromGroup.fulfilled, (state) => {
                                state.isLoading = false;
                                // You can perform any other state modifications as needed
                        })
                        .addCase(leaveUserFromGroup.rejected, (state, action) => {
                                state.isLoading = false;
                                state.error = action.error.message;
                        });
        },
});

export default leaveUserFromGroupSlice.reducer;
