import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PurchaseItem = ({ id }) => {
  const [product, setProduct] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = () => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching product details:", error));
    };
    fetchDetails();
  }, [id]);

  const handlePurchase = (e) => {
    e.preventDefault();
    setMessage("You have purchased this item");
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div>
      <p>Product: {product.title}</p>
      <img src={product.image} alt="product" />
      <p>Price: ${product.price}</p>
      {message && <p>{message}</p>}
      <button onClick={handlePurchase}>Purchase</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default PurchaseItem