import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteGroup = createAsyncThunk(
        'api/group/delete',
        async (groupId) => {
                try {
                        const response = await axios.delete(`http://127.0.0.1:8000/api/group/${groupId}`, {
                                headers: {
                                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                                },
                        });
                        console.log('Group deleted:', response.data);
                        return response;
                } catch (e) {
                        throw e;
                }
        }
);

const deleteGroupSlice = createSlice({
        name: 'deleteGroup',
        initialState: {
                isLoading: false,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(deleteGroup.pending, (state) => {
                                state.isLoading = true;
                                state.error = null;
                        })
                        .addCase(deleteGroup.fulfilled, (state, action) => {
                                state.isLoading = false;
                               
                        })
                        .addCase(deleteGroup.rejected, (state, action) => {
                                state.isLoading = false;
                                state.error = action.error.message;
                        });
        },
});

export default deleteGroupSlice.reducer;
