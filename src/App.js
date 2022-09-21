import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/index.css';
import Header from './components/Header';
import LogIn from './components/LogIn';
import Translator from './components/Translator';
import Profile from './components/Profile';
import Footer from './components/Footer';

export function App () {

    return (
        <div>
            <Router >
                <Header />
                <Routes>
                    <Route path="/" element={<LogIn />} />
                    <Route path="/Translator" element={<Translator />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}