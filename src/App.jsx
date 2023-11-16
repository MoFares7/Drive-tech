import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import SidebarLayout from './components/SidebarLayout';
import '@fontsource/cairo/400.css';

function App() {
  const { i18n } = useTranslation();

  document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route element={<SidebarLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
