import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Header from './components/Header';
import LogIn from './components/LogIn';
import Translator from './components/Translator';
import Profile from './components/Profile';
import Footer from './components/Footer';
/*
import { 
  Header,
  LogIn,
  Translator,
  Profile,
  Footer
} from './components';
*/


ReactDOM.render(
  <Router >
    <Header />
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/Translator" element={<Translator />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);
