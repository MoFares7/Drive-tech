

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createFiles = createAsyncThunk(
        'api/file/adding',
        async ({ body }, { rejectWithValue }) => {
                try {
                        const response = await axios.post('http://127.0.0.1:8000/api/file/adding', body, {
                                headers: {
                                        "Content-Type": "multipart/form-data",
                                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                                },
                        });
                        console.log("Files Created : " + response.data);
                        return response.data.data;
                } catch (error) {
                         return rejectWithValue(error.message);
                }
        }
);

const createFilesSlice = createSlice({
        name: 'createFiles',
        initialState: {
                status: 'idle',
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(createFiles.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(createFiles.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                              
                        })
                        .addCase(createFiles.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default createFilesSlice.reducer;
