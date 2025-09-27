import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './finance-tracker/App.jsx';
import './finance-tracker/style.css'; // Optional: create for custom styles

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
