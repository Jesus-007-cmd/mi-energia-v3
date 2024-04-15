// Components
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const locationList:LocationData[] = [
  {
    amount:16,
    description:'Clientes de Yucatán:',
  },
  {
    amount:12,
    description:'Clientes en México:',
  },
  {
    amount:20,
    description:'Clientes en Puebla:',
  },
];

// Types
type LocationData = {
  amount: number;
  description: string;
}

type Props = {
  gridsAtMd?: string;
  gridsAtLg?: string;
}

export default function OurLocationMap (props:Props) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAUwJ1TLf3hpbdEhi0euPG7bSZr6ouxRCw"
  })

  const gridsAtMd = (props?.gridsAtMd || 'md:grid-cols-2');

  const gridsAtLg = (props?.gridsAtLg || 'lg:grid-cols-2');

  const markers = [
    {id: 1,  position:{ lat: 21.0371, lng: -89.6186 }},
    {id: 2,  position:{ lat: 21.0121, lng: -89.6181 }},
    {id: 3,  position:{ lat: 21.0336, lng: -89.6411 }},
    {id: 4,  position:{ lat: 21.1574, lng: -86.8657 }},
    {id: 5,  position:{ lat: 21.0501, lng: -89.6133 }},
    {id: 6,  position:{ lat: 21.0173, lng: -89.5968 }},
    {id: 7,  position:{ lat: 21.0105, lng: -89.6019 }},
    {id: 8,  position:{ lat: 20.9961, lng: -89.6121 }},
    {id: 9,  position:{ lat: 20.9984, lng: -89.6021 }},
    {id: 10, position:{ lat: 21.0222, lng: -89.6362 }},
    {id: 11, position:{ lat: 20.9922, lng: -89.6062 }},
    {id: 12, position:{ lat: 20.9913, lng: -89.6406 }},
    {id: 13, position:{ lat: 21.0209, lng: -89.6141  }}
  ]

  return (

    <div className='flex flex-col gap-6'>

      {
        isLoaded && 
        <GoogleMap
          mapContainerStyle={{ height: "400px", width: "100%" }}
          center={{ lat:20.9858054, lng:-89.7844126  }}
          zoom={10}
        >{markers.map((row, index) => <MarkerF key={index} position={row.position}/>)}</GoogleMap>
      }

      <div className={twMerge(clsx(`flex flex-col md:grid ${gridsAtMd} ${gridsAtLg} bg-white gap-6`))}>

        {locationList.map((row, key) => (

          <div className='flex flex-col items-center justify-center shadow text-center p-6' key={key}>
            <span className='font-medium text-xl'>{row.amount}</span>
            <span className='text-lg'>{row.description}</span>
          </div>

        ))}

      </div>

    </div>

  )

}

