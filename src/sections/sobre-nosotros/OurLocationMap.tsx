// Components
import { twMerge } from 'tailwind-merge';
import BlackButton from '../../components/buttons/BlackButton';
import clsx from 'clsx';

const locationList:LocationData[] = [
  {
    title:'Ubicación 1',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque quas vel quo eveniet.',
    link:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812624.0293440544!2d-92.57131567205923!3d21.06204945434577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f540ff8aad604ed%3A0xcccc217531083d0a!2zWXVjYXTDoW4!5e0!3m2!1ses!2smx!4v1710891971903!5m2!1ses!2smx'
  },
  {
    title:'Ubicación 2',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque quas vel quo eveniet.',
    link:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812624.0293440544!2d-92.57131567205923!3d21.06204945434577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f540ff8aad604ed%3A0xcccc217531083d0a!2zWXVjYXTDoW4!5e0!3m2!1ses!2smx!4v1710891971903!5m2!1ses!2smx'
  },
  {
    title:'Ubicación 3',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque quas vel quo eveniet.',
    link:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812624.0293440544!2d-92.57131567205923!3d21.06204945434577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f540ff8aad604ed%3A0xcccc217531083d0a!2zWXVjYXTDoW4!5e0!3m2!1ses!2smx!4v1710891971903!5m2!1ses!2smx'
  },
  {
    title:'Ubicación 4',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque quas vel quo eveniet.',
    link:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812624.0293440544!2d-92.57131567205923'
  }
];

// Types
type LocationData = {
  title: string;
  description: string;
  link: string;
}

type Props = {
  gridsAtMd?: string;
  gridsAtLg?: string;
}

export default function OurLocationMap (props:Props) {

  const gridsAtMd = (props?.gridsAtMd || 'md:grid-cols-3');

  const gridsAtLg = (props?.gridsAtLg || 'lg:grid-cols-4');

  return (

    <div className='flex flex-col'>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812624.0293440544!2d-92.57131567205923!3d21.06204945434577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f540ff8aad604ed%3A0xcccc217531083d0a!2zWXVjYXTDoW4!5e0!3m2!1ses!2smx!4v1710891971903!5m2!1ses!2smx" 
        className="bg-blue-500 h-96" 
        loading="lazy" 
      />

      <div className={twMerge(clsx(`flex flex-col md:grid ${gridsAtMd} ${gridsAtLg} p-6 bg-white gap-4`))}>

        {locationList.map((row) => (

          <div className="flex flex-col text-gray-800 text-center items-center">

            <div className="h-[3px] bg-gray-800 w-12 mb-3"/>

            <h5 className="font-semibold text-lg">{row.title}</h5>

            <p className="mb-2">{row.description}</p>

            <BlackButton>Ver Más</BlackButton>

          </div>

        ))}

      </div>

    </div>

  )
}
