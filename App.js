// App.js
import React from 'react';
import Product from './components/Product';
import products from '../assets/products.json';

const App = () => {
  return (
    <div className="App">
      <h1>Videogames E-Commerce</h1>
      <div className="grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;