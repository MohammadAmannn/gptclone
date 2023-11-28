import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

// Create a root using createRoot
const reactRoot = createRoot(root);

// Render your App component within the root
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
