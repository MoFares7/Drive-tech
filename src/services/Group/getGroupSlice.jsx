import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGroups = createAsyncThunk(
        'api/group/user',
        async () => {
                try {
                        const response = await axios.get('http://127.0.0.1:8000/api/group/user', {
                                headers: {
                                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                                },
                        });
                        console.log("Groups: " + response.data);
                        return response.data.data;
                } catch (e) {
                        throw e;
                }
        }
);

const getGroupsSlice = createSlice({
        name: 'getGroups',
        initialState: {
                status: 'idle',
                data: [],
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(getGroups.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(getGroups.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload;
                        })
                        .addCase(getGroups.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default getGroupsSlice.reducer;
