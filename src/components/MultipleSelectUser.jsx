import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../services/Auth/getUsersSlice';

export default function MultipleSelectUser(onUsersSelected) {
        const dispatch = useDispatch();
        const usersData = useSelector((state) => state.getUsers.data);
        const [personName, setPersonName] = useState([]);

        useEffect(() => {
                dispatch(getUsers());
        }, [dispatch]);

        const handleChange = (event) => {
                const {
                        target: { value },
                } = event;
                setPersonName(
                        // On autofill we get a stringified value.
                        typeof value === 'string' ? value.split(',') : value
                );
        };

        return (
                <div>
                        <FormControl sx={{ direction: 'ltr', m: 1, width: 540, fontFamily: 'Cairo' }}>
                                <InputLabel
                                        id="demo-multiple-chip-label"
                                        sx={{
                                                width: '100%',
                                                fontFamily: 'Cairo',
                                                paddingRight: 100,
                                        }}
                                >
                                        المستخدمين
                                </InputLabel>
                                <Select
                                        labelId="demo-multiple-chip-label"
                                        id="demo-multiple-chip"
                                        // multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput id="select-multiple-chip" label="Chip" sx={{}} />}
                                        renderValue={(selected) => (
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.2 }}>
                                                        {selected.map((value) => (
                                                                <Chip key={value} label={value} />
                                                        ))}
                                                </Box>
                                        )}
                                        sx={{
                                                fontFamily: 'Cairo',
                                        }}
                                >
                                        {usersData.map((user) => (
                                                <MenuItem
                                                        key={user.id}
                                                        onUsersSelected={user.id}
                                                        value={user.name}
                                                        style={{
                                                                fontFamily: 'Cairo',
                                                        }}
                                                >
                                                        {user.name}
                                                </MenuItem>
                                        ))}
                                </Select>
                        </FormControl>
                </div>
        );
}
