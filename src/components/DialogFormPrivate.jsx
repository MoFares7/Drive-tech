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
import { useDispatch } from 'react-redux';
import { addGroups, addGroupsStart, addGroupsSuccess, addGroupsFailure } from '../services/Group/addGroupSlice';
import { getGroupsAboutType } from '../services/Group/getGroupsAboutTypeSlice';

const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogFormPrivate({ titleButton, headerTitle, subHeaderTitle, onClick }) {
        const [open, setOpen] = React.useState(false);
        const [textFieldValue, setTextFieldValue] = React.useState('');
        const [textFieldError, setTextFieldError] = React.useState('');
        const [selectedFile, setSelectedFile] = useState(null);
        const fileInputRef = useRef(null);
        const dispatch = useDispatch();
        const handleClickOpen = () => {
                setOpen(true);
        };

        const handleClose = () => {
                setOpen(false);
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
                const file = event.target.files[0];
                setSelectedFile(file);
                setSelectedFile(file ? file.name : '');
        };

        const handleCreateClick = () => {
                if (textFieldValue.trim() === '' && (!selectedFile || selectedFile.trim() === '')) {
                        setTextFieldError('الحقل مطلوب');
                } else {
                        dispatch(addGroupsStart());

                        //   Dispatch the addGroups action with the name as the body
                        dispatch(addGroups({
                                body:
                                {
                                        name: textFieldValue,
                                        type: 'private'
                                }
                        }))
                                .then(() => {
                                        // Dispatch the addGroupsSuccess action on successful API call
                                        dispatch(addGroupsSuccess());
                                        dispatch(getGroupsAboutType('private'));
                                        setOpen(false);
                                })
                                .catch((error) => {
                                        dispatch(addGroupsFailure(error));
                                })

                }
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
                                                                // width: '100%',
                                                                fontFamily: 'Cairo',
                                                                // textAlign: 'right',
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
                                        <MultipleSelectUser />
                                </DialogContent>
                                <DialogActions>
                                        <Button
                                                sx={{
                                                        fontFamily: 'Cairo',
                                                        color: 'red',
                                                        '&:hover': {
                                                                backgroundColor: '#F44336',
                                                                color: 'white',
                                                                pl: 1
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
                        </Dialog >
                </React.Fragment >
        );
}

