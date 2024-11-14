import React from 'react'

function Myregistorpage() {

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5'>
                    <div className='container-fluid bg-light p-5 shadow'>
                        <div className='row'>
                        <div className='col-12 text-center'>
                            <h3>User Registor</h3>
                        </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">FullName</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Phone No</label>
                                    <input type="text" class="form-control" />
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
                                   <input type='button' value="Registor Now" className='btn btn-success'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  
}

export default Myregistorpage