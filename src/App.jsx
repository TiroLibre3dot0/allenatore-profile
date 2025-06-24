import { useState } from 'react';

const QUADRANTS = [
  {
    id: 1,
    title: "Francesco Mascaro",
    subtitle: "UEFA A Coach & Data Analyst",
    description: "Allenatore & Professionista del calcio",
    image: "/IMG/img1.jpg",
    fixed: true,
    icons: [
      { href: "https://www.instagram.com/francesco_mascaro", img: "/IMG/Instagram_icon.png", alt: "Instagram" },
      { href: "https://www.linkedin.com/in/francesco-mascaro", img: "/IMG/LinkedIn_icon.svg.webp", alt: "LinkedIn" },
      { href: "https://www.transfermarkt.it/francesco-mascaro", img: "/IMG/transfermarkt-icon.png", alt: "Transfermarkt" },
      { href: "https://www.tirolibre.it/francesco-mascaro", img: "/IMG/tirolibre-icon.png", alt: "Tirolibre" },
    ],
  },
  {
    id: 2,
    title: "Profilo",
    subtitle: "Chi sono",
    description: "Una panoramica della mia identità professionale.",
    image: "/IMG/img2.jpg",
    color: "bg-purple-800/80",
  },
  {
    id: 3,
    title: "Carriera",
    subtitle: "Esperienze e club",
    description: "I percorsi sportivi che mi hanno formato.",
    image: "/IMG/img3.jpg",
    color: "bg-pink-800/80",
  },
  {
    id: 4,
    title: "Obiettivi",
    subtitle: "La mia visione",
    description: "Cosa cerco in un progetto calcistico.",
    image: "/IMG/img4.jpg",
    color: "bg-red-800/80",
  },
  {
    id: 5,
    title: "Competenze",
    subtitle: "Tecniche e trasversali",
    description: "Le abilità che porto in campo e fuori.",
    image: "/IMG/img5.jpg",
    color: "bg-yellow-700/80",
  },
  {
    id: 6,
    title: "Contatti",
    subtitle: "Parliamone",
    description: "Apri un canale diretto con me.",
    image: "/IMG/img6.jpg",
    color: "bg-green-800/80",
  },
  {
    id: 7,
    title: "Gallery",
    subtitle: "Immagini e momenti",
    description: "Un racconto visivo del mio percorso.",
    image: "/IMG/img7.jpg",
    color: "bg-teal-800/80",
  },
  {
    id: 8,
    title: "Referenze",
    subtitle: "Parlano di me",
    description: "Valutazioni di chi ha lavorato con me.",
    image: "/IMG/img8.jpg",
    color: "bg-indigo-800/80",
  },
];

function App() {
  const [hoveredId, setHoveredId] = useState(1);
  const hoveredQuadrant = QUADRANTS.find(q => q.id === hoveredId);

  return (
    <div
      className="h-screen w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-8 sm:grid-rows-4 lg:grid-rows-2 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${hoveredQuadrant.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.4s ease-in-out",
      }}
    >
      {QUADRANTS.map((q) => (
        <section
          key={q.id}
          onMouseEnter={() => setHoveredId(q.id)}
          className={`border border-white/30 p-4 relative text-white z-10 
            transition-all duration-300 overflow-hidden
            ${q.fixed ? "" : hoveredId === q.id ? q.color : "bg-transparent"}`}
        >
          {q.fixed ? (
            <div className="flex flex-col h-full justify-between p-2 sm:p-4 lg:p-6">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">{q.title}</h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-1">{q.subtitle}</h2>
              </div>
              <div className="mt-4">
                <p className="text-base italic text-white/90">«{q.description}»</p>
                <a
                  href="#contatti"
                  className="inline-block mt-4 px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-sm sm:text-base font-semibold text-white shadow-md"
                >
                  Contattami
                </a>
              </div>
              <div className="flex gap-3 mt-4 flex-wrap">
                {q.icons.map((icon, i) => (
                  <a key={i} href={icon.href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={icon.img}
                      alt={icon.alt}
                      className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform"
                    />
                  </a>
                ))}
              </div>
            </div>
          ) : hoveredId === q.id ? (
            <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8 lg:p-10 text-left text-white/90 animate-fadeIn">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold drop-shadow">{q.title}</h2>
              <p className="mt-4 sm:mt-6 max-w-md text-base sm:text-lg leading-relaxed">{q.description}</p>
              <a
                href="#"
                className="mt-6 sm:mt-8 text-base sm:text-lg underline underline-offset-4 decoration-white hover:decoration-2 transition-all"
              >
                Scopri la sezione
              </a>
            </div>
          ) : (
            <div className="absolute bottom-3 right-4 text-base sm:text-lg lg:text-xl font-normal opacity-70 drop-shadow-sm">
              {q.title}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export default App;
