import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <h3 className="logo">Myk's Bikes</h3>
      <Link to="/" className="link">
        Bikes
      </Link>
      <Link to="/shoppingCart" className="link">
        Shopping cart
      </Link>
    </div>
  );
};

export default Nav;
