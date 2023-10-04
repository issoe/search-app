import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocumentDetail from './page/DocumentDetail';
import LoginPage from './page/LoginPage';
import EmptyPage from './page/EmptyPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<EmptyPage />} />
      <Route path='/home' element={<App />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/document' element={<DocumentDetail />} />
    </ Routes>
  </BrowserRouter>

);
