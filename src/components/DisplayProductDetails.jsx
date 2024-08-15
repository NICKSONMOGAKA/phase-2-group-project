import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DisplayProductDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = () => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setDetails(data));
    };
    fetchDetails();
  }, [id]);

  const handlePurchaseClick = () => {
    navigate('/purchase');
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div>
      <p>Title: {details.title}</p>
      <p>Price: {details.price}</p>
      <p>Description: {details.description}</p>
      <p>Category: {details.category}</p>
      <img src={details.image} alt="product image"></img>
      <button onClick={handlePurchaseClick}>Go to purchase</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default DisplayProductDetails;
