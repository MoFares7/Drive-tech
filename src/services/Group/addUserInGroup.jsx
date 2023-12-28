import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addUserInGroup = createAsyncThunk(
        'api/group/join/user',
        async ({ groupId, user_id }) => {
                try {
                        const response = await axios.post(
                                `http://127.0.0.1:8000/api/group/join/user/${groupId}`,
                                { user_id },
                                {
                                        headers: {
                                                Authorization: `Bearer ${localStorage.getItem('token')}`,
                                        },
                                      
                                }
                        );
                        console.log('add User Group:', response.data);
                        return response;
                } catch (e) {
                        throw e;
                }
        }
);

const addUserInGroupSlice = createSlice({
        name: 'addUserInGroup',
        initialState: {
                isLoading: false,
                error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(addUserInGroup.pending, (state) => {
                                state.isLoading = true;
                                state.error = null;
                        })
                        .addCase(addUserInGroup.fulfilled, (state) => {
                                state.isLoading = false;
                                // You can perform any other state modifications as needed
                        })
                        .addCase(addUserInGroup.rejected, (state, action) => {
                                state.isLoading = false;
                                state.error = action.error.message;
                        });
        },
});

export default addUserInGroupSlice.reducer;
