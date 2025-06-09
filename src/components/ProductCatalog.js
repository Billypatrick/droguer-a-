import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';

const ProductCatalog = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Paracetamol 500mg',
      description: 'Analgésico y antipirético',
      price: 5.99,
      category: 'medicamentos',
      image: '/images/paracetamol.jpg',
      stock: 10
    },
    {
      id: 2,
      name: 'Jabón Antibacterial',
      description: 'Limpieza profunda para manos',
      price: 3.49,
      category: 'higiene',
      image: '/images/jabon.jpg',
      stock: 15
    }
    // ... agregar más productos según categorías
  ]);

  const [filteredProducts, setFilteredProducts] = useState([...products]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Productos</h2>
        
        <ProductFilters 
          products={products} 
          onFilter={setFilteredProducts} 
        />

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron productos con los filtros seleccionados
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;