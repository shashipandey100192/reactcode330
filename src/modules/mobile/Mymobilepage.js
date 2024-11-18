import React from 'react'
import Mobileheader from './Mobileheader'
import Mobilesidebar from './Mobilesidebar'
import Mobilehomepage from './Mobilehomepage'
import Mobilefooter from './Mobilefooter'
import { Outlet } from 'react-router-dom'

function Mymobilepage() {
  return (
    <div className='container-fluid'>
        <div className='row fixed-top'>
            <div className='col-12'>
                <Mobileheader/>
            </div>
        </div>
        <div className='row cus-h'>
          <div className='col-md-2 bg-warning'>
           <Mobilesidebar/>
          </div>
          <div className='col-md-10 bg-info'>
           <Outlet></Outlet>
          </div>
          
        </div>
        <div className='row'>
            <div className='col-12 bg-danger'>
              <Mobilefooter/>
            </div>
        </div>
    </div>
  )
}

export default Mymobilepage