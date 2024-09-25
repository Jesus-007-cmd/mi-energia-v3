// Classes
import ButtonClass from '../../classes/ButtonClass';

// Data
import { networkList } from "../../data/data";

export const footerSections:FooterLink[] = [
  { label:'Inicio', url:'/' },
  { label:'Nosotros', url:'/sobre-nosotros' },
  { label:'Contáctanos', url:'/contactanos' },
];

export default function Footer () {

  return (

    <div className="flex flex-col">

      <div className='p-6 md:px-20 lg:px-40 bg-neutral-600 flex flex-col gap-4 text-white'>

        <div className="flex flex-col lg:flex-row items-center gap-4">

          <img className="h-10" src="/images/mi-energia-logo/logo2.png"/>

          <ContactUsContainer/>

          <img className="h-16" src="/images/mi-energia-logo/fronius-logo.jpeg"/>

        </div>

      </div>

      <FooterLinks/>

    </div>

  )

}

function ContactUsContainer () {

  return (

    <div className="flex w-full justify-center text-center items-center">

      <div className="flex flex-col gap-4">

        <span className="text-2xl font-semibold">Contáctanos</span>

        <div className="flex gap-4">

          {networkList.map((row, key) => 
            <button className={ButtonClass.TransparentButtonsClass('hover:bg-neutral-700')} key={key}>
              <div className='flex flex-col gap-2'>
                <img className="h-8 invert" src={row.logo}/>
                <span className='font-medium'>{row.label}</span>
              </div>
            </button>
          )}

        </div>            

      </div>

    </div>

  )

}

function FooterLinks () {

  return (

    <div className="px-6 py-4 bg-neutral-800 text-center text-white flex justify-center">

      <ul className="flex flex-col lg:flex-row gap-4">

        {footerSections.map((row, key) => (
          <li className='text-white cursor-pointer hover:bg-neutral-800 py-1 px-3 rounded' key={key}>
            <a href={row.url}>{row.label}</a>
          </li>
        ))}

      </ul>

    </div>

  )
  
}

export type FooterLink = {
  label:string,
  url:string,
}