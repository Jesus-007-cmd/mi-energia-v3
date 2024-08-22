export default class AppRoutes {

  static sistemaFotovoltaicoComercialRoute:AppRoute = {
    route:'/fronius',
    title:'Sistema fotovoltaico comercial'
  }

  static sistemaFotovoltaicoResidencialesHibridos:AppRoute = {
    route:'/fronius',
    title:'Sistema fotovoltaico residenciales híbridos'
  }

  static sistemaFotovoltaicoComercialEIndustrialRoute:AppRoute = {
    route:'/fronius',
    title:'Sistema Fotovoltaico comercial e industrial'
  }

  static iluminariasRoute:AppRoute = {
    route:'/iluminarias',
    title:'Iluminación de alta eficiencia'
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

}

export type AppRoute = {
  route:string;
  title:string;
}