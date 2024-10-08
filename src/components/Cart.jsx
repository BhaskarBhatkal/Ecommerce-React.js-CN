import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
    alert("Item removed from cart");
  };

  if (cartItems.length === 0) {
    return <p className="text-center text-2xl mt-10">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {/* If cart length is zero This msg will be shown */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, i) => (
            <li
              key={i}
              className="border border-[#104060] p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p>${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="text-red-500"
              >
                <AiFillDelete />
                {/* We are using react-icons for personalized buttons */}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
