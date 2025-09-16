// const Hero = () => {
//   return (
//     <section className="relative h-screen flex items-end justify-center text-white">
//       {/* Imagen de fondo */}
//       <img
//         src="/hero-image.webp"
//         alt="Personas trabajando en equipo con laptops"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       {/* Overlay para contraste */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Contenido encima */}
//       <div className="relative z-10 text-center px-4">
//         <h1 className="text-9xl font-normal md:text-[300px] font-['Bebas_Neue'] uppercase md:-mb-8">Tecshop</h1>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useEffect, useState } from 'react';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Espera a que la fuente Bebas Neue esté cargada antes de animar
    document.fonts.load("1em 'Bebas Neue'").then(() => setAnimate(true));
  }, []);

  return (
    <section className="relative h-screen flex items-end justify-center text-white">
      {/* Imagen de fondo */}
      <img
        src="/hero-image.webp"
        alt="Personas trabajando en equipo con laptops"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido encima */}
      <div className="relative z-10 text-center px-4">
        <h1
          className={`
            text-9xl md:text-[300px] font-normal font-['Bebas_Neue'] uppercase md:-mb-8
            leading-none
            transition-all duration-1000 ease-out
            ${animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}
          `}
        >
          Tecshop
        </h1>
      </div>
    </section>
  );
};

export default Hero;
