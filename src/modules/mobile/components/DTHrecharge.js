import React, { Fragment } from 'react'
import Ariterecharge from './Ariterecharge'

function DTHrecharge(props) {
  return (


    <Fragment>
    <div className='card bg-danger border p-3'>DTHrecharge
        <h3>{props.mprice}</h3>
        <h3>{props.dprice}</h3>
    <Ariterecharge cprice={props.mprice}></Ariterecharge>

    </div>
    
    </Fragment>
  )
}

export default DTHrecharge