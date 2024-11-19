import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Detailspage() {
    const {id} =useParams();

    const [product, myproductlist] = useState({});
    const myapi = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((d) => {
            console.log(d.data);
            myproductlist(d.data)
        })
    }
    useEffect(() => {
        myapi();
    }, []);


  return (
    <div className='container-fluid'>
        <div className='row p-5'>
            <div className='col-md-8'>
                <h2>Product Details Page</h2>
                <h1>Product Id : {product.id}</h1>
                <h3>Title : {product.title}</h3>
                <h1>Product Price : {product.price}</h1>
                <h4> Product category : {product.category}</h4>
                <p>Description: {product.description}</p>
                
            </div>
            <div className='col-md-4'>
                <img src={product.image} alt="" className='img-fluid'/>
            </div>
        </div>
    </div>
  )
}

export default Detailspage