// Modules
import { useState } from 'react';

// Components
import ChatbotBox from '../custom/ChatbotBox';
import CustomButton from '../forms/CustomButton';

// Classes
import ButtonClass from '../../classes/ButtonClass';

export default function Topbar () {

  const [ isMouseInTopBar, setIsMouseInTopBar ] = useState(false);
  const [ isMouseInServiceButton, setIsMouseInServiceButton ] = useState(false);

  const headerButtons = [
    { label:'Nosotros', url: '/sobre-nosotros' },
    { label:'Servicios' },
    { label:'Financiamiento', url: '/financiamiento' },
  ];

  function toggleIsMouseInTopBar () {
    if (isMouseInServiceButton) setIsMouseInServiceButton(false);
    setIsMouseInTopBar(!isMouseInTopBar);
  }

  function toggleIsMouseInServiceButton () {
    setIsMouseInServiceButton(!isMouseInServiceButton);
  }

  function toggleIsMouseInAnyOtherButton () {
    setIsMouseInServiceButton(false);
  }

  return (

    <div className='flex text-center group/main-container' onMouseEnter={toggleIsMouseInTopBar} onMouseLeave={toggleIsMouseInTopBar}>

      <nav
        className={`
          px-4 md:px-8 h-20 flex justify-between items-center gap-4 absolute z-10 w-full 
          transition duration-500 ease-in-out group-hover/main-container:bg-white
        `}
      >

        <a href="/">

          <img
            src='/images/mi-energia-logo/logo1.png'
            className="h-10 hidden group-hover/main-container:block"
          />

          <img 
            src='/images/mi-energia-logo/logo2.png' 
            className="h-10 group-hover/main-container:hidden"
          />

        </a>

        <div className="flex gap-4">

          <div className="hidden md:flex gap-4">

            { 
              
              headerButtons.map((button, key) => (button.url == undefined)
              
                ? 
                
                <div className='group/service-container' key={key}>

                  <CustomButton
                    buttonClass={ButtonClass.TransparentButtonsClass('group-hover/main-container:text-gray-800')} 
                    onEnter={toggleIsMouseInServiceButton}
                  >{button.label}</CustomButton>

                  {isMouseInServiceButton && <ServicesOptions/>}

                </div>

                :

                <a className="text-white" href={button.url} key={key}>
                
                  <CustomButton 
                    buttonClass={ButtonClass.TransparentButtonsClass('group-hover/main-container:text-gray-800')} 
                    onEnter={toggleIsMouseInAnyOtherButton}
                  >{button.label}</CustomButton>
          
                </a>

              )

            }

          </div>

          <a href="/contactanos">

            <CustomButton 
              buttonClass={ButtonClass.TransparentButtonsClass('group-hover/main-container:text-gray-800')}
            >Contáctanos</CustomButton>

          </a>

        </div>

        <ChatbotBox/> 

      </nav>

    </div>

  )

}

function ServicesOptions () {

  const servicesList = [
    { label:'Electromovilidad', url: '/fronius' },
    { label:'Iluminarias', url: '/iluminarias' },
    { label:'Baterías e Inversores', url: '/fronius' },
    { label:'Sistemas Fotovoltaícos', url: '/fronius' },
  ];

  return (

    <div 
      className={`
        flex flex-col p-6 top-20 absolute left-0 w-full items-center justify-center gap-6 text-center bg-white
        animate__animated animate__fadeIn animate__faster
      `}
    >

      <div className='flex gap-12'>

        {servicesList.map((service, key) => (

          <a key={key} href={service.url}>

            <CustomButton buttonClass={ButtonClass.TransparentButtonsClass()}>

              <span className='font-medium text-gray-800'>{service.label}</span>

            </CustomButton>
                  
          </a>

       ))}

      </div>

    </div>

  )

}