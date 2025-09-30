// import { useEffect, useState } from 'react';

// const Hero = ({ heroImg, heroLabel }) => {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     // Espera a que la fuente Bebas Neue esté cargada antes de animar
//     document.fonts.load("1em 'Bebas Neue'").then(() => setAnimate(true));
//   }, []);

//   return (
//     <section className="relative h-screen flex items-end justify-center text-white">
//       {/* Imagen de fondo */}
//       <img
//         src={heroImg}
//         alt="Personas trabajando en equipo con laptops"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Overlay para contraste */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Contenido encima */}
//       <div className="relative z-10 text-center px-4">
//         <h1
//           className={`
//             text-9xl md:text-[300px] font-normal font-['Bebas_Neue'] uppercase md:-mb-8
//             leading-none
//             transition-all duration-1000 ease-out
//             ${animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}
//           `}
//         >
//           {heroLabel}
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useEffect, useState } from 'react';

// Clave para almacenar el estado en sessionStorage
const ANIMATION_KEY = 'heroAnimationPlayed';

const Hero = ({ heroImg, heroLabel }) => {
  // 1. Verificar si la animación ya se ha reproducido en la sesión
  const hasAnimationPlayed = sessionStorage.getItem(ANIMATION_KEY) === 'true';

  // 2. Usar el estado para controlar la animación.
  //    Si ya se reprodujo, se inicializa a 'true' para que el título aparezca inmediatamente.
  const [animate, setAnimate] = useState(hasAnimationPlayed);

  useEffect(() => {
    // Si la animación ya se reprodujo en esta sesión, no hacemos nada más.
    if (hasAnimationPlayed) {
      return;
    }

    // Si NO se ha reproducido:
    // 3. Esperar a que la fuente 'Bebas Neue' esté cargada.
    document.fonts.load("1em 'Bebas Neue'").then(() => {
      // 4. Activar la animación
      setAnimate(true);
      // 5. Marcar que la animación se ha reproducido en el sessionStorage
      //    para que no se ejecute en la próxima visita de esta sesión.
      sessionStorage.setItem(ANIMATION_KEY, 'true');
    });

    // Opcional: limpiar la clave si quieres que el efecto se haga una vez por *visita* // a la página, aunque el usuario navegue.
    // Esto es solo si *Hero* es la única cosa que usa esta clave.
    // return () => {
    //   sessionStorage.removeItem(ANIMATION_KEY);
    // };

    // Dependencias: el efecto solo se ejecuta al montar el componente (primera vez).
  }, [hasAnimationPlayed]);

  return (
    <section className="relative h-screen flex items-end justify-center text-white">
      {/* Imagen de fondo */}
      <img
        src={heroImg}
        alt="Personas trabajando en equipo con laptops"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido encima */}
      <div className="relative z-10 text-center px-4">
        <h1
          className={`
            text-8xl mb-2 md:text-[250px] font-normal font-['Bebas_Neue'] uppercase md:-mb-8
            leading-none
            transition-all duration-1000 ease-out
            ${animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}
          `}
        >
          {heroLabel}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
