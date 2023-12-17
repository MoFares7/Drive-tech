import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteFile = createAsyncThunk(
        'api/file/delete',
        async (fileId) => {
                try {
                        const response = await axios.delete(`http://127.0.0.1:8000/api/file/${fileId}`, {
                                headers: {
                                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                                },
                        });
                        console.log('File deleted:', response.data);
                        return response;
                } catch (e) {
                        throw e;
                }
        }
);

const deleteFileSlice = createSlice({
        name: 'deleteFile',
        initialState: {
                isLoading: false,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(deleteFile.pending, (state) => {
                                state.isLoading = true;
                                state.error = null;
                        })
                        .addCase(deleteFile.fulfilled, (state, action) => {
                                state.isLoading = false;

                        })
                        .addCase(deleteFile.rejected, (state, action) => {
                                state.isLoading = false;
                                state.error = action.error.message;
                        });
        },
});

export default deleteFileSlice.reducer;
