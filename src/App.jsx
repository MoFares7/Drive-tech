import React, { useEffect } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import '@fontsource/cairo/400.css';
import RouteApp from './routes/RouteApp';
import LoginPage from './pages/AuthPage/LoginPage';
import SignUpPage from './pages/AuthPage/SignUpPage';
import RouteAuth from './routes/RouteAuth';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const { i18n } = useTranslation();

  document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  // Check if token exists in local storage
  const hasToken = localStorage.getItem('token');

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', width: '100%' }}>
        <BrowserRouter>
          {hasToken ? (
            // User is authenticated, show the main app routes
            <RouteApp />
          ) : (
            // User is not authenticated, show authentication routes
            <RouteAuth />
          )}
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
