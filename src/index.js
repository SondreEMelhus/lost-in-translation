import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './App'
import AppContext from './context/AppContext';

//TODO: Finn en måte å stoppe bruker fra å bypasse login

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
