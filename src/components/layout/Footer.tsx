// Data
import { networkList, type NetworkData } from "../../data/data";

export const footerSections:FooterLink[] = [
  { label:'Inicio', url:'/' },
  { label:'Nosotros', url:'/sobre-nosotros' },
  { label:'Contáctanos', url:'/contactanos' },
];

export default function Footer () {

  return (

    <div className="flex flex-col">

      <div className='p-6 md:px-20 lg:px-40 bg-neutral-700 flex flex-col gap-4'>

        <div className="flex flex-col lg:flex-row items-center gap-4">

          <img className="h-10" src="/images/mi-energia-logo/logo2.png"/>

          <div className="flex w-full justify-center text-white text-center items-center">

            <div className="flex flex-col gap-1">

              <span className="text-xl font-medium">Contáctanos</span>

              <ul className="flex gap-4">
                {networkList.map((row) => 
                  <li className='text-white cursor-pointer rounded hover:bg-neutral-800 p-2'>
                    <img className="h-8 invert" src={row.logo} />
                  </li>
                )}
              </ul>            

            </div>

          </div>

          <img className="h-16" src="/images/mi-energia-logo/fronius-logo.jpeg"/>

        </div>

      </div>

      <div className="px-6 py-4 bg-neutral-800 text-center text-white flex justify-center">
        <ul className="flex flex-col lg:flex-row gap-4">
          {footerSections.map((section, index) => <FooterLink key={index} {...section} />)}
        </ul>
      </div>

    </div>

  )

}

function FooterLink (props:FooterLink | NetworkData) {

  return (

    <li className='text-white cursor-pointer hover:bg-neutral-800 py-1 px-3 rounded'>

      <a href={props.url}>{props.label}</a>

    </li>

  );

}


export type FooterLink = {
  label:string,
  url:string,
}