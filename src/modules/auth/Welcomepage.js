import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillDashboard } from "react-icons/ai";

function Welcomepage() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 mt-5 text-center'>
                    <h4>List of Application</h4>
                </div>
                <div className='col-md-3 mt-3 text-center'>
                    <div className="card bg-warning shadow">
                        <Link to="/dashboard">
                        <div className="card-body">
                            <h1><AiFillDashboard/></h1>
                            <h5 className="card-title">Dashboard</h5>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 mt-3'>
                    <div className="card bg-warning">
                        <Link to="/billrecharge">
                        <div className="card-body">
                            <h5 className="card-title">Bill Recharge</h5>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 mt-3'>
                    <div className="card bg-warning">
                        <Link to="/mobilerecharge">
                        <div className="card-body">
                            <h5 className="card-title">Mobile Recharge</h5>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 mt-3'>
                    <div className="card bg-warning">
                        <Link to="/traval">
                        <div className="card-body">
                            <h5 className="card-title">Traval</h5>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 mt-3'>
                    <div className="card bg-warning">
                        <Link to="/product">
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcomepage