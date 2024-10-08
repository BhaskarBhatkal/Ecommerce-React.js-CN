import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/BhaskarBhatkal/Ecom-demo/products"
        );
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        // For debugging purpose
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSort = () => {
    setSortOrder((prevOrder) =>
      prevOrder === "High-Low" ? "Low-High" : "High-Low"
    );
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "High-Low") {
      return a.price - b.price;
    } else if (sortOrder === "Low-High") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button
        onClick={handleSort}
        className="bg-green-500 text-white px-4 py-2 mb-4"
      >
        {sortOrder ? `Price ${sortOrder}` : "Price"}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
