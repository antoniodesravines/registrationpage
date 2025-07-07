import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Get the root DOM node
const rootElement = document.getElementById('root');

// Create the React root and render the App
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
