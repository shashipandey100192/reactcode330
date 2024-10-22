import React from 'react';
import ReactDOM from 'react-dom/client';
import XYz,{One,Tow} from './About';
import Mycontact from './Mycontactus.ts';
import Myfunc from './Myjsxfile.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <XYz></XYz>
   <One></One>
   <Tow/>
  <Mycontact/>
  <Myfunc></Myfunc>

  </React.StrictMode>
);