import React, { useState, useEffect } from 'react';

const OffersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const offers = [
    {
      id: 1,
      title: '2x1 en Vitaminas',
      description: 'Lleva dos frascos de vitamina D al precio de uno',
      image: '/images/vitaminas-d.png'
    },
    {
      id: 2,
      title: '30% de descuento',
      description: 'En toda la línea de cuidado de la piel',
      image: '/images/cuidado-piel.png'
    },
    {
      id: 3,
      title: 'Paquete familiar',
      description: 'Kit completo de medicamentos básicos con 15% off',
      image: '/images/paquete-familiar.png'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ofertas Destacadas</h2>
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <div className="relative h-64 md:h-96">
            {offers.map((offer, index) => (
              <div 
                key={offer.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white p-6 max-w-2xl">
                    <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-xl mb-4">{offer.description}</p>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Ver Oferta
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-white'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersCarousel;