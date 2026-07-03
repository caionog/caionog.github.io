import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import '../style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App page={rootElement.dataset.page || 'home'} projectId={rootElement.dataset.projectId} />
  </React.StrictMode>,
);