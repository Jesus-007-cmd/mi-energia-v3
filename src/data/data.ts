// Types
import type { FooterLink } from "../components/layout/Footer";

export const networkList:NetworkData[] = [
  { 
    label:'Facebook', 
    url:'https://www.facebook.com',
    logo:'/icons/facebook.svg'
  },
  { 
    label:'Instagram', 
    url:'https://www.instagram.com',
    logo:'/icons/instagram.svg'
  },
  { 
    label:'LinkedIn', 
    url:'https://www.linkedin.com',
    logo:'/icons/linkedin.svg'
  }
];

export type NetworkData = { logo:string; } & FooterLink;