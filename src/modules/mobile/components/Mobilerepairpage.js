import React from 'react'
import { increment,decrement } from '../../mystore/Myreduxfunc';
import { useSelector,useDispatch } from 'react-redux';


function Mobilerepairpage() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Mobilerepairpage</h1>
        <button type='button' className='btn btn-success' onClick={()=>{dispatch(increment())}}>increment func</button>
            <h1>{count}</h1>
        <button type='button' className='btn btn-success' onClick={()=>{dispatch(decrement())}}>decrement func</button>



    </div>



  )
}

export default Mobilerepairpage