// Types
import type { FooterLink } from "../components/layout/Footer";

export const networkList:NetworkData[] = [
  { 
    label:'Facebook', 
    url:'https://www.facebook.com/mienergiamx',
    logo:'/icons/facebook.svg'
  },
  { 
    label:'Instagram', 
    url:'https://www.instagram.com/mienergiamx/',
    logo:'/icons/instagram.svg'
  },
  { 
    label:'LinkedIn', 
    url:'https://www.linkedin.com/company/mi-energ%C3%ADa-mx/?originalSubdomain=mx',
    logo:'/icons/linkedin.svg'
  }
];

export type NetworkData = { logo:string; } & FooterLink;