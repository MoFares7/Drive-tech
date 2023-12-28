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
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MultipleSelectUser from './MultipleSelectUser';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { addGroups, addGroupsStart, addGroupsSuccess, addGroupsFailure } from '../services/Group/addGroupSlice';
import axios from 'axios';
import { getGroupsAboutType } from '../services/Group/getGroupsAboutTypeSlice';

const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogForm({ typeGroup, titleButton, headerTitle, subHeaderTitle, onClick }) {
        const [open, setOpen] = useState(false);
        const [textFieldValue, setTextFieldValue] = useState('');
        const [emailFieldValue, setEmailFieldValue] = useState('');
        const [textFieldError, setTextFieldError] = useState('');
        const [selectedFile, setSelectedFile] = useState(null);
        const [loading, setLoading] = useState(false);
        const [snackbarOpen, setSnackbarOpen] = useState(false);
        const [snackbarMessage, setSnackbarMessage] = useState('');
        const fileInputRef = useRef(null);
        const dispatch = useDispatch();

        const handleClickOpen = () => {
                setOpen(true);
        };

        const handleClose = () => {
                setOpen(false);
                setTextFieldValue('');
                setEmailFieldValue('');
                setTextFieldError('');
                setSelectedFile(null);
        };

        const handleTextFieldChange = (event) => {
                const value = event.target.value;
                setTextFieldValue(value);

                if (value.trim() === '') {
                        setTextFieldError('الحقل مطلوب');
                } else {
                        setTextFieldError('');
                }
        };

        const handleFileChange = (event) => {
                setSelectedFile(event.target.files[0]);
        };

        const handleEmailChange = (event) => {
                const value = event.target.value;
                setEmailFieldValue(value);
        }

        const handleCreateClick = async (event) => {
                event.preventDefault();

                if (textFieldValue.trim() === '' && (!selectedFile || selectedFile.trim() === '')) {
                        setTextFieldError('الحقل مطلوب');
                } else {
                        setLoading(true);

                        const formData = new FormData();
                        formData.append("name", textFieldValue);
                        formData.append("type", typeGroup);
                        formData.append("filename", 'aaaa');
                        formData.append("link", selectedFile);
                        formData.append("email", emailFieldValue);

                        try {
                                const response = await axios({
                                        method: "post",
                                        url: "http://127.0.0.1:8000/api/group/adding",
                                        data: formData,
                                        headers: {
                                                "Content-Type": "multipart/form-data",
                                                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                                        },
                                });

                                dispatch(addGroupsSuccess());
                                dispatch(getGroupsAboutType(typeGroup));
                                console.log(typeGroup + "this is abbbb");
                                setOpen(false);
                                setLoading(false);
                                setTextFieldValue('');
                                setEmailFieldValue('');
                                setTextFieldError('');
                                setSelectedFile(null);
                        } catch (error) {
                                dispatch(addGroupsFailure(error));
                                setLoading(false);
                                setSnackbarMessage('Error creating group. Please try again.');
                                setSnackbarOpen(true);
                        }
                }
        };

        const handleSnackbarClose = () => {
                setSnackbarOpen(false);
        };

        return (
                <React.Fragment>
                        <MainButton width="200px" color="#3F51B5" title={titleButton} onClick={handleClickOpen} />
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
                                                label="اسم المجموعة"
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

                                        <FormControl fullWidth sx={{}}>
                                                <TextField
                                                        id="file-input"
                                                        fullWidth
                                                        margin="normal"
                                                        variant="outlined"
                                                        value={selectedFile ? selectedFile.name : ''}
                                                        onChange={handleFileChange}
                                                        required
                                                        disabled
                                                        error={Boolean(textFieldError)}
                                                        helperText={textFieldError}
                                                        InputProps={{
                                                                endAdornment: (
                                                                        <div style={{ display: 'flex' }}>
                                                                                <InputLabel
                                                                                        htmlFor="file-input"
                                                                                        sx={{
                                                                                                width: '100%',
                                                                                                fontFamily: 'Cairo',
                                                                                                textAlign: 'left',
                                                                                                ml: 3,
                                                                                                alignItems: 'center',
                                                                                        }}
                                                                                >
                                                                                        الملف
                                                                                </InputLabel>
                                                                                <IconButton
                                                                                        color="primary"
                                                                                        component="span"
                                                                                        onClick={() => fileInputRef.current.click()}
                                                                                        edge="end"
                                                                                >
                                                                                        <CloudUploadIcon />
                                                                                </IconButton>
                                                                        </div>
                                                                ),
                                                                sx: {
                                                                        fontFamily: 'Cairo',
                                                                        borderTopRightRadius: 4,
                                                                        borderBottomRightRadius: 4,
                                                                        borderColor: textFieldError ? 'red' : undefined,
                                                                },
                                                        }}
                                                />
                                                <input
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        accept=".pdf,.doc,.docx"
                                                        ref={fileInputRef}
                                                        style={{ display: 'none' }}
                                                />

                                        </FormControl>
                                        <TextField
                                                label="البريد الالكتروني للمستخدم"
                                                value={emailFieldValue}
                                                onChange={handleEmailChange}
                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                                required
                                                //  helperText={textFieldError}
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
                                        {/* <MultipleSelectUser /> */}
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
                                                onClick={handleCreateClick}
                                        >
                                                {loading ? <CircularProgress size={24} style={{ color: 'white' }} />
                                                        : 'إنشاء'}
                                        </Button>
                                </DialogActions>
                        </Dialog>
                        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                                <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="error">
                                        {snackbarMessage}
                                </MuiAlert>
                        </Snackbar>
                </React.Fragment>
        );
}
