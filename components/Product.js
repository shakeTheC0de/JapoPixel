// components/Product.js
import React from 'react';
import styles from './Product.module.css';

const Product = ({ product }) => (
  <div key={product.id} className={styles.card}>
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <p>
      <button>Add to Cart</button>
    </p>
  </div>
);

export default Product;