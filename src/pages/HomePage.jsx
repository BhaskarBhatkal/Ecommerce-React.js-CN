import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto text-center p-10">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Our E-Commerce Store!
      </h1>
      <Link
        to="/products"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default HomePage;
