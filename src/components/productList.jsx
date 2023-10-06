import React from 'react';
import bikeData from './bikeData.jsx';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (bike) => {
    dispatch(addItemToCart(bike));
  };

  return (
    <>
      <h1 className="product-title">Myk's Bikes</h1>
      <div className="bike-page">
        {bikeData.map((bike) => (
          <div className="bike-card" key={bike.id}>
            <h3>{bike.name}</h3>
            <img src={bike.image} alt={bike.name} />
            <p>{bike.description}</p>
            <p>{bike.price}</p>
            <button onClick={() => handleAddToCart(bike)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
