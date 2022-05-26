import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import "@fontsource/maitree"
import "@fontsource/milonga"
import "@fontsource/merienda"
import "@fontsource/new-tegomin"

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

