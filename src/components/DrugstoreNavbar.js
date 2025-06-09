import React, { useState, useRef, useEffect } from 'react';

const DrugstoreNavbar = ({
  scrollToHome,
  scrollToProducts,
  scrollToOffers,
  scrollToContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef();

  // Manejo de click fuera del menú
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#1E3A8A] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo que lleva al inicio */}
          <div 
            onClick={scrollToHome}
            className="cursor-pointer"
          >
            <img 
              src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0JH9AAUipYIkKhaEN0eCX7zGogwrU3sn8TcHm" 
              alt="Logo" 
              className="h-12 w-auto"
              loading="lazy"
            />
          </div>

          {/* Menú mobile */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white md:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white md:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={scrollToHome}
              className="text-white hover:text-blue-200"
            >
              Inicio
            </button>
            <button 
              onClick={scrollToProducts}
              className="text-white hover:text-blue-200"
            >
              Productos
            </button>
            <button 
              onClick={scrollToOffers}
              className="text-white hover:text-blue-200"
            >
              Ofertas
            </button>
            <button 
              onClick={scrollToContact}
              className="text-white hover:text-blue-200"
            >
              Contacto
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {mobileMenuOpen && (
          <div ref={menuRef} className="md:hidden mt-3 py-2 bg-white rounded-lg shadow-lg">
            <button 
              onClick={() => {
                scrollToHome();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50"
            >
              Inicio
            </button>
            <button 
              onClick={() => {
                scrollToProducts();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50"
            >
              Productos
            </button>
            <button 
              onClick={() => {
                scrollToOffers();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50"
            >
              Ofertas
            </button>
            <button 
              onClick={() => {
                scrollToContact();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DrugstoreNavbar;


// DONE