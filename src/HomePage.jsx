import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

function HomePage() {
  return (
    <>
      <header className="header">
        <h1>Welcome to ShopEase</h1>
        <nav className="navbar">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>
      <section className="hero">
        <h2>Discover Our Product</h2>
        <p>Explore our wide range of products and find your favorite brands.</p>
        <a href="#products" className="cta-button">Shop Now</a>
      </section>
      <section className="products" id="products">
        <h2>Our Products</h2>
        <div className="product-list">
          <div className="product">
            <img src="images/chocolate1.png" alt="Chocolate 1" />
            <h3>Delicious Chocolate</h3>
            <p>$5.00</p>
            <a href="#" className="buy-now">Buy Now</a>
          </div>
          <div className="product">
            <img src="images/chocolate2.png" alt="Chocolate 2" />
            <h3>Yummy Chocolate</h3>
            <p>$5.00</p>
            <a href="#" className="buy-now">Buy Now</a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 ShopEase. All rights reserved.</p>
      </footer>
    </>
  );
}

export default HomePage;
