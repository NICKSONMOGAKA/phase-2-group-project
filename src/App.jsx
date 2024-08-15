import "./App.css";
import CategoryPage from "./components/Category/CategoryPage";
import React, { useState } from "react";
import DisplayProductDetails from "./components/DisplayProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PurchaseItem from "./components/PurchaseItem";

function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const displayDetails = (id) => {
    setSelectedProductId(id);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryPage displayDetails={displayDetails} />} />
        <Route path="/product-details/:id" element={<DisplayProductDetails id={selectedProductId}/>} />
        <Route path="/purchase" element={<PurchaseItem id={selectedProductId}/>} />
      </Routes>
    </Router>
  );
}

export default App;
