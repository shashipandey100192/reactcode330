import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./global.css";
import Welcomepage from './modules/auth/Welcomepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myerrorpage from './modules/shares/Myerrorpage';
import Mymainpage from './modules/dashboard/Mymainpage';
import Mymobilepage from './modules/mobile/Mymobilepage';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomepage/>}></Route>
        <Route path='*' element={<Myerrorpage/>}></Route>
        <Route path='dashboard' element={<Mymainpage/>}></Route>
        <Route path='mobilerecharge' element={<Mymobilepage/>}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);