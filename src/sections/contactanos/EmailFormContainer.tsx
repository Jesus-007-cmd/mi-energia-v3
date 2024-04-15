// Modules
import { useState } from 'react';

// Components
import BlueButton from '../../components/buttons/BlueButton';
import YellowButton from '../../components/buttons/YellowButton';

// Sections
import OurLocationMap from '../sobre-nosotros/OurLocationMap';
import ClassNameClass from '../../classes/classNameClass';

export default function EmailFormContainer () {

  const networkList = [
    { name: 'Facebook', link: 'https://www.facebook.com' },
    { name: 'Instagram', link: 'https://www.instagram.com' },
    { name: 'Twitter', link: 'https://www.twitter.com' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com' }
  ];
  
  return (

    <div className='flex flex-col'>

      <div className='h-96 p-6 bg-blue-600 flex flex-col items-center justify-center text-white gap-4'>

        <div className='flex flex-col gap-2 text-center md:w-1/2'>

          <h4 className="text-xl font-semibold text-center">Contáctanos</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore mollitia expedita cupiditate consequatur accusamus dolores illum cumque, unde commodi, 
            vero voluptate in, nihil reprehenderit aspernatur doloribus architecto! Reprehenderit, perspiciatis adipisci.
          </p>

        </div>

        <div className='flex flex-wrap gap-4 justify-center'>

          {networkList.map((row, key) => (

            <a href={row.link} key={key}>
              <BlueButton>{row.name}</BlueButton>
            </a>

          ))}

        </div>

      </div>

      <div className='flex flex-col lg:grid lg:grid-cols-2'>

        <EmailForm/>

        <LocationContainer/>

      </div>      

    </div>

  )

}

function ServicioOptionsContainer () {

  const [ selectedOptions, setSelectedOption ] = useState<number | null>(null);

  function toggleOption (id: number) {
    (selectedOptions === id) ? setSelectedOption(null) : setSelectedOption(id);
  }

  const options = [
    { id: 1, name: 'Desarrollo de Software' },
    { id: 2, name: 'Diseño Web' },
    { id: 3, name: 'Marketing Digital' },
    { id: 4, name: 'Otro' },
  ];

  return (

    <div className='grid grid-cols-2 gap-4 cursor-pointer'>

      {options.map((option, key) => (

        <button key={key} className='h-20 bg-gray-100 hover:bg-gray-300 border border-gray-300' onClick={() => toggleOption(key)}>

          <h4 className='text-purple-800 font-medium text-lg'>{option.name}</h4>

        </button>

      ))}

    </div>

  )

}

function EmailForm () {

  return (

    <div className='flex flex-col p-6 gap-4 bg-gray-50 text-center'>

      <h4 className='font-semibold text-xl'>Servicio en el que estoy interesado</h4>

      <ServicioOptionsContainer/>

      <div className='flex flex-col gap-4 pt-4'>

        <div className='flex flex-col gap-1'>
          <label>Nombre</label>
          <input type='text' className={ClassNameClass.whiteInputStyle}/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Correo</label>
          <input type='email' className={ClassNameClass.whiteInputStyle}/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Asunto</label>
          <input type='text' className={ClassNameClass.whiteInputStyle}/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Mensaje</label>
          <textarea className={ClassNameClass.whiteInputStyle}></textarea>
        </div> 

      </div>

      <div className='flex justify-center'>
        <YellowButton>Enviar</YellowButton>
      </div> 

    </div>

  )

}

function LocationContainer () {

  return (

    <div className='flex flex-col p-6 gap-4'>

      <h3 className='text-xl font-semibold text-center'>Servicios Realizados</h3>

      <OurLocationMap gridsAtMd='md:grid-cols-2' gridsAtLg='lg:grid-cols-2'/>

    </div>

  )

}