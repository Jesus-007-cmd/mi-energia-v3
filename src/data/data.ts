// Types
import type { FooterLink } from "../components/layout/Footer";

export const networkList:NetworkData[] = [
  { 
    label:'Facebook', 
    url:'https://www.facebook.com',
    logo:'/images/icons/facebook.svg'
  },
  { 
    label:'Instagram', 
    url:'https://www.instagram.com',
    logo:'/images/icons/instagram.svg'
  },
  { 
    label:'LinkedIn', 
    url:'https://www.linkedin.com',
    logo:'/images/icons/linkedin.svg'
  }
];

export type NetworkData = { logo:string; } & FooterLink;