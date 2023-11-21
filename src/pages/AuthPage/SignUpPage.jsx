import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginLogo from '../../assets/images/signUp.jpg';

import { CircularProgress } from '@mui/material';


const defaultTheme = createTheme();

export default function SignUpPage() {
        const [fieldsName, setfieldsName] = useState('');
        const [fieldsNameError, setfieldsNameError] = useState(false);
        const [loading, setLoading] = useState(false);

        const handelFillFields = () => {
                // Perform validation
                if (fieldsName.trim() === '') {
                        setfieldsNameError(true);
                } else {
                        setfieldsNameError(false);
                }
        };
        const handleSubmit = async (event) => {

        };

        return (
                <ThemeProvider theme={defaultTheme}>
                        <Box sx={{
                                display: {
                                        xs: 'block',
                                        sm: 'block',
                                        md: 'flex',
                                },
                                width: '100%',
                        }}>
                                <Grid container component="main" sx={{ height: '100vh' }}>
                                        <CssBaseline />

                                        <Grid item xs={12} sm={8} md={5} elevation={6} square>
                                                <Box
                                                        sx={{
                                                                my: 15,
                                                                mx: 4,
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                alignItems: 'center',
                                                        }}
                                                >
                                                        <Avatar sx={{ m: 1, bgcolor: '#1d2634' }}>
                                                                <LockOutlinedIcon />
                                                        </Avatar>
                                                        <Typography component="h1" variant="h5" sx={{
                                                                fontFamily: 'Cairo',
                                                        }}>
                                                                إنشاء حساب في النظام
                                                        </Typography>
                                                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                                                <TextField
                                                                        margin="normal"
                                                                        required
                                                                        fullWidth
                                                                        id="username"
                                                                        label="اسم المستخدم"
                                                                        name="username"
                                                                        autoFocus
                                                                        error={fieldsNameError}
                                                                        helperText={fieldsNameError ? ' الحقل مطلوب' : ''}
                                                                        onChange={(e) => {
                                                                                setfieldsName(e.target.value);
                                                                                if (e.target.value.trim() !== '') {
                                                                                        setfieldsNameError(false);
                                                                                }
                                                                        }}
                                                                        InputLabelProps={{
                                                                                style: {
                                                                                        fontFamily: 'Cairo',
                                                                                        fontSize: '12px',

                                                                                },
                                                                        }}
                                                                />
                                                                <TextField
                                                                        margin="normal"
                                                                        required
                                                                        fullWidth
                                                                        id="username"
                                                                        label="البريد الالكتروني "
                                                                        name="username"
                                                                        autoFocus
                                                                        error={fieldsNameError}
                                                                        helperText={fieldsNameError ? ' الحقل مطلوب' : ''}
                                                                        onChange={(e) => {
                                                                                setfieldsName(e.target.value);
                                                                                if (e.target.value.trim() !== '') {
                                                                                        setfieldsNameError(false);
                                                                                }
                                                                        }}
                                                                        InputLabelProps={{
                                                                                style: {
                                                                                        fontFamily: 'Cairo',
                                                                                        fontSize: '12px',

                                                                                },
                                                                        }}
                                                                />
                                                                <TextField
                                                                        margin="normal"
                                                                        required
                                                                        fullWidth
                                                                        name="password"
                                                                        label="كلمة المرور"
                                                                        type="password"
                                                                        id="password"
                                                                        error={fieldsNameError}
                                                                        helperText={fieldsNameError ? ' الحقل مطلوب' : ''}
                                                                        onChange={(e) => {
                                                                                setfieldsName(e.target.value);
                                                                                if (e.target.value.trim() !== '') {
                                                                                        setfieldsNameError(false);
                                                                                }
                                                                        }}
                                                                        InputLabelProps={{
                                                                                style: {
                                                                                        fontFamily: 'Cairo',
                                                                                        fontSize: '12px',

                                                                                },
                                                                        }}
                                                                />
                                                                {loading ? (
                                                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                                                <CircularProgress />
                                                                        </Box>
                                                                ) : (
                                                                        <Button
                                                                                onClick={handelFillFields}
                                                                                type="submit"
                                                                                fullWidth
                                                                                variant="contained"
                                                                                sx={{
                                                                                        mt: 3, mb: 2, backgroundColor: '#1d2634', fontFamily: 'Cairo',
                                                                                        '&:hover': {
                                                                                                backgroundColor: '#000',
                                                                                        },
                                                                                }}
                                                                        >
                                                                                إنشاء حساب
                                                                                </Button>
                                                                )}
                                                                <Grid container justifyContent="center">
                                                                        <Grid item>
                                                                                <Link
                                                                                        href="/login"
                                                                                        variant="body2"
                                                                                        color="#1d2634"
                                                                                        sx={{
                                                                                                textDecoration: 'none',
                                                                                                justifyContent: 'center',
                                                                                                alignItems: 'center',
                                                                                                fontFamily: 'Cairo'
                                                                                        }}
                                                                                >
                                                                                        {" لديل حساب سابق ؟ تسجيل الدخول"}
                                                                                </Link>
                                                                        </Grid>
                                                                </Grid>
                                                        </Box>
                                                </Box>
                                        </Grid>
                                        <Grid
                                                item
                                                xs={false}
                                                sm={4}
                                                md={7}
                                                sx={{
                                                        backgroundImage: `url(${loginLogo})`,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'contain', // Change this to adjust the size
                                                        backgroundPosition: 'center',
                                                }}
                                        />

                                </Grid>

                        </Box>
                </ThemeProvider>
        );
}