import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "./global.css";
import XYz,{One,Tow} from './About';
import Mycontact from './Mycontactus.ts';
import Myfunc from './Myjsxfile.jsx';
import Page from './Page.js';
import Mymuipage from './Mymuipage.js';
import Mycharts from './Mycharts.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <XYz></XYz>
   <One></One>
   <Tow/>
  <Mycontact/>
  <Myfunc></Myfunc>
  <Page></Page>
  <Mymuipage></Mymuipage>
  <Mycharts/>

  </React.StrictMode>
);