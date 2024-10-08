import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  // It will the status of cart such as length
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="bg-[#253d52] p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl font-semibold hover:text-[lavender]">
          E-commerce
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white font-semibold hover:text-cyan-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-white font-semibold hover:text-cyan-200"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-white font-semibold hover:text-cyan-200"
            >
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
