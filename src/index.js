import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootNode = createRoot(document.getElementById('root'));

rootNode.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);