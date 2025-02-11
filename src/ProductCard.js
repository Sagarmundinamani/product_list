// src/ProductCard.js
import React from 'react';
import './ProductCard.css'; // For optional styling

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductCard;
