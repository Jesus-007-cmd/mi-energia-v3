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

  return (

    <section className="flex flex-col">

      <div className="grid grid-cols-1 md:grid-cols-2 bg-neutral-800">

        <div className="flex flex-col text-white gap-1 justify-center p-6">

          <div className="flex flex-col">
            <h3 className="text-sm">Crédito</h3>
            <h3 className="text-2xl font-semibold">CI Banco</h3>
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

        <img src='/images/screens/financiamiento/img2.png'/>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-neutral-800">

        <img src='/images/screens/financiamiento/img3.png'/>

        <div className="flex flex-col gap-1 order-1 md:order-2 justify-center p-6 text-white">

          <div className="flex flex-col">
            <h3 className="text-sm">Crédito</h3>
            <h3 className="text-2xl font-semibold">Fide</h3>
          </div>

          <p>
            Este crédito ofrece apoyos financieros a proyectos y aplicación de tecnologías que demuestren un ahorro de energía y rentabilidad en sistemas y procesos de producción.
          </p>

          <ul className="pl-6 list-disc">
            {beneficiosList2.map((beneficio) => <li>{beneficio}</li>)}
          </ul>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-neutral-800">

        <div className="flex flex-col p-6 text-white gap-1 justify-center">

          <div className="flex flex-col">

            <h3 className="text-sm">Crédito</h3>
          
            <h3 className="text-2xl font-semibold">Microyuc Verde</h3>

          </div>

          <ul className="pl-6 list-disc">
            {beneficiosList3.map((beneficio) => <li>{beneficio}</li>)}
          </ul>

        </div>

        <img src='/images/screens/financiamiento/img9.jpg'/>

      </div>

    </section>

  );

}
