// Importamos la imagen y le ponemos un nombre (imagenStream)
import imagenStream from './assets/Pagina-Propaganda.jpeg';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white font-sans">
      
      {/* Fondo animado global (Los círculos de colores) */}
      <div className="fixed top-20 left-20 w-96 h-96 bg-purple-600/30 rounded-full filter blur-[100px] -z-10"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-cyan-600/30 rounded-full filter blur-[100px] -z-10"></div>

      {/* Contenedor principal centrado */}
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-24">
        
        {/* 1. HERO SECTION */}
        <section className="flex flex-col items-start justify-center min-h-[70vh]">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Hola, soy Santino.
            </h1>
            <h2 className="text-xl md:text-2xl text-cyan-400 mb-6">
              Estudiante De Ingenieria En Sistemas De La Informacion
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Me apasiona abordar y resolver desafíos complejos mediante un análisis riguroso y una mentalidad orientada al aprendizaje continuo. Mi mayor diferencial es una disciplina inquebrantable y una constancia que me permiten enfrentar y solucionar cualquier problema que se me presente, garantizando resultados sólidos y una evolución constante en cada proyecto.
            </p>
          </div>
        </section>

        {/* 2. TECH STACK */}
        <section>
          <div className="mb-8 border-b border-white/20 pb-4">
            <h3 className="text-3xl font-semibold mb-2">Mi Stack Tecnológico</h3>
            <p className="text-gray-400">
              Combino estas herramientas con una gran disciplina y constancia, lo que me permite debugear y solucionar cualquier problema que se me presente en el código.
            </p>
          </div>

          {/* Grilla de píldoras */}
          <div className="flex flex-wrap gap-4">
            {/* Array con tus tecnologías (podés agregar o sacar las que quieras) */}
            {['React', 'Python', 'Vite', 'Tailwind CSS', 'GitHub', 'MySQL', 'HTML', 'CSS' ].map((tech) => (
              <div 
                key={tech} 
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-200 font-medium hover:bg-white/10 hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* 3. PROYECTOS */}
        <section>
          <div className="mb-8 border-b border-white/20 pb-4">
            <h3 className="text-3xl font-semibold mb-2">Proyectos Destacados</h3>
            <p className="text-gray-400">
              Una selección de mis desarrollos más recientes, donde aplico todo mi stack.
            </p>
          </div>

          {/* Grilla de tarjetas (1 columna en celu, 2 en pantallas grandes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Tarjeta: Web del Stream */}
            <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-purple-500/50 transition-colors duration-300 shadow-xl">
              
              {/* Espacio para la imagen (Placeholder) */}
              <div className="h-48 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center relative overflow-hidden border-b border-white/10">
                 {/* Este texto hace un zoom suave cuando pasas el mouse por la tarjeta */}
                <span className="text-gray-400 font-medium group-hover:scale-110 transition-transform duration-500">
                  {/* Imagen real del proyecto */}
              <div className="h-48 relative overflow-hidden border-b border-white/10">
                <img 
                    src={imagenStream} 
                    alt="Captura de pantalla de la plataforma de streaming" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
                </span>
              </div>
              
              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">Plataforma de Propaganda</h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Diseño y desarrollo de una página web interactiva para mi canal. Implementé una interfaz optimizada, fluida y moderna para mejorar la interacción con el usuario.
                </p>
                
                {/* Píldoras mini para las tecnologías de ESTE proyecto */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">React</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">Vite</span>
                </div>
                
                {/* Botones de acción */}
                <div className="flex gap-4">
                  <a href="https://github.com/SantinoRojo/Pagina-de-Stream" target="_blank" rel="noopener noreferrer"className="flex-1 text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium">
                    Ver Código
                  </a>
                  {/* Botón con efecto neón/brillo */}
                  <a href="#" className="flex-1 text-center py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition-colors text-sm font-medium text-white shadow-[0_0_15px_rgba(8,145,178,0.4)] hover:shadow-[0_0_20px_rgba(8,145,178,0.6)]">
                    Visitar Web
                  </a>
                </div>
              </div>
            </div>

            {/* Acá podés copiar y pegar toda la estructura de la tarjeta de arriba para agregar tu segundo proyecto */}
            
          </div>
        </section>

      </div>
    </div>
  )
}

export default App
