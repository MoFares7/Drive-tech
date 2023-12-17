import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
        'api/all/users',
        async () => {
                try {
                        const response = await axios.get('http://127.0.0.1:8000/api/all/users', {

                        });
                        console.log("users " + response.data);
                        return response.data.data;
                } catch (e) {
                        throw e;
                }
        }
);

const getUsersSlice = createSlice({
        name: 'getUsers',
        initialState: {
                status: 'idle',
                data: [],
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(getUsers.pending, (state) => {
                                state.status = 'loading';
                        })
                        .addCase(getUsers.fulfilled, (state, action) => {
                                state.status = 'succeeded';
                                state.data = action.payload;
                        })
                        .addCase(getUsers.rejected, (state, action) => {
                                state.status = 'failed';
                                state.error = action.error.message;
                        });
        },
});

export default getUsersSlice.reducer;
