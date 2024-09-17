import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ваш основной компонент App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Ваше приложение, где уже используется RouterProvider */}
  </React.StrictMode>
)
