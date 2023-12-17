import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import MainButton from './MainButton';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
});

export default function NormalDialog({ titleButton, headerTitle, subHeaderTitle, onClick }) {
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
                setOpen(true);
        };

        const handleClose = () => {
                setOpen(false);
        };


        return (
                <React.Fragment>
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

                                        <Typography > هل تريد تسجيل الخروج ؟ </Typography>
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

                                                onClick={onClick}
                                        >
                                                نعم
                                        </Button>
                                </DialogActions>
                        </Dialog >
                </React.Fragment >
        );
}
