import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginLogo from '../../assets/images/signUp.jpg';
import { useDispatch } from 'react-redux';
import { setToken } from '../../services/Auth/tokenSlice';
import { CircularProgress } from '@mui/material';
import { register } from './../../services/Auth/signUpSlice';
import { useSnackbar } from 'notistack';

const defaultTheme = createTheme();

export default function SignUpPage() {
        const dispatch = useDispatch();
        const [fieldsName, setfieldsName] = useState('');
        const [fieldsNameError, setfieldsNameError] = useState(false);
        const [fieldsEmail, setfieldsEmail] = useState('');
        const [fieldsEmailError, setfieldsEmailError] = useState(false);
        const [fieldsPassword, setfieldsPassword] = useState('');
        const [fieldsPasswordError, setfieldsPasswordError] = useState(false);
        const { enqueueSnackbar } = useSnackbar();
        const [loading, setLoading] = useState(false);

        const handelFillFields = () => {
                // Perform validation
                if (fieldsName.trim() === '') {
                        setfieldsNameError(true);
                } else {
                        setfieldsNameError(false);
                }
                if (fieldsEmail.trim() === '') {
                        setfieldsEmailError(true);
                } else {
                        setfieldsEmailError(false);
                }
                if (fieldsPassword.trim() === '') {
                        setfieldsPasswordError(true);
                } else {
                        setfieldsPasswordError(false);
                }
        };
        const handleSubmit = async (event) => {

                event.preventDefault();
                setLoading(true);
                const data = new FormData(event.currentTarget);

                const body = {
                        name: data.get('name'),
                        email: data.get('email'),
                        password: data.get('password'),
                        role_id: 1,
                };

                try {
                        const resultAction = await dispatch(register(body));
                        if (register.fulfilled.match(resultAction)) {
                                const token = resultAction.payload.token;
                                dispatch(setToken(token));
                                window.location.href = '/';
                        } else if (register.rejected.match(resultAction)) {
                                const errorMessage = resultAction.payload; // Get the custom error message
                                enqueueSnackbar(errorMessage, { variant: 'error' });
                        }
                } catch (error) {
                        // Handle other errors and display a Snackbar
                        enqueueSnackbar('An error occurred during login.', { variant: 'error' });
                } finally {
                        setLoading(false);
                }
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
                                                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                                                <TextField
                                                                        margin="normal"
                                                                        required
                                                                        fullWidth
                                                                        id="name"
                                                                        label="اسم المستخدم"
                                                                        name="name"
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
                                                                        id="email"
                                                                        label="البريد الالكتروني"
                                                                        name="email"
                                                                        autoFocus
                                                                        error={fieldsEmailError}
                                                                        helperText={fieldsPasswordError ? 'يجب إدخال بريد الكتروني صحيح' : ''}
                                                                        onChange={(e) => {
                                                                                const newEmail = e.target.value;
                                                                                setfieldsEmail(newEmail);

                                                                                // Validate email format using a regular expression
                                                                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                                                                if (!emailRegex.test(newEmail)) {
                                                                                        setfieldsEmailError(true);
                                                                                } else {
                                                                                        setfieldsEmailError(false);
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
                                                                        error={fieldsPasswordError}
                                                                        helperText={fieldsPasswordError ? 'كلمة المرور يجب أن تكون على الأقل 8 أحرف' : ''}
                                                                        onChange={(e) => {
                                                                                const newPassword = e.target.value;
                                                                                setfieldsPassword(newPassword);

                                                                                if (newPassword.trim().length < 8) {
                                                                                        setfieldsPasswordError(true);
                                                                                } else {
                                                                                        setfieldsPasswordError(false);
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