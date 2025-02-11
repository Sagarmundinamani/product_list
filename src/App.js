// src/App.js
import React from 'react';
import ProductCard from './ProductCard';
import './App.css';


function App() {
  const products = [
    {
      name: 'Wireless Headphones',
      price: 99.99,
      description: 'High-quality wireless headphones with noise cancellation and long battery life.',
    },
    {
      name: 'Smartwatch',
      price: 149.99,
      description: 'Track your fitness, receive notifications, and monitor your health with this smartwatch.',
    },
    {
      name: 'Portable Charger',
      price: 19.99,
      description: 'Compact and powerful portable charger with fast charging capability.',
    },
  ];

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
