import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MainButton from './MainButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogFile({ titleButton, headerTitle, subHeaderTitle, onClick }) {
        const [open, setOpen] = useState(false);
        const [textFieldValue, setTextFieldValue] = useState('');
        const [textFieldError, setTextFieldError] = useState('');
        const [selectedFile, setSelectedFile] = useState(null);
        const [selectedUsers, setSelectedUsers] = useState([]);
        const fileInputRef = useRef(null);

        const handleClickOpen = () => {
                setOpen(true);
        };

        const handleClose = () => {
                setOpen(false);
                setTextFieldValue('');
                setTextFieldError('');
                setSelectedUsers([]);
        };

        const handleTextFieldChange = (event) => {
                const value = event.target.value;
                setTextFieldValue(value);

                // Validation: Check if the value is empty and set error accordingly
                if (value.trim() === '') {
                        setTextFieldError('الحقل مطلوب');
                } else {
                        setTextFieldError('');
                }
        };

        const handleFileChange = (event) => {
                const file = event.target.files[0];
                setSelectedFile(file);
                setTextFieldValue(file ? file.name : '');
        };

        const handleCreateClick = () => {
                // Validation: Check if the value is empty before closing the dialog
                if (textFieldValue.trim() === '') {
                        setTextFieldError('الحقل مطلوب');
                } else {
                        // Perform other actions or close the dialog
                        setOpen(false);

                        // Use the selected file and text field value as needed
                        console.log('Selected File:', selectedFile);
                        console.log('Text Field Value:', textFieldValue);
                        setTextFieldValue('');
                        setTextFieldError('');
                        setSelectedUsers([]);
                }
        };

        return (
                <React.Fragment>
                        <MainButton width="300px" color="#3F51B5" title={titleButton} onClick={handleClickOpen} />

                        <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
                                <DialogTitle sx={{ fontFamily: 'Cairo' }}>{headerTitle}</DialogTitle>
                                <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description" sx={{ fontFamily: 'Cairo' }}>
                                                {subHeaderTitle}
                                        </DialogContentText>

                                        <FormControl fullWidth sx={{}}>
                                                <TextField
                                                        id="file-input"
                                                        fullWidth
                                                        margin="normal"
                                                        variant="outlined"
                                                        value={selectedFile}
                                                        onChange={handleTextFieldChange}
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
                                                                                                textAlign: ' left',
                                                                                                ml: 3, alignItems: 'center'
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
                                                إنشاء
                                        </Button>
                                </DialogActions>
                        </Dialog>
                </React.Fragment>
        );
}
