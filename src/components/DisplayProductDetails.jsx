import React, { useState } from 'react'

const DisplayProductDetails = () => {
    const [details, setDetails]=useState([])

    const displayDetails=()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    }
  return (
    <div>
      <button onClick={displayDetails}>Display Product Details</button>  
      <p>Title: {details.title}</p>
      <p>Price: {details.price}</p>
      <p>Description: {details.description}</p>
      <p>Category: {details.category}</p>
      <img src={details.image} alt="product image"></img>
      <button>Go to purchase</button>
    </div>
  )
}

export default DisplayProductDetails