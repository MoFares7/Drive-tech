// fileDownloadSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const downloadFile = createAsyncThunk('fileDownload/downloadFile', async (fileId, { getState }) => {
        try {
                const response = await axios.get(`http://127.0.0.1:8000/api/file/download/${fileId}`, {
                        responseType: 'blob', // Specify that the response is a binary blob (file)
                        headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                });

                // Create a Blob from the binary data
                const blob = new Blob([response.data], { type: response.headers['content-type'] });

                // Create a temporary link element to trigger the download
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = response.headers['content-disposition'].split('filename=')[1]; // Extract the filename from the response headers

                // Append the link to the body and trigger the click event
                document.body.appendChild(link);
                link.click();

                // Remove the link from the body
                document.body.removeChild(link);

                return { success: true };
        } catch (error) {
                console.error('Error downloading file:', error);
                throw error;
        }
});

const fileDownloadSlice = createSlice({
        name: 'downloadFile',
        initialState: {
                status: 'idle',
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(downloadFile.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(downloadFile.fulfilled, (state) => {
                                state.status = 'succeeded';
                        })
                        .addCase(downloadFile.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default fileDownloadSlice.reducer;
