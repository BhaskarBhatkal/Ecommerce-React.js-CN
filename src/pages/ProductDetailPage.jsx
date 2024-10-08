import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../redux/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/BhaskarBhatkal/Ecom-demo/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("Error fetching product details");
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      alert("Product added to cart");
    }
  };

  if (loading) {
    return <p className="text-center text-2xl mt-10">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center text-2xl mt-10">Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
        <div className="lg:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-auto rounded-lg shadow"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-500 text-lg mb-4">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
          >
            Add to Cart <AiOutlineShoppingCart className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
