import { useEffect, useRef, useState } from "react"; 

type Props = {
  photos: string[];
};

export default function CustomGallery({ photos }: Props) {
  const pcCarouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null); // Agregado para móviles
  const [scrollAmount, setScrollAmount] = useState(0);

  // Calcular ancho dinámico al cargar y redimensionar
  useEffect(() => {
    function updateScrollAmount() {
      if (pcCarouselRef.current) {
        const containerWidth = pcCarouselRef.current.clientWidth;
        setScrollAmount(containerWidth / 2); // El ancho para desplazar es la mitad del contenedor
      }
    }

    updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);

    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  // Desplazamiento automático para escritorio
  useEffect(() => {
    const interval = setInterval(() => {
      if (pcCarouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = pcCarouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          pcCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          pcCarouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollAmount]);

  // Función para desplazarse a la derecha (Móviles)
  function scrollMobileCarousel() {
    if (mobileCarouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = mobileCarouselRef.current;

      if (scrollLeft + clientWidth >= scrollWidth) {
        // Si llega al final, vuelve al inicio
        mobileCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Desplaza una imagen (ancho del contenedor)
        mobileCarouselRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }
  }

  // Efecto para movimiento automático (Móviles)
  useEffect(() => {
    const mobileInterval = setInterval(scrollMobileCarousel, 3000); // Cada 3 segundos
    return () => clearInterval(mobileInterval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="relative bg-gray-200 overflow-hidden">
      {/* Galería de escritorio */}
      <div
        className="hidden md:flex overflow-hidden no-scrollbar"
        ref={pcCarouselRef}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`gallery-${index}`}
            className="object-cover flex-shrink-0"
            style={{
              width: "50%", // Cada imagen ocupa exactamente la mitad del contenedor
              height: "35rem", // Altura fija para mantener proporciones
            }}
          />
        ))}
      </div>

      {/* Galería de móviles */}
      <div className="md:hidden">
        <div className="flex overflow-hidden no-scrollbar" ref={mobileCarouselRef}>
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`mobile-gallery-${index}`}
              className="object-cover flex-shrink-0"
              style={{
                width: "100%", // Ocupa todo el ancho de la pantalla
                height: "18rem",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
