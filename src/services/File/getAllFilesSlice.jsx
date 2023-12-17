import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllFiles = createAsyncThunk(
        'api/file/get_files',
        async ({ groupId }) => {
                try {
                        const response = await axios.get(`http://127.0.0.1:8000/api/file/get_files/${groupId}`, {
                                headers: {
                                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                                },
                        });
                        console.log("Files : " + response.data);
                        return response.data.data;
                } catch (e) {
                        throw e;
                }
        }
);

const getAllFilesSlice = createSlice({
        name: 'getAllFiles',
        initialState: {
                status: 'idle',
                data: [],
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(getAllFiles.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(getAllFiles.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload;
                        })
                        .addCase(getAllFiles.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default getAllFilesSlice.reducer;
