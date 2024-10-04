// Classes
import ButtonClass from '../../classes/ButtonClass';
import InputClass from '../../classes/InputClass';

// Components
import CustomButton from '../forms/CustomButton';

export default function EmailFormContainer () {

  return (

    <div className='flex flex-col gap-4 bg-gray-100 p-6 md:px-20 lg:px-40 xl:px-80'>

      <div className='p-6 bg-white border flex flex-col rounded'>

        <div className='text-center'>
          <h4 className='font-semibold text-2xl'>Servicio en el que estoy interesado</h4>
          <p className='pb-8'>¡Estamos aquí para ayudarte! Agenda tu cita por zoom y conoce sobre nuestros servicios</p>
        </div>

        <div className='gap-4 pb-4 grid grid-cols-1 md:grid-cols-2'>

          <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm'>Nombre</label>
            <input type='text' className={InputClass.whiteInputStyle}/>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm'>Empresa</label>
            <input type='text' className={InputClass.whiteInputStyle}/>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm'>Ciudad / Municipio</label>
            <input type='text' className={InputClass.whiteInputStyle}/>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm'>Correo</label>
            <input type='email' className={InputClass.whiteInputStyle}/>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm'>Asunto</label>
            <input type='text' className={InputClass.whiteInputStyle}/>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-semibold text-sm'>Mensaje</label>
            <textarea className={InputClass.whiteInputStyle}></textarea>
          </div> 

        </div>

        <div className='flex flex-col w-40 self-center'>
          <CustomButton buttonClass={ButtonClass.BlueButtonClass}>Enviar</CustomButton>
        </div> 

      </div>

    </div>

  )

}