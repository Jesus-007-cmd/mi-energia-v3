// Modules
import React, { useState } from 'react';

// Class
import ClassNameClass from '../../classes/classNameClass';

// Components
import YellowButton from '../buttons/YellowButton';
import PurpleButton from '../buttons/PurpleButton';

export default function ChatbotBox() {

  const [ isShowingChatbox, setIsShowingChatbox ] = useState(false);

  function toggleChatbox() {
    setIsShowingChatbox(!isShowingChatbox);
  }

  const Box = () => (

    <div className='bg-gray-800 w-96 fixed right-8 top-24 p-4 flex flex-col gap-1 shadow-lg'>

      <h3 className='text-white text-lg font-semibold mb-2'>Hola, ¿En qué puedo ayudarte?</h3>

      <div className='flex flex-col gap-1'>
        <label className='text-white'>Mensaje</label>
        <textarea className={ClassNameClass.bigWhiteInputStyle}/>
      </div>
    
      <div>
        <PurpleButton>Enviar</PurpleButton>
      </div>

    </div>

  )

  return (

    <React.Fragment>

      <YellowButton onClick={toggleChatbox}>{isShowingChatbox ? 'Cerrar Chat' : 'Abrir Chat'}</YellowButton>
      {isShowingChatbox && <Box/>}

    </React.Fragment>

  )

}
