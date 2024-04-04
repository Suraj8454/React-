// import React from 'react'
import { useProductContext } from '../context/Productcontext'
import Product from './Product';
import "./feauterproduct.css"

function Feauterproduct() {
    const{isLoading,featureProducts}=useProductContext();
    // console.log(featureProducts)

    if(isLoading){
        return <div>...loading</div>
    }
  return (
    <>
    <div className='feauturedproduct'>
        <h2>check out</h2>
        <h4>our feature service</h4>
        {featureProducts.map((currentitem)=>{
            return <Product key={currentitem.id} {...currentitem}/>;
        })}
    </div>
    </>
  )
}

export default Feauterproduct;
