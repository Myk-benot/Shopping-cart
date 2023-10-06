import React from 'react';
import { useSelector } from 'react-redux';
import { removeItemFromCart } from '/src/features/cartSlice';
import { useDispatch } from 'react-redux';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (bikeId) => {
    dispatch(removeItemFromCart(bikeId));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, bike) => total + bike.price * bike.quantity,
      0
    );
  };

  return (
    <div>
      <h2 className="cart-title">Cart Items:</h2>
      <div className="cart-container">
        <ul className="list">
          {cartItems.map((bike) => (
            <li key={bike.id}>
              {bike.name}
              <img src={bike.image} alt="bike" />
              <p>Price per bike: {bike.price}</p>
              <p>Quantity: {bike.quantity}</p>
              <p>Total Price: {bike.price * bike.quantity}</p>
              <button onClick={() => handleRemoveItem(bike.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="cart-total">Total: {calculateTotal()}</h3>
    </div>
  );
};

export default ShoppingCart;
