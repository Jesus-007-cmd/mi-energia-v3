// Modules
import { useEffect, useRef } from 'react';

type Props = {
  photos: string[];
};

export default function CustomGallery(props: Props) {
  // Props
  const { photos } = props;

  const scrollAmount = 1000;
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function scrollLeft() {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      assignInterval();
    }
  }

  function scrollRight() {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      assignInterval();
    }
  }

  function assignInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(validateCanScroll, 5000);
  }

  function validateCanScroll() {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = carouselRef.current;
      if (clientWidth + scrollLeft >= scrollWidth) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRight();
      }
    }
  }

  useEffect(() => {
    assignInterval();
    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <div className="relative bg-gray-200 overflow-hidden">
      {/* Botón Flecha Izquierda */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 z-10"
      >
        &#9664;
      </button>

      {/* Contenedor de Carrusel */}
      <div
        className="flex overflow-hidden scroll-snap-x scroll-snap-mandatory no-scrollbar"
        ref={carouselRef}
      >
        {photos.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`gallery-${index}`}
            className="h-[50vh] w-auto flex-shrink-0 scroll-snap-start"
          />
        ))}
      </div>

      {/* Botón Flecha Derecha */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 z-10"
      >
        &#9654;
      </button>
    </div>
  );
}
