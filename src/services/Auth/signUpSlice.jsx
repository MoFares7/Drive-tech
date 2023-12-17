// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const register = createAsyncThunk('api/auth/register', async (body, { rejectWithValue }) => {
        try {
                console.log('body:', body);
                const response = await axios.post('http://127.0.0.1:8000/api/auth/register', body);
                const token = localStorage.setItem('token', response.data.token)
                console.log("token " + token)
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
                                console.log("data.errors.email" + data.errors.email);
                                return rejectWithValue("The Email is used before");
                        }
                }
                throw error;
        }
});

const registerSlice = createSlice({
        name: 'register',
        initialState: {
                status: 'idle',
                data: null,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(register.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(register.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload;
                        })
                        .addCase(register.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default registerSlice.reducer;
