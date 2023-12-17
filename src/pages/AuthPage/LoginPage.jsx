import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginLogo from '../../assets/images/login.jpg';
import { useSnackbar } from 'notistack';
import { CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setToken } from '../../services/Auth/tokenSlice';
import { login } from '../../services/Auth/loginSlice';


const defaultTheme = createTheme();

export default function LoginPage() {
        const dispatch = useDispatch();
        const [fieldsName, setfieldsName] = useState('');
        const [fieldsNameError, setfieldsNameError] = useState(false);
        const [fieldsPassword, setfieldsPassword] = useState('');
        const [fieldsPasswordError, setfieldsPasswordError] = useState(false);
        const { enqueueSnackbar } = useSnackbar();
        const [loading, setLoading] = useState(false);

        const handelFillFields = () => {
                if (fieldsName.trim() === '') {
                        setfieldsNameError(true);
                } else {
                        setfieldsNameError(false);
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
                        password: data.get('password'),
                };

                try {
                        const resultAction = await dispatch(login(body));
                        if (login.fulfilled.match(resultAction)) {
                                const token = resultAction.payload.token;
                                dispatch(setToken(token));
                                window.location.href = '/';
                        } else if (login.rejected.match(resultAction)) {
                                // Handle rejection and display a Snackbar
                                const errorMessage = resultAction.payload;
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
                                        md: 'block',
                                        lg: 'flex'

                                },
                                width: '100%',

                        }}>
                                <Grid container component="main" sx={{ height: '100vh', }}>
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
                                                                تسجيل الدخول
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
                                                                                تسجيل الدخول
                                                                        </Button>
                                                                )}
                                                                <Grid container justifyContent="center">
                                                                        <Grid item>
                                                                                <Link
                                                                                        href="/signUp"
                                                                                        variant="body2"
                                                                                        color="#1d2634"
                                                                                        sx={{
                                                                                                textDecoration: 'none',
                                                                                                justifyContent: 'center',
                                                                                                alignItems: 'center',
                                                                                                fontFamily: 'Cairo'
                                                                                        }}
                                                                                >
                                                                                        {"ليس لديل حساب ؟ إنشاء حساب"}
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