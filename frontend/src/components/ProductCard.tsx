import React from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
      <figure className="overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-sm line-clamp-2">{product.description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <div className="space-x-2">
            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="btn btn-ghost btn-sm"
            >
              View
            </button>
            <button
              onClick={() => onAddToCart(product)}
              className="btn btn-primary btn-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;