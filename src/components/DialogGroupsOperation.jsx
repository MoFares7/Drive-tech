import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import MainButton from './MainButton';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogGroupOperation({ open, headerTitle, subHeaderTitle, handleClose }) {
         const [textFieldValue, setTextFieldValue] = useState('');
        const [textFieldError, setTextFieldError] = useState('');

        const [loading, setLoading] = useState(false);
        const dispatch = useDispatch();

        const handleTextFieldChange = (event) => {
                const value = event.target.value;
                setTextFieldValue(value);

                if (value.trim() === '') {
                        setTextFieldError('الحقل مطلوب');
                } else {
                        setTextFieldError('');
                }

        };

        return (
                <React.Fragment>
                        {/* <MainButton width="200px" color="#3F51B5" title={titleButton} onClick={handleClickOpen} /> */}
                        <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted

                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                        >
                                <DialogTitle sx={{ fontFamily: 'Cairo' }}>{headerTitle}</DialogTitle>

                                <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description" sx={{ fontFamily: 'Cairo' }}>{subHeaderTitle}</DialogContentText>

                                        <TextField
                                                label="البريد الالكتروني"
                                                value={textFieldValue}
                                                onChange={handleTextFieldChange}
                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                                required
                                                error={Boolean(textFieldError)}
                                                helperText={textFieldError}
                                                InputLabelProps={{
                                                        style: {
                                                                fontFamily: 'Cairo',
                                                        },
                                                }}
                                                InputProps={{
                                                        sx: {
                                                                fontFamily: 'Cairo',
                                                                borderTopRightRadius: 4,
                                                                borderBottomRightRadius: 4,
                                                                borderColor: textFieldError ? 'red' : undefined,
                                                        },
                                                }}
                                        />

                                </DialogContent>
                                <DialogActions>
                                        <Button
                                                sx={{
                                                        fontFamily: 'Cairo',
                                                        color: 'red',
                                                        '&:hover': {
                                                                backgroundColor: '#F44336',
                                                                color: 'white',
                                                                pl: 1,
                                                        },
                                                }}
                                                onClick={handleClose}
                                        >
                                                تراجع
                                        </Button>
                                        <Button
                                                sx={{
                                                        backgroundColor: '#272356',
                                                        color: 'white',
                                                        fontFamily: 'Cairo',
                                                        '&:hover': {
                                                                backgroundColor: '#303F9F',
                                                        },
                                                }}
                                        // onClick={ }
                                        >
                                                {loading ? <CircularProgress size={24} style={{ color: 'white' }} />
                                                        : 'إضافة'}
                                        </Button>
                                </DialogActions>
                        </Dialog>

                </React.Fragment>
        );
}
