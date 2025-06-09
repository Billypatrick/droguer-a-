import React from 'react';

const DrugstoreFooter = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0JH9AAUipYIkKhaEN0eCX7zGogwrU3sn8TcHm" 
                alt="Logo Droguería" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Tu salud es nuestra prioridad. Ofrecemos productos farmacéuticos de calidad con atención personalizada.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Calle Falsa 123, Ciudad</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Email: info@droguesalud.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes a Viernes: 8:00 - 20:00</li>
              <li>Sábados: 9:00 - 14:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2023 Droguería Farmacéutica. Todos los derechos reservados.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-white">Política de privacidad</a> | 
            <a href="#" className="hover:text-white ml-2">Términos de servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DrugstoreFooter;


// DONE