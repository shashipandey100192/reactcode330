import React, { Fragment } from 'react'
import XYz,{One,Tow} from './About';
import Mycontact from './Mycontactus.ts';
import Myfunc from './Myjsxfile.jsx';
import Page from './Page.js';
import Mymuipage from './Mymuipage.js';
import Mycharts from './Mycharts.js';

function Myoldpage() {
  return (
    <Fragment>
        <XYz></XYz>
        <One></One>
        <Tow/>
    <Mycontact/>
    <Myfunc></Myfunc>
    <Page></Page>
    <Mymuipage></Mymuipage>
    <Mycharts/>
   </Fragment>
   
  )
}

export default Myoldpage