import React from 'react';

const CallToAction = () => {
  return (
    <section id="contact" className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
              <p className="mb-2"><strong>Dirección:</strong> Calle Falsa 123, Ciudad</p>
              <p className="mb-2"><strong>Teléfono:</strong> (123) 456-7890</p>
              <p className="mb-2"><strong>Email:</strong> info@droguesalud.com</p>
              <p className="mb-2"><strong>Horario:</strong> Lunes a Viernes 9am - 7pm</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Formulario de contacto</h3>
              <form>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Nombre" 
                    className="w-full px-4 py-2 rounded-lg text-gray-800" 
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 rounded-lg text-gray-800" 
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    placeholder="Mensaje" 
                    rows="4" 
                    className="w-full px-4 py-2 rounded-lg text-gray-800"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;


// DONE