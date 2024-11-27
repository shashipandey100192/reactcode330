import React from 'react'
import { useForm } from "react-hook-form";
const mydata=[];
function Myregistorpage() {
    const { register, handleSubmit,formState: { errors }} = useForm();
    
    const mysubmit = (d)=>{
        console.log(d);
        mydata.push(d);
        console.log(mydata);
        localStorage.setItem("formdata",JSON.stringify(mydata));
    }

    return (
        <form onSubmit={handleSubmit(mysubmit)}>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5'>
                    <div className='container-fluid bg-light p-5 shadow'>
                        <div className='row'>
                        <div className='col-12 text-center'>
                            <h3>User Registor</h3>
                        </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" {...register("email",{required:true,minLength:5})}/>
                                   {errors.email && <p className='text-danger'>email id is required</p> }
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">FullName</label>
                                    <input type="text" className="form-control" {...register("name",{required:true})}/>
                                    {errors.name && <p className='text-danger'>fullname is required</p> }
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Phone No</label>
                                    <input type="text" className="form-control" {...register("phone",{required:true,pattern:/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g})}/>
                                    {errors.phone && <p className='text-danger'>password is required</p> }
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" {...register("pass",{required:true,minLength:5,maxLength:10})}/>
                                    {errors.pass?.type==="required" && <p className='text-danger'>password is required</p> }
                                    {errors.pass?.type==="minLength" && <p className='text-warning'>password is week</p> }
                                    {errors.pass?.type==="maxLength" && <p className='text-success'>password is strong /good</p> }
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                   <input type='submit' value="Registor Now" className='btn btn-success'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
  
}

export default Myregistorpage