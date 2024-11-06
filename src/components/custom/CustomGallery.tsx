// Modules
import { useEffect, useRef } from 'react';

type Props = {
  photos:string[];
}

export default function CustomGallery (props:Props) {

  // Props
  const { photos } = props;

  const scrollAmount = 1000;
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  function scrollLeft () {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left:-scrollAmount, behavior: 'smooth' });
      assignInterval();
    }
  }

  function scrollRight () {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left:scrollAmount, behavior: 'smooth' });
      assignInterval();
    }
  }

  function assignInterval () {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(validateCanScroll, 5000);
  }

  function validateCanScroll () {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = carouselRef.current;
      if (clientWidth + scrollLeft === scrollWidth) {
        carouselRef.current.scrollTo({ left:0, behavior: 'smooth' });
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

    <div className='bg-gray-200 overflow-auto flex flex-col justify-center' ref={carouselRef}>

      <div className='flex'>
        {photos.map((img) => <img src={img} alt='gallery' className='h-[50vh]'/>)}
      </div>

    </div>

  )

}
