import React, { Fragment } from 'react'
import DTHrecharge from './DTHrecharge'

function Mobilerecharge() {
  const mobilere = 1066;
  const dthre = 400;



  return (
    <Fragment>
    <div>Mobilerecharge 
      <ul>
        <li>mobile price: {mobilere}</li>
        <li>DTH price: {dthre}</li>
      </ul>

    </div>
    <DTHrecharge mprice={mobilere} dprice={dthre}></DTHrecharge>
    </Fragment>
  )
}

export default Mobilerecharge