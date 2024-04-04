import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/Productcontext';

const API = "https://api.pujakaitem.com/api/products";

const Singledetail = () => {
  const { id } = useParams()
  const { getSingleProduct, isSingleloading, soloProduct } = useProductContext();
  const {
    id: suraj, name, company, price, description, category, stock, stars, reviews
  } = soloProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [])

  if(isSingleloading){
    return <h1>loading</h1>
  }
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

export default Singledetail;
