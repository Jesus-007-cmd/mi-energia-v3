import { useEffect, useRef } from 'react';

type Props = {
  photos: string[];
};

export default function CustomGallery(props: Props) {
  const { photos } = props;

  const scrollAmount = 1000; // Cantidad de desplazamiento
  const pcCarouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Función para desplazarse hacia la derecha
  function scrollRight(ref: React.RefObject<HTMLDivElement>) {
    if (ref.current) {
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  // Función para reiniciar el intervalo
  function assignInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      // Desplazamiento automático para ambas galerías
      validateCanScroll(pcCarouselRef);
      validateCanScroll(mobileCarouselRef);
    }, 3000); // Cada 3 segundos
  }

  // Validación de reinicio de la galería
  function validateCanScroll(ref: React.RefObject<HTMLDivElement>) {
    if (ref.current) {
      const { scrollWidth, clientWidth, scrollLeft } = ref.current;
      if (clientWidth + scrollLeft >= scrollWidth) {
        ref.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRight(ref);
      }
    }
  }

  useEffect(() => {
    assignInterval();
    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <div className="relative bg-gray-200 overflow-hidden">
      {/* Galería para computadoras */}
      <div className="hidden md:block">
        <div
          className="flex overflow-hidden scroll-snap-x scroll-snap-mandatory no-scrollbar"
          ref={pcCarouselRef}
        >
          {photos.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`gallery-${index}`}
              className="h-[35rem] w-[45rem] flex-shrink-0 scroll-snap-start object-cover"
            />
          ))}
        </div>
      </div>

      {/* Galería para móviles */}
      <div className="md:hidden">
        <div
          className="flex overflow-hidden no-scrollbar"
          ref={mobileCarouselRef}
        >
          {photos.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`mobile-gallery-${index}`}
              className="w-full h-[18rem] flex-shrink-0 object-cover scroll-snap-start"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
