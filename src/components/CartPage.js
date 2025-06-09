import React, { useState } from 'react';

const CartPage = ({ onClose }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    const updatedItems = cartItems.map(item => 
      item.id === id ? {...item, quantity} : item
    );
    updateCart(updatedItems);
  };

  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    updateCart(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <button 
          onClick={onClose}
          className="flex items-center text-[#3B82F6] mb-6"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a productos
        </button>

        <h1 className="text-2xl font-bold text-[#1E3A8A] mb-8">Tu Carrito de Compras</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">Tu carrito está vacío</p>
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#1E3A8A] transition-colors"
            >
              Ver Productos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow mb-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-contain mr-4" />
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-[#3B82F6]">${item.price}</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l"
                          >
                            -
                          </button>
                          <span className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 ml-4"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-4">Resumen del Pedido</h2>
                <div className="space-y-3 mb-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-gray-600">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 bg-[#3B82F6] text-white rounded-lg hover:bg-[#1E3A8A] transition-colors">
                  Proceder al Pago
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;


// DONE