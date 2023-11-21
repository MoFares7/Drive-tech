import  React,{useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const names = [
        ' محمد فارس الدباس',
        'هيثم منقار ',
        'علاء الخطيب ',
        'غمار الكسيح',
        'نور نصار ',
        'علاء زامل',
        'هادي بركات',
        'أحمد الحرفي',
        ' محمد عدنان الخالدي',

];


export default function MultipleSelectUser() {
        const [personName, setPersonName] = React.useState([]);;

        const handleChange = (event) => {
                const {
                        target: { value },
                } = event;
                setPersonName(
                        // On autofill we get a stringified value.
                        typeof value === 'string' ? value.split(',') : value,
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
                                                                                        paddingRight: 100
                                        }}
                                >
                                        المستخدمين
                                </InputLabel>
                                <Select
                                        labelId="demo-multiple-chip-label"
                                        id="demo-multiple-chip"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput id="select-multiple-chip" label="Chip" sx={{

                                        }} />}
                                        renderValue={(selected) => (
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.2 }}>
                                                        {selected.map((value) => (
                                                                <Chip key={value} label={value} />
                                                        ))}
                                                </Box>
                                        )}

                                        sx={{
                                                fontFamily: 'Cairo'
                                        }}
                                >
                                        {names.map((name) => (
                                                <MenuItem
                                                        key={name}
                                                        value={name}
                                                        style={{
                                                                fontFamily: 'Cairo',

                                                        }}
                                                >
                                                        {name}
                                                </MenuItem>
                                        ))}
                                </Select>
                        </FormControl>
                </div>
        );
}