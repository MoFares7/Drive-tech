import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGroupsAboutType = createAsyncThunk(
        'api/group/type',
        async ( type ) => {
                try {
                        const response = await axios.get(`http://127.0.0.1:8000/api/group/type?type=${type}`, {
                                headers: {
                                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                                },
                        });
                        console.log(" get Groups: " + response.data);
                        return response.data.data;
                } catch (e) {
                        throw e;
                }
        }
);

const getGroupsAboutTypeSlice = createSlice({
        name: 'getGroupsAboutType',
        initialState: {
                status: 'idle',
                data: [],
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(getGroupsAboutType.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(getGroupsAboutType.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload;
                        })
                        .addCase(getGroupsAboutType.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default getGroupsAboutTypeSlice.reducer;
