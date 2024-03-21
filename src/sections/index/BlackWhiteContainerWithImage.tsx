// Modules
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Components
import YellowButton from '../../components/buttons/YellowButton';

type Props = {
  sectionRows:SectionRow[];
}

export default function BlackWhiteContainerWithImage (props:Props) {

  const sectionRows = (props?.sectionRows || []);

  function firstConcat (isOdd:boolean) {
    return twMerge(clsx('h-96 p-6 flex flex-col justify-center', (isOdd) ? 'md:order-1 bg-gray-800 text-white' : 'md:order-2 bg-gray-50 text-gray-800'));
  }

  function secondConcat (isOdd:boolean) {
    return twMerge(clsx('flex flex-col items-start gap-4', (isOdd) ? 'text-white' : 'text-gray-800'));
  }

  function thirdConcat (isOdd:boolean, classImage:string) {
    return twMerge(clsx('bg-image min-h-96', classImage, (!isOdd) ? 'md:order-1' : 'md:order-2'));
  }

  return (

    <section className='flex flex-col'>

      {sectionRows.map((row, key) => (

        <div className='flex flex-col md:grid grid-cols-2'>
    
          <div className={firstConcat(key % 2 !== 0)}>
    
            <div className={secondConcat(key % 2 !== 0)}>
    
              <div>
                
                <h4 className="text-1xl">{row.subtitle}</h4>
    
                <h3 className="text-2xl font-semibold">{row.title}</h3>
    
                <p>{row.description}</p>
    
              </div>
    
              <YellowButton>Learn More</YellowButton>
    
            </div>
            
          </div>
    
          <div className={thirdConcat((key % 2 !== 0), row.classImage)}></div>
    
        </div>
        
      ))}

    </section>

  )

}

export type SectionRow = {
	classImage:string;
	title:string;
	subtitle:string;
	description:string;
}