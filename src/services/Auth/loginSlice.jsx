// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('api/auth/login', async (body, { rejectWithValue }) => {
        try {
                const response = await axios.post('http://127.0.0.1:8000/api/auth/login', body);
                const token = localStorage.setItem('token', response.data.token);
                console.log("token " + token);
                console.log(response);

                return response.data;
        } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                        const { status, data } = error.response;

                        if (status === 401) {
                                // Handle 401 (Unauthorized) error
                                console.log('Unauthorized: Incorrect body');
                                return rejectWithValue('Email and Password not matched.');
                        } else if (status === 422 && data && data.errors && data.errors.email) {
                                // Handle specific case for email not found and return a custom message
                                console.log('Email not found');
                                return rejectWithValue('Email is not exist');
                        }
                }
                throw error;
        }
});


const loginSlice = createSlice({
        name: 'login',
        initialState: {
                status: 'idle', 
                data: null,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(login.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(login.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload;
                        })
                        .addCase(login.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default loginSlice.reducer;
