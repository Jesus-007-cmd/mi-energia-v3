// Classes
import ButtonClass from '../../classes/ButtonClass';

// Data
import AppRoutes from '../../routes';
import { networkList } from "../../data/data";

export const footerSections = [
  AppRoutes.homeRoute,
  AppRoutes.sobreNosotrosRoute,
  AppRoutes.contactanosRoute,
];

export default function Footer () {

  return (

    <div className="flex flex-col">

      <div className='p-6 md:px-20 lg:px-40 flex flex-col gap-4'>

        <div className="flex flex-col lg:flex-row items-center gap-4">

          <img className="h-12" src="/images/mi-energia-logo/logo1.png"/>

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

        <span className="text-2xl font-semibold">Nuestras Redes</span>

        <div className="flex gap-4">

          {networkList.map((row, key) => 

            <a href={row.url} target='_blank'>
              <button className={ButtonClass.TransparentButtonsClass('hover:bg-gray-100')} key={key}>
                <div className='flex flex-col gap-2'>
                  <img className="h-8" src={row.logo}/>
                  <span className='font-medium'>{row.label}</span>
                </div>
              </button>
            </a>
            
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
            <a href={row.route}>{row.title}</a>
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