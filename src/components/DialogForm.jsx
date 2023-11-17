import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import MainButton from './MainButton';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogForm({ titleButton, headerTitle, subHeaderTitle, onClick }) {
        const [open, setOpen] = React.useState(false);
        const [textFieldValue, setTextFieldValue] = React.useState('');
        const [dropdownValue, setDropdownValue] = React.useState('private');

        const handleClickOpen = () => {
                setOpen(true);
        };

        const handleClose = () => {
                setOpen(false);
        };

        const handleTextFieldChange = (event) => {
                setTextFieldValue(event.target.value);
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
                                <DialogTitle>{headerTitle}</DialogTitle>
                                <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">{subHeaderTitle}</DialogContentText>

                                        <TextField
                                                label="Enter text"
                                                value={textFieldValue}
                                                onChange={handleTextFieldChange}
                                                fullWidth
                                                margin="normal"
                                                variant="outlined"
                                                required

                                        />
                                </DialogContent>
                                <DialogActions>
                                        <Button onClick={handleClose}>تراجع</Button>
                                        <Button onClick={handleClose}>إنشاء</Button>
                                </DialogActions>
                        </Dialog>
                </React.Fragment>
        );
}
