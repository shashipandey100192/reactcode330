import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { myjsonata } from '../../Myjsondata';

function Myproduct() {
    const [mydata, setdata] = useState([]);
    const apicall = () => {
        axios.get("https://dummyjson.com/products").then((p) => {
            console.log(p);
            setdata(p.data.products);
        })
    }
    useEffect(() => {
        apicall();
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                {mydata.map((d) => {
                    return (
                        <div className='col-md-3 mt-3'>
                            <div className='card shadow p-3'>
                                <h1>id:{d.id}</h1>
                                <h4>{d.title}</h4>
                                <p>{d.description}</p>
                                <p>{d.warrantyInformation}</p>
                                <h5>{d.returnPolicy}</h5>
                                <img src={d.images[0]}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Myproduct