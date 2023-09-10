import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget({ itemCount }) {
  return (
    <div>
      <FaShoppingCart size={24} />
      <span className="badge badge-danger">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
