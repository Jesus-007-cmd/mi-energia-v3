// Modules
import React, { useState } from 'react';

export default function SelectFinanciamientoButtons () {

  const [ selectedOptions, setSelectedOption ] = useState(0);

  const financiamientoList:FinanciamientoButton[] = [
    { title:'Empresas', url:'/images/general-logo/logo-business.svg' },
    { title:'Casas', url:'/images/general-logo/logo-home.svg' },
  ];

  const problemListForCompanies:ProblemData[] = [
    { 
      title:'Costos Elevados', 
      description:`
        Et eius, magnam maiores dicta repudiandae quibusdam voluptates, 
        veniam ea accusamus distinctio necessitatibus, odio numquam 
        aliquam odit libero?
      `, 
      icon:'/images/general-logo/logo-business.svg' 
    },
    { 
      title:'Fiabilidad del Suministro', 
      description:`
        Et eius, magnam maiores dicta repudiandae quibusdam voluptates, 
        veniam ea accusamus distinctio necessitatibus, odio numquam 
        aliquam odit libero?
      `, 
      icon:'/images/general-logo/logo-business.svg' 
    },
    { 
      title:'Impacto Ambiental', 
      description:`
        Et eius, magnam maiores dicta repudiandae quibusdam voluptates, 
        veniam ea accusamus distinctio necessitatibus, odio numquam 
        aliquam odit libero?
      `, 
      icon:'/images/general-logo/logo-business.svg' 
    }
  ];

  const problemListForHomes:ProblemData[] = [
    { 
      title:'Costos Elevados', 
      description:`
        Et eius, magnam maiores dicta repudiandae quibusdam voluptates, 
        veniam ea accusamus distinctio necessitatibus, odio numquam 
        aliquam odit libero?
      `, 
      icon:'/images/general-logo/logo-home.svg' 
    },
    { 
      title:'Fiabilidad del Suministro', 
      description:`
        Et eius, magnam maiores dicta repudiandae quibusdam voluptates, 
        veniam ea accusamus distinctio necessitatibus, odio numquam 
        aliquam odit libero?
      `, 
      icon:'/images/general-logo/logo-home.svg' 
    },
    { 
      title:'Impacto Ambiental', 
      description:`
        Et eius, magnam maiores dicta repudiandae quibusdam voluptates, 
        veniam ea accusamus distinctio necessitatibus, odio numquam 
        aliquam odit libero?
      `, 
      icon:'/images/general-logo/logo-home.svg' 
    }
  ];

  const problemsToShow = (selectedOptions === 0) 
    ? problemListForCompanies 
    : problemListForHomes;

  return (

    <React.Fragment>

      <section className="h-screen bg-gray-700 flex flex-col items-center text-white gap-6 text-center p-6 pt-20 justify-center">

        <div className="flex flex-col items-center">

          <h3 className="font-semibold text-2xl">Financiamiento</h3>

          <p className="w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nulla perferendis saepe. 
            Distinctio repellat, et itaque ratione ipsum veritatis cum natus at explicabo, sequi, velit molestias 
            omnis reiciendis soluta sunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eius, magnam maiores 
            dicta repudiandae quibusdam voluptates, veniam ea accusamus distinctio necessitatibus, odio numquam aliquam odit 
            libero? Laborum asperiores magni necessitatibus!
          </p>
          
        </div>

        <div className="flex gap-60">

          {financiamientoList.map((row, index) => (

            <div 
              className="flex flex-col items-center gap-1 hover:bg-blue-500 p-3 px-6 rounded-md cursor-pointer"
              onClick={() => setSelectedOption(index)}
            >

              <div className="p-3 bg-amber-500 rounded-md">

                <img src={row.url} alt={row.title} className="h-6 invert"/>

              </div>

              <span>{row.title}</span>

            </div>

          ))}

        </div>

      </section>

      <section className="p-6 flex flex-col text-white bg-neutral-800 min-h-96 justify-center">

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

          {problemsToShow.map((row) => (

            <div className="flex flex-col items-center text-center gap-3">

              <div className="p-3 bg-blue-600 rounded">

                <img 
                  src={row.icon} 
                  alt={row.title} 
                  className="h-6 invert"
                />

              </div>

              <div className="flex flex-col">

                <h4 className="text-xl font-medium">{row.title}</h4>

                <p>{row.description}</p>

              </div>

            </div>

          ))}

        </div>
        
      </section>

    </React.Fragment>

  )

}

type FinanciamientoButton = {
  title: string;
  url: string;
};

type ProblemData = {
  title: string;
  description: string;
  icon: string;
}