export default function HouseSection () {

  const beneficiosList = [ 
    'Enganche mínimo de 10%', 
    'Plazo máximo de 84 meses', 
    'Tasa fija anual del 15%', 
    'Seguro incluido' 
  ];
  
  const beneficiosList2 = [ 
    'Plazo a 60 meses',
    'Tasa TIIE + 4.5%',
    'Posibilidad de acceso a apoyos a fondo perdido.',
  ];

  return (

    <div>
    
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="flex flex-col p-6 gap-1 bg-neutral-800 text-white">

          <div>
            <h3 className="text-sm">Financiamiento</h3>
            <h3 className="text-2xl font-medium">Para casas</h3>
          </div>

          <p>
            CI Banco, ofrecen créditos sin complicaciones con un trámite sencillo y ágil. 
            Este banco está dedicado a brindarte una gran atención asegurándote de que obtengas el crédito que necesitas en el menor tiempo posible. 
            CI Banco, te brindará una experiencia financiera sin estrés y alcanzando tus metas con facilidad.
          </p>

          <ul className="list-disc pl-6">
            {beneficiosList.map((beneficio) => <li >{beneficio}</li>)}
          </ul>

        </div>

        <div className="h-full w-full p-6 flex justify-center items-center">

          <img src='/images/screens/financiamiento/img2.png' className="h-16"/>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="h-full w-full p-6 flex justify-center items-center order-2 md:order-1">

          <img src='/images/screens/financiamiento/img3.png' className="h-16"/>

        </div>

        <div className="flex flex-col p-6 gap-1 bg-neutral-800 text-white order-1 md:order-2">

          <p>
            Logra el mejoramiento sustentable en tu vivienda mediante la aplicación de Ecotecnologías que contribuyan a reducir el consumo y gasto de electricidad.
          </p>

          <ul className="list-disc pl-6">
            {beneficiosList2.map((beneficio) => <li >{beneficio}</li>)}
          </ul>

        </div>

      </div>

    </div>

  )

}
