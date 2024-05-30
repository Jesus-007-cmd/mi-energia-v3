// Modules
import React, { useState } from 'react';

// Class
import ButtonClass from '../../classes/ButtonClass';
import InputClass from '../../classes/InputClass';

// Components
import CustomButton from '../forms/CustomButton';

export default function ChatbotBox() {

  const [ isShowingChatbox, setIsShowingChatbox ] = useState(false);

  function toggleChatbox() {
    setIsShowingChatbox(!isShowingChatbox);
  }

  const Box = () => (

    <div className='bg-neutral-800 w-96 fixed right-8 top-24 p-4 flex flex-col gap-1 shadow-lg rounded'>

      <h3 className='text-white text-lg font-semibold mb-2'>Hola, ¿En qué puedo ayudarte?</h3>

      <div className='flex flex-col gap-1'>

        <label className='text-white'>Mensaje</label>

        <textarea className={InputClass.bigWhiteInputStyle}/>

      </div>
    
      <div>

        <CustomButton buttonClass={ButtonClass.BlueButtonClass}>Enviar</CustomButton>
        
      </div>

    </div>

  )

  return (

    <React.Fragment>

      <CustomButton 
        onClick={toggleChatbox}
        buttonClass={ButtonClass.TransparentButtonsClass('group-hover:text-gray-800')}
      >{isShowingChatbox ? 'Cerrar Chat' : 'Abrir Chat'}</CustomButton>

      {isShowingChatbox && <Box/>}

    </React.Fragment>

  )

}
