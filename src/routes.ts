export default class AppRoutes {

  static sistemaFotovoltaicoResidencialesHibridosEHibridos:AppRoute = {
    route:'/mi-energia#sistema-fotovoltaico-residenciales-hibridos',
    title:'Sistema Fotovoltaico Residenciales Híbridos e Híbridos'
  }

  static sistemaFotovoltaicoComercialEIndustrialRoute:AppRoute = {
    route:'/mi-energia#disenado-lider-mercado-section',
    title:'Sistema Fotovoltaico Comercial e Industrial'
  }

  static iluminariasRoute:AppRoute = {
    route:'/iluminarias',
    title:'Iluminación de Alta Eficiencia'
  }

  static monitoreoRoute:AppRoute = {
    route:'/monitoreo',
    title:'Monitoreo'
  }

  static serviciosRoute:AppRoute = {
    route:'/servicios',
    title:'Servicios'
  }

  static financiamientoRoute:AppRoute = {
    route:'/financiamiento',
    title:'Financiamiento'
  }

  static contactanosRoute:AppRoute = {
    route:'/contactanos',
    title:'Contáctanos'
  }

  static electromovilidadRoute:AppRoute = {
    route:'/electromovilidad',
    title:'Electromovilidad'
  }

  static batteriesRoute:AppRoute = {
    route:'/bess-system',
    title:'Sistema BESS'
  }

  static sobreNosotrosRoute:AppRoute = {
    route:'/sobre-nosotros',
    title:'Sobre Nosotros'
  }

}

export type AppRoute = {
  route:string;
  title:string;
}