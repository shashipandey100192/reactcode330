import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Mylogonpage() {
    const [statevariable, statefunction]=useState("kumar");

const myuser = (u)=>{
    console.log(u);
    statefunction(u.target.value);
}


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5'>
                    <div className='container-fluid bg-light p-5 shadow'>
                        <div className='row'>
                        <div className='col-12 text-center'>
                            <h3>Login Page</h3>
                        </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" value={statevariable} onInput={myuser}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                   <input type='button' value="login" className='btn btn-success'/>
                                   <Link to="registorpage" className="btn btn-default">Registor Now</Link>
                                   <Link to="homepage" className="btn btn-default">dashboard</Link>
                                {/* {statevariable==="login"? "yes" : statevariable} */}
                                {statevariable==="login"? <button className='btn btn-success'>mylogin</button> : statevariable==="registor" ? <button className='btn btn-primary'>Registor</button> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mylogonpage