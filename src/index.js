import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/index.css';
import Header from './components/Header';
import LogIn from './components/LogIn';
import Translator from './components/Translator';
import Profile from './components/Profile';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
     <Header />
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
