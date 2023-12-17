import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addGroups = createAsyncThunk(
        'api/group/adding',
        async ({ body }) => {
                try {
                        console.log('body:', body);
                        const response = await axios.post('http://127.0.0.1:8000/api/group/adding', body, {
                                headers: {
                                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                                        "Content-Type": "multipart/form-data",
                                },
                        });
                        console.log('add groups ' + response.data);
                        return response.data.data;
                } catch (e) {
                        console.error('Error adding group:', e);
                        throw e;
                }
        }
);


const addGroupslice = createSlice({
        name: 'addGroups',
        initialState: {
                isLoading: false,
                error: null,
        },
        reducers: {
                addGroupsStart: (state) => {
                        state.isLoading = true;
                        state.error = null;
                },
                addGroupsSuccess: (state) => {
                        state.isLoading = false;
                        state.error = null;
                },
                addGroupsFailure: (state, action) => {
                        state.isLoading = false;
                        state.error = action.payload;
                },
        },
});

export const { addGroupsStart, addGroupsSuccess, addGroupsFailure } = addGroupslice.actions;

export default addGroupslice.reducer;
