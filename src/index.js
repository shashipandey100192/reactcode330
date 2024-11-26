import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./global.css";
import { lazy,Suspense } from 'react';
import Welcomepage from './modules/auth/Welcomepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myerrorpage from './modules/shares/Myerrorpage';
import Mymainpage from './modules/dashboard/Mymainpage';
import Mymobilepage from './modules/mobile/Mymobilepage';
import Mylogonpage from './modules/auth/Mylogonpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Mobilehomepage from './modules/mobile/Mobilehomepage';
import Mobilerecharge from './modules/mobile/components/Mobilerecharge';
// import Mobilenewpage from './modules/mobile/components/Mobilenewpage';
import Mobileexchange from './modules/mobile/components/Mobileexchange';
import Detailspage from './modules/mobile/components/Detailspage';
import { Provider } from 'react-redux';
import { mydatastore } from './modules/mystore/Datastore';
import Mobilerepairpage from './modules/mobile/components/Mobilerepairpage';

const Mobilenewpage = lazy(()=>import('./modules/mobile/components/Mobilenewpage'));




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={mydatastore}>
      <Routes>
        <Route path='' element={<Mylogonpage/>}></Route>
        <Route path='registorpage' element={<Myregistorpage/>}></Route>
        <Route path='*' element={<Myerrorpage/>}></Route>
        <Route path='homepage' element={<Welcomepage/>}></Route>
        <Route path='mobilerecharge' element={<Mymobilepage/>}>
            <Route path='' element={<Mobilehomepage/>}/>
            <Route path='repair' element={<Mobilerepairpage/>}/>
            <Route path='recharge' element={<Mobilerecharge/>}/>
            <Route path='newmobile' element={<Suspense fallback={<h1 className='myloader'>Loading...</h1>}>
              <Mobilenewpage/>
            </Suspense>}/>
            <Route path='exchange' element={<Mobileexchange/>}/>
            <Route path='newmobile/detailspage/:id' element={<Detailspage/>}/>  
            <Route path='*' element={<Myerrorpage/>}/>
        </Route>
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);