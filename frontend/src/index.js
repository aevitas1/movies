import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
        <Router>
            <App />
        </Router>
  </React.StrictMode>
);