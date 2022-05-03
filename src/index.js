import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PaginaInicio from './paginas/PaginaInicio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaginaInicio/>
  </React.StrictMode>
);
reportWebVitals();
