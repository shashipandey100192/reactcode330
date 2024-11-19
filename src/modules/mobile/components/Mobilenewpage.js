import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Mobilenewpage() {
    const [product, myproductlist] = useState([]);
    const myapi = () => {
        axios.get('https://fakestoreapi.com/products').then((d) => {
            console.log(d.data);
            myproductlist(d.data)
        })
    }
    useEffect(() => {
        myapi();
    }, []);


    return (
        <div className='container-fluid'>
            <div className='row'>
                {product.map((d) => {
                    return (
                        <div className='col-md-4 mt-3'>

                           <img src={d.image} alt='sdkfj' width="100%" height="200"/>
                           <h2>Price: {d.price}</h2>
                           <Link to={"detailspage/"+d.id} className='btn btn-success'>Details</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Mobilenewpage