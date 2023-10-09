import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocumentDetail from './page/DocumentDetail';
import LoginPage from './page/LoginPage';
import EmptyPage from './page/EmptyPage';
import RegisterPage from './page/RegisterPage';
import Home from './page/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/document" element={<DocumentDetail />} />
            <Route path="/*" element={<EmptyPage />} />
        </Routes>
    </BrowserRouter>,
);
