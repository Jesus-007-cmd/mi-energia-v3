// Modules
import { useState } from 'react';

// Classes
import ButtonClass from '../../classes/ButtonClass';
import InputClass from '../../classes/InputClass';

// Components
import CustomButton from '../../components/forms/CustomButton';

export default function EmailFormContainer () {
  
  return (

    <div className='flex flex-col'>

      <div className='p-6 pt-20 bg-gray-700 flex flex-col items-center justify-center text-white gap-4 h-screen'>

        <div className='flex flex-col gap-2 text-center md:w-1/2'>

          <h4 className="text-2xl font-semibold text-center">Contáctanos</h4>

          <p className='text-lg'>
            En Mi Energía MX, estamos comprometidos a proporcionarte la
            mejor experiencia y a resolver todas tus inquietudes sobre 
            energía sostenible.
          </p>

        </div>

      </div>

      <div className='flex flex-col lg'>

        <EmailForm/>

      </div>      

    </div>

  )

}

function ServicioOptionsContainer () {

  // States
  const [ selectedOptions, setSelectedOption ] = useState<number | null>(null);

  // Toggle
  function toggleOption (id: number) {
    (selectedOptions === id) ? setSelectedOption(null) : setSelectedOption(id);
  }

  const options = [
    { id:1, name:'Sistema Fotovoltaico Residencial e Híbrido' },
    { id:2, name:'Sistema Fotovoltaico Comercial e Industrial' },
    { id:3, name:'Sistema BESS' },
    { id:4, name:'Electromovilidad' },
    { id:5, name:'Monitoreo' },
  ];

  return (

    <div className='grid grid-cols-2 gap-4 cursor-pointer'>

      {options.map((option, key) => (

        <button 
          key={key} 
          className={`h-20 bg-gray-100 hover:bg-gray-300 border border-gray-300 ${key === 4 ? 'col-span-2' : 'col-span-1'}`} 
          onClick={() => toggleOption(key)}
        >

          <h4 className='text-purple-800 font-medium text-lg'>{option.name}</h4>

        </button>

      ))}

    </div>

  )

}

function EmailForm () {

  return (

    <div className='flex flex-col p-6 gap-4 bg-gray-50 text-center'>

      <h4 className='font-semibold text-2xl'>Servicio en el que estoy interesado</h4>

      <ServicioOptionsContainer/>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4'>

        <div className='flex flex-col gap-1'>
          <label>Nombre</label>
          <input type='text' className={InputClass.whiteInputStyle}/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Correo</label>
          <input type='email' className={InputClass.whiteInputStyle}/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Asunto</label>
          <input type='text' className={InputClass.whiteInputStyle}/>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Mensaje</label>
          <textarea className={InputClass.whiteInputStyle}></textarea>
        </div> 

      </div>

      <div className='flex justify-center'>
        <CustomButton buttonClass={ButtonClass.YellowButtonClass}>Enviar</CustomButton>
      </div> 

    </div>

  )

}