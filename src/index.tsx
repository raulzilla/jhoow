import { GlobalStyles, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/Home';
import Texture from './pages/texture/Texture';
import Clients from './pages/clients/Clients';
import reportWebVitals from './reportWebVitals';
import theme from './themes';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.jhoow}>
      <GlobalStyles styles={(theme) => ({ body: { background: theme.palette.primary.dark }})}/>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='texture' element={<Texture />} />
          <Route path='texture/:id' element={<Texture />} />
          <Route path='clients' element={<Clients />} />
          <Route path='clients/:id' element={<Clients />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
