import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import SidebarLayout from './components/SidebarLayout';
import '@fontsource/cairo/400.css';
import PublicGroupPage from './pages/GroupsPage/PublicGroup';
import PrivetGroupPage from './pages/GroupsPage/PrivetGroup';
import SettingPage from './pages/SettingPage';

function App() {
  const { i18n } = useTranslation();

  document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route  element={<SidebarLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/public" element={<PublicGroupPage />} />
            <Route path="/privet" element={<PrivetGroupPage />} />
            <Route path="/setting" element={<SettingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
