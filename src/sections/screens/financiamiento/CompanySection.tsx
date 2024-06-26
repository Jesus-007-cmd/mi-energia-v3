export default function CompanySection () {

  const beneficiosList1 = [
    'Plazo máximo de 84 meses',
    'Tasa fija anual del 15%',
    'Seguro incluido',
  ];

  const beneficiosList2 = [
    'Posibilidad de acceso a apoyos a fondo perdido.',
    'Tasa fija del 14.75%*',
  ];

  const beneficiosList3 = [
    'Hasta 500 mil pesos',
    'Plazo máximo de 24 meses. Posibilidad de 3 meses de gracia',
    'Tasa fija anual de 5%',
  ];

  const beneficiosList4 = [
    'No se requiere un capital inicial por parte de la empresa',
    'Facturación de cada mes por concepto de renta',
    'Al término puede existir un valor de venta residual o renovación del contrato',
  ];
  
  const houseContainerStyle = {
    backgroundImage: 'url(/images/screens/financiamiento/img8.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (

    <div className="flex flex-col">

      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="flex flex-col p-6 bg-neutral-800 text-white gap-1">

          <div className="flex flex-col">

            <h3 className="text-sm">Crédito</h3>
          
            <h3 className="text-2xl">CI Banco</h3>

          </div>

          <p>
            Para que tu empresa mejore sus finanzas, reduzca sus gastos fijos y 
            aumente sus niveles de sostenibilidad. Es posible aplicar también para tecnologías 
            sostenibles y vehículos de bajas emisiones, híbridos o eléctricos.
          </p>

          <ul className="pl-6 list-disc">
            {beneficiosList1.map((beneficio) => <li>{beneficio}</li>)}
          </ul>

        </div>

        <div className="flex justify-center items-center p-6">

          <img src='/images/screens/financiamiento/img6.png' className="h-20"/>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="flex justify-center items-center p-6 order-2 md:order-1">

          <img src='/images/screens/financiamiento/img3.png' className="h-16"/>

        </div>

        <div className="flex flex-col p-6 bg-neutral-800 text-white gap-1 order-1 md:order-2">

          <div className="flex flex-col">

            <h3 className="text-sm">Crédito</h3>
          
            <h3 className="text-2xl">Fide</h3>

          </div>

          <p>
            Este crédito ofrece apoyos financieros a proyectos y aplicación de tecnologías que demuestren un ahorro de energía y rentabilidad en sistemas y procesos de producción.
          </p>

          <ul className="pl-6 list-disc">
            {beneficiosList2.map((beneficio) => <li>{beneficio}</li>)}
          </ul>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="flex flex-col p-6 bg-neutral-800 text-white gap-1">

          <div className="flex flex-col">

            <h3 className="text-sm">Crédito</h3>
          
            <h3 className="text-2xl">Microyu Verde</h3>

          </div>

          <ul className="pl-6 list-disc">
            {beneficiosList3.map((beneficio) => <li>{beneficio}</li>)}
          </ul>

        </div>

        <div className="flex justify-center items-center p-6">

          <img src='/images/screens/financiamiento/img7.png' className="h-20"/>

        </div>

      </div>

      <div className='h-screen' style={houseContainerStyle}/>

      <div className="flex flex-col p-6 bg-neutral-800 text-white">

        <h3 className="text-2xl">Arrendamiento</h3>

        <p>
          Este instrumento te permite como arrendador contar con los beneficios de un sistema 
          solar sin inversión inicial y gozando de las deducciones fiscales que ofrece el esquema. 
          El arrendador mantiene la propiedad del sistema fotovoltaico hasta el término del plazo.
        </p>

        <ul className="list-disc pl-6">
          {beneficiosList4.map((beneficio) => <li>{beneficio}</li>)}
        </ul>

      </div>

      <div className="flex flex-col p-6 ">

        <h3 className="text-2xl">PPA(Power Purchase Agreement)</h3>

        <p>
          Si aún no estás preparado para invertir en energía solar, 
          podemos instalar un sistema fotovoltaico en tus instalaciones a coste 0.
        </p>

        <p>
          Nosotros nos encargamos de la operación y mantenimiento, permitiendo que tu 
          empresa se beneficie de energía limpia y logre un mayor nivel de sostenibilidad.
          En este esquema se paga una renta mensual relacionado con la energía solar 
          generada pero a un precio más bajo que la energía que ofrece el suministrador local.
        </p>

      </div>

    </div>

  );

}
