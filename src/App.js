import React, { useState, useRef } from 'react';
import DrugstoreNavbar from './components/DrugstoreNavbar';
import DrugstoreHero from './components/DrugstoreHero';
import ProductCatalog from './components/ProductCatalog';
import OffersCarousel from './components/OffersCarousel';
import CallToAction from './components/CallToAction';
import DrugstoreFooter from './components/DrugstoreFooter';
import CartButton from './components/CartButton';
import CartPage from './components/CartPage';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  // Referencias para cada sección
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const offersRef = useRef(null);
  const contactRef = useRef(null);

  // Función genérica para hacer scroll
  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DrugstoreNavbar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToProducts={() => scrollToSection(productsRef)}
        scrollToOffers={() => scrollToSection(offersRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <main className="flex-grow">
        {showCart ? (
          <CartPage onClose={() => setShowCart(false)} />
        ) : (
          <>
            <div ref={homeRef}>
              <DrugstoreHero />
            </div>
            <div ref={productsRef}>
              <ProductCatalog />
            </div>
            <div ref={offersRef}>
              <OffersCarousel />
            </div>
            <div ref={contactRef}>
              <CallToAction />
            </div>
          </>
        )}
      </main>
      <DrugstoreFooter />
      {!showCart && <CartButton onClick={() => setShowCart(true)} />}
    </div>
  );
};

export default App;

// DONE