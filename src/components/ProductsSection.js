import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Paracetamol 500mg',
      description: 'Alivia el dolor y reduce la fiebre',
      price: 5.99,
      image: 'https://via.placeholder.com/300',
      category: 'analgesico'
    },
    {
      id: 2,
      name: 'Ibuprofeno 400mg',
      description: 'Antiinflamatorio y analgésico',
      price: 7.50,
      image: 'https://via.placeholder.com/300',
      category: 'analgesico'
    },
    {
      id: 3,
      name: 'Omeprazol 20mg',
      description: 'Protector gástrico',
      price: 9.25,
      image: 'https://via.placeholder.com/300',
      category: 'gastrointestinal'
    },
    {
      id: 4,
      name: 'Vitamina C 1000mg',
      description: 'Refuerzo inmunológico',
      price: 12.99,
      image: 'https://via.placeholder.com/300',
      category: 'vitaminas'
    },
    {
      id: 5,
      name: 'Jarabe para la tos',
      description: 'Alivia la tos seca e irritativa',
      price: 8.75,
      image: 'https://via.placeholder.com/300',
      category: 'respiratorio'
    },
    {
      id: 6,
      name: 'Crema hidratante',
      description: 'Para pieles secas y sensibles',
      price: 6.50,
      image: 'https://via.placeholder.com/300',
      category: 'dermatologico'
    }
  ]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Productos</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;


// DONE