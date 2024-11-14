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
import Mylogonpage from './modules/auth/Mylogonpage';
import Myregistorpage from './modules/auth/Myregistorpage';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Mylogonpage/>}></Route>
        <Route path='registorpage' element={<Myregistorpage/>}></Route>
        <Route path='*' element={<Myerrorpage/>}></Route>
        <Route path='homepage' element={<Welcomepage/>}></Route>
        <Route path='mobilerecharge' element={<Mymobilepage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);