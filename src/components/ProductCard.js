import React, { useState } from 'react';
import useCart from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
      <div className="h-40 bg-gray-50 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-900 text-sm line-clamp-2">{product.name}</h3>
        <p className="text-sm text-[#3B82F6] mb-1">{product.brand}</p>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="font-bold text-[#1E3A8A]">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className={`px-3 py-1 text-sm rounded bg-[#3B82F6] text-white hover:bg-[#1E3A8A] transition-colors`}
          >
            {added ? '¡Agregado!' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;