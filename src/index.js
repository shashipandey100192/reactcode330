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
import Mobilehomepage from './modules/mobile/Mobilehomepage';
import Mobilerecharge from './modules/mobile/components/Mobilerecharge';
import Mobilenewpage from './modules/mobile/components/Mobilenewpage';
import Mobileexchange from './modules/mobile/components/Mobileexchange';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Mylogonpage/>}></Route>
        <Route path='registorpage' element={<Myregistorpage/>}></Route>
        <Route path='*' element={<Myerrorpage/>}></Route>
        <Route path='homepage' element={<Welcomepage/>}></Route>
        <Route path='mobilerecharge' element={<Mymobilepage/>}>
            <Route path='' element={<Mobilehomepage/>}/>
            <Route path='recharge' element={<Mobilerecharge/>}/>
            <Route path='newmobile' element={<Mobilenewpage/>}/>
            <Route path='exchange' element={<Mobileexchange/>}/>
            <Route path='*' element={<Myerrorpage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);