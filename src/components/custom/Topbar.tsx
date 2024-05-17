// Modules
import { useState } from 'react';

// Components
import ChatbotBox from './ChatbotBox';
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

    <div className='flex group' onMouseEnter={toggleIsMouseInTopBar} onMouseLeave={toggleIsMouseInTopBar}>

      <nav className="px-4 md:px-8 h-20 flex justify-between items-center gap-4 group-hover:bg-white transition w-full duration-500 ease-in-out absolute z-10">

        <a href="/">

          <img
            src='/images/mi-energia-logo/logo1.png'
            className="h-10 hidden group-hover:block"
          />

          <img 
            src='/images/mi-energia-logo/logo2.png' 
            className="h-10 group-hover:hidden"
          />

        </a>

        <div className="flex gap-4">

          <div className="hidden md:flex gap-4">

            { 
              
              headerButtons.map((button, key) => (button.url == undefined)
              
                ? 
                
                <CustomButton 
                  key={key}
                  buttonClass={ButtonClass.TransparentButtonsClass('group-hover:text-gray-800')} 
                  onEnter={toggleIsMouseInServiceButton}
                >{button.label}</CustomButton>

                :

                <a className="text-white" href={button.url} key={key}>
                
                  <CustomButton 
                    buttonClass={ButtonClass.TransparentButtonsClass('group-hover:text-gray-800')} 
                    onEnter={toggleIsMouseInAnyOtherButton}
                  >{button.label}</CustomButton>
          
                </a>

              )

            }

          </div>

          <a href="/contactanos">

            <CustomButton 
              buttonClass={ButtonClass.TransparentButtonsClass('group-hover:text-gray-800')}
            >Contáctanos</CustomButton>

          </a>

        </div>

        <ChatbotBox/> 

      </nav>

      {(isMouseInServiceButton) && <ServicesOptions/>}

    </div>

  )

}

function ServicesOptions () {

  const servicesList = [
    { img:'/images/screens/home/logos-certificaciones/img7.png', label:'Fronius', url: '/services/fronius' },
    { img:'/images/screens/home/logos-certificaciones/img12.png', label:'Tauro', url: '/services/tauro' },
  ];

  return (

    <div 
      className={`
        flex flex-col p-6 top-20 absolute w-full bg-white items-center justify-center gap-6 
        text-center duration-500 hover:opacity-100 transition ease-in-out
      `
    }>

      <h6>Nuestros Servicios</h6>

      <div className='flex gap-12'>

        {servicesList.map((service, key) => (

          <a 
            className='flex flex-col items-center p-6 hover:bg-gray-100 rounded cursor-pointer gap-4' 
            key={key}
            href={service.url}
          >

            <img src={service.img} className='h-20'/>

            <span className='font-medium text-gray-800'>{service.label}</span>
                  
          </a>

       ))}

      </div>

    </div>

  )

}