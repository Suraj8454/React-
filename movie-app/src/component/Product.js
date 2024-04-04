import React from 'react'
import { NavLink } from 'react-router-dom';
import Formatprice from '../helper/Formatprice';
import "./feauterproduct.css"

function Product(currentitem) {
    const {id,name,image,price,category}=currentitem;
  return (
    <div className='product'>
      <div className='product-container'>
      <NavLink to={`/singledetail/${id}`}>
        <img src={image} height="400px" width="600px"/>
        {/* <div className='divide'>
        <p>{<Formatprice price={price}/>}</p>
        </div> */}
        <h1>{name}</h1>
      </NavLink>
      </div>
    </div>
  )
}

export default Product
