import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/productList';
import ShoppingCart from './components/shoppingCart';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
