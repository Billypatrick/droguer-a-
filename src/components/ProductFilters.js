import React, { useState } from 'react';

const ProductFilters = ({ products, onFilter }) => {
  const categories = [
    { id: 'all', name: 'Todos los productos' },
    { id: 'medicamentos', name: 'Medicamentos' },
    { id: 'higiene', name: 'Higiene personal' },
    { id: 'vitaminas', name: 'Vitaminas' },
    { id: 'bebe', name: 'Cuidado del bebé' },
    { id: 'piel', name: 'Cuidado de la piel' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    filterProducts(categoryId, searchTerm);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterProducts(activeCategory, term);
  };

  const filterProducts = (category, term) => {
    let filtered = [...products];
    
    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }
    
    if (term) {
      const normalizedTerm = term.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(normalizedTerm) || 
        p.description.toLowerCase().includes(normalizedTerm)
      );
    }
    
    onFilter(filtered);
  };

  return (
    <div className="mb-8">
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === category.id 
                ? 'bg-[#3B82F6] text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;