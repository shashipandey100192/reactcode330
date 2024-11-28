import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Mylogonpage() {
    const mynav = useNavigate();
    const [statevariable, statefunction]=useState("kumar");
    const [userform,setuser]=useState({
        username:"",
        pass:""
    }) 

const myuser = (u)=>{
    console.log(u);
    statefunction(u.target.value);
}
const mylogin = ()=>{
    // toast.success("loser user",{position: "top-left",theme: "dark",autoClose: 1000});
    if(userform.username==="ravi" && userform.pass==="1234")
    {
        toast.success("loser user",{position: "top-left",theme: "dark",autoClose: 1000});
       setTimeout(()=>{
            mynav("/homepage");
       },1000)
        
    }
    else
    {
        toast.warning("error messaage",{position: "top-left",theme: "dark",autoClose: 1000});
    }
}

const updatefnc = (ele)=>{
    const {name,value} = ele.target;
        setuser((a)=>{
          return{
            ...a,
            [name]:value
          }
        })
}

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5'>
                    <div className='container-fluid bg-light p-5 shadow'>
                        <div className='row'>
                        <div className='col-12 text-center'>
                            <h3>Login Page</h3>
                            <ToastContainer></ToastContainer>
                        </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    {/* <input type="email" class="form-control" value={statevariable} onInput={myuser}/> */}
                                    <input type="email" class="form-control" value={userform.username} name='username' onChange={updatefnc}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" value={userform.pass} name='pass' onChange={updatefnc}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                   <input type='button' value="login" className='btn btn-success' onClick={mylogin}/>
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