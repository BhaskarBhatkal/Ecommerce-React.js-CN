import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice";
import {
  AiFillEdit,
  AiFillDelete,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductCard = ({ product, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    dispatch(editProduct({ id: product.id, updatedProduct }));
    setIsEditing(false);
    alert("Product updated successfully");
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Product added to cart");
  };

  return (
    <div className="border border-[#0a2f48] p-4 rounded-lg shadow">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedProduct.title}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, title: e.target.value })
            }
            className="border p-2 w-full mb-2"
          />
          <input
            type="number"
            value={updatedProduct.price}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, price: e.target.value })
            }
            className="border p-2 w-full mb-2"
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <Link to={`/products/${product.id}`}>
            {/* When we click one perticular product it will take us to that product */}
            <h2 className="text-xl font-bold">{product.title}</h2>
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
          </Link>
          <p className="text-[#ffffff]">${product.price}</p>
          <div className="mt-4 flex justify-between items-center">
            <button onClick={handleEdit} className="text-blue-500">
              <AiFillEdit />
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="text-red-500"
            >
              <AiFillDelete />
            </button>
            <button onClick={handleAddToCart} className="text-green-500">
              <AiOutlineShoppingCart />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
