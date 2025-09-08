const Hero = () => {
  return (
    <section className="bg-red-400 relative h-screen flex items-center justify-center text-white">
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a Mi Sitio</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">Soluciones digitales para tu negocio.</p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-lg font-medium">
          Empezar ahora
        </button>
      </div>
    </section>
  );
};

export default Hero;
