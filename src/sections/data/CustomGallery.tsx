// Modules
import { useEffect, useRef } from 'react';

// Components
import ButtonClass from '../../classes/ButtonClass';
import CustomButton from '../../components/forms/CustomButton';

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
    }
  }

  function scrollRight () {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left:scrollAmount, behavior: 'smooth' });
    }
  }

  function assignInterval () {
    intervalRef.current = setInterval(validateCanScroll, 3000);
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

    <div className='h-[50vh] bg-gray-200 overflow-x-auto flex flex-col justify-center' ref={carouselRef}>

      <div className='flex'>
        {photos.map((img) => <img src={img} alt='gallery' className='h-[50vh]'/>)}
      </div>

      <div className='flex items-center justify-between absolute w-full px-6'>

        <CustomButton buttonClass={ButtonClass.TraslucidBlackButtonClass()} onClick={scrollLeft}>
          <img src='/icons/arrow-left.svg' className='h-6 w-6'/>
        </CustomButton>

        <CustomButton buttonClass={ButtonClass.TraslucidBlackButtonClass()} onClick={scrollRight}>
          <img src='/icons/arrow-right.svg' className='h-6 w-6'/>
        </CustomButton>

      </div>

    </div>

  )

}
