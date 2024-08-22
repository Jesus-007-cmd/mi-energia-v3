// Components
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const locationList:LocationData[] = [
  {
    amount:103,
    description:'Clientes de Yucatán:',
  },
  {
    amount:14,
    description:'Clientes en Campeche:',
  },
  {
    amount:25,
    description:'Clientes en Quintana Roo:',
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

  const gridsAtMd = (props?.gridsAtMd || 'md:grid-cols-3');
  const gridsAtLg = (props?.gridsAtLg || 'lg:grid-cols-3');

  const markers = [

    // Super Willys
    { position:{ lat:20.9258, lng: -89.6450 }},
    { position:{ lat:21.0095, lng: -89.7161 }},
    { position:{ lat:20.9865, lng: -89.6063 }},
    { position:{ lat:20.9835, lng: -89.5320 }},
    { position:{ lat:21.1040, lng: -89.6738 }},
    { position:{ lat:20.4773, lng: -90.0847 }},
    { position:{ lat:20.9551, lng: -89.5800 }},
    { position:{ lat:20.9577, lng: -89.5594 }},
    { position:{ lat:21.1544, lng: -86.8742 }},
    { position:{ lat:20.9767, lng: -89.6496 }},
    { position:{ lat:20.9431, lng: -89.7104 }},
    { position:{ lat:20.9709, lng: -89.5506 }},
    { position:{ lat:20.9316, lng: -89.5675 }},
    { position:{ lat:20.9461, lng: -89.5860 }},
    { position:{ lat:20.4980, lng: -89.5898 }},
    { position:{ lat:20.9057, lng: -89.6910 }},
    { position:{ lat:21.0917, lng: -89.2850 }},
    { position:{ lat:20.8650, lng: -89.2021 }},
    { position:{ lat:20.9141, lng: -89.6211 }},
    { position:{ lat:20.9477, lng: -89.6457 }},
    { position:{ lat:20.9232, lng: -89.5392 }},
    { position:{ lat:20.2634, lng: -89.3488 }},
    { position:{ lat:20.6528, lng: -87.0994 }},
    { position:{ lat:20.6677, lng: -87.0589 }},
    { position:{ lat:21.1492, lng: -88.1478 }},
    { position:{ lat:20.9320, lng: -89.5513 }},
    { position:{ lat:21.2838, lng: -89.6485 }},
    { position:{ lat:20.9616, lng: -89.9330 }},
    { position:{ lat:20.9209, lng: -89.6163 }},
    { position:{ lat:20.9274, lng: -89.5457 }},
    { position:{ lat:21.1495, lng: -88.1629 }},
    { position:{ lat:21.1327, lng: -88.1539 }},
    { position:{ lat:20.9316, lng: -89.0192 }},
    { position:{ lat:20.8383, lng: -89.3717 }},
    { position:{ lat:20.5511, lng: -89.8574 }},
    { position:{ lat:20.8122, lng: -89.4533 }},
    { position:{ lat:21.1510, lng: -89.4837 }},
    { position:{ lat:19.8269, lng: -90.4999 }},
    { position:{ lat:19.8611, lng: -90.5016 }},
    { position:{ lat:21.2036, lng: -89.2725 }},
    { position:{ lat:21.1517, lng: -88.9379 }},
    { position:{ lat:20.7969, lng: -89.0354 }},
    { position:{ lat:20.9277, lng: -89.6080 }},
    { position:{ lat:21.0156, lng: -89.7055 }},
    { position:{ lat:20.9372, lng: -89.6897 }},
    { position:{ lat:20.9295, lng: -89.5891 }},
    { position:{ lat:20.9493, lng: -89.5730 }},
    { position:{ lat:21.2682, lng: -89.7428 }},
    { position:{ lat:19.8445, lng: -90.5018 }},
    { position:{ lat:20.9516, lng: -89.6860 }},
    { position:{ lat:21.0145, lng: -89.6310 }},
    { position:{ lat:20.5955, lng: -89.0081 }},
    { position:{ lat:20.3876, lng: -89.3920 }},
    { position:{ lat:20.3043, lng: -89.4193 }},
    { position:{ lat:18.5275, lng: -88.3052 }},
    { position:{ lat:18.5575, lng: -88.2560 }},
    { position:{ lat:18.5318, lng: -88.3002 }},
    { position:{ lat:20.9322, lng: -89.1260 }},
    { position:{ lat:20.9657, lng: -89.5965 }},
    { position:{ lat:21.2784, lng: -89.6796 }},
    { position:{ lat:20.9335, lng: -89.5741 }},
    { position:{ lat:20.9994, lng: -89.6595 }},
    { position:{ lat:21.2837, lng: -89.6641 }},
    { position:{ lat:20.8025, lng: -88.2006 }},
    { position:{ lat:21.1462, lng: -88.1610 }},
    { position:{ lat:20.6895, lng: -88.1967 }},
    { position:{ lat:20.6957, lng: -88.2165 }},
    { position:{ lat:20.6910, lng: -88.1875 }},
    { position:{ lat:19.7477, lng: -88.7076 }},
    { position:{ lat:19.8992, lng: -88.8102 }},
    { position:{ lat:19.5854, lng: -88.5917 }},
    { position:{ lat:18.5143, lng: -88.2886 }},
    { position:{ lat:18.6784, lng: -88.3918 }},
    { position:{ lat:20.1254, lng: -88.9251 }},
    { position:{ lat:20.9690, lng: -89.5600 }},
    { position:{ lat:20.9361, lng: -89.6322 }},
    { position:{ lat:21.0855, lng: -89.2835 }},
    { position:{ lat:20.9123, lng: -89.6353 }},
    { position:{ lat:21.2471, lng: -89.0414 }},
    { position:{ lat:20.0406, lng: -90.2253 }},
    { position:{ lat:19.8525, lng: -90.4938 }},
    { position:{ lat:20.5859, lng: -89.9996 }},
    { position:{ lat:20.4429, lng: -90.0279 }},
    { position:{ lat:19.7993, lng: -90.6036 }},
    { position:{ lat:19.8519, lng: -90.5159 }},
    { position:{ lat:19.8162, lng: -90.5476 }},
    { position:{ lat:19.8431, lng: -90.5040 }},
    { position:{ lat:18.5344, lng: -88.2812 }},
    { position:{ lat:21.0078, lng: -89.7248 }},
    { position:{ lat:20.9946, lng: -89.5314 }},
    	
    // Maxicarne
    { position:{ lat:20.9811, lng:-89.5771 }},
    { position:{ lat:21.2864, lng:-89.6619 }},
    { position:{ lat:20.9346, lng:-89.6197 }},
    { position:{ lat:21.0976, lng:-89.2842 }},
    { position:{ lat:20.9644, lng:-89.583 }},
    { position:{ lat:20.9623, lng:-89.6188 }},
    { position:{ lat:20.9619, lng:-89.6189 }},
    { position:{ lat:20.1205, lng:-88.9226 }},
    { position:{ lat:20.3974, lng:-89.5384 }},
    { position:{ lat:21.0246, lng:-89.6425 }},
    { position:{ lat:21.1481, lng:-88.1509 }},

    // Similares
    { position:{ lat:21.0154, lng:-89.6322 }},
    { position:{ lat:21.0097, lng:-89.7167 }},
    { position:{ lat:20.9686, lng:-89.6819 }},
    { position:{ lat:20.9696, lng:-89.676891 }},
    { position:{ lat:20.9277, lng:-89.6089 }},

    // Lodemo
    { position:{ lat:20.9394, lng:-89.6976 }},
    { position:{ lat:21.0363, lng:-89.6603 }},
    { position:{ lat:21.0578, lng:-89.6424 }},
    { position:{ lat:20.9919, lng:-89.6513 }},
    { position:{ lat:21.0408, lng:-89.6316 }},
    { position:{ lat:20.971,  lng:-89.5647 }},
    { position:{ lat:20.9504, lng:-89.5603 }},
    { position:{ lat:20.787,  lng:-89.817 }},
    { position:{ lat:20.9191, lng:-89.7006 }},
    { position:{ lat:20.9979, lng:-89.5711 }},
    { position:{ lat:21.0268, lng:-89.5615 }},
    { position:{ lat:19.8211, lng:-90.5258 }},
    { position:{ lat:19.9003, lng:-90.4453 }},
    { position:{ lat:20.9855, lng:-89.679 }},
    { position:{ lat:20.978,  lng:-86.861 }},
    { position:{ lat:21.1439, lng:-86.8231 }},
    { position:{ lat:21.1571, lng:-86.8292 }},
    { position:{ lat:21.0431, lng:-86.8502 }},
    { position:{ lat:21.143,  lng:-86.8343 }},
    { position:{ lat:21.1411, lng:-86.8945 }},
    { position:{ lat:21.1312, lng:-86.9148 }},
    { position:{ lat:21.1183, lng:-86.8464 }},
    { position:{ lat:20.9382, lng:-89.6186 }},
    { position:{ lat:20.919,  lng:-89.7007 }},
    { position:{ lat:21.1154, lng:-86.9457 }},
    { position:{ lat:20.9488, lng:-89.6496 }},
    { position:{ lat:21.0442, lng:-89.6152 }},

    // Optivosa
    { position:{ lat:21.004,  lng:-89.6878 }},
    { position:{ lat:21.0225, lng:-89.6587 }},
    { position:{ lat:19.8432, lng:-90.5277 }},
    { position:{ lat:20.6390, lng:-87.0698 }},
    { position:{ lat:20.944,  lng:-89.6464 }},
    { position:{ lat:21.1535, lng:-86.8901 }},
    { position:{ lat:21.1891, lng:-86.8686 }},
    { position:{ lat:20.6390, lng:-87.0698 }},
    { position:{ lat:20.9676, lng:-89.6204 }},

  ];

  return (

    <div className='flex flex-col gap-6'>

      {
        isLoaded && 
        <div className='border rounded'>
          <GoogleMap
            mapContainerStyle={{ height:"400px", width:"100%", borderRadius:"0.25rem" }}
            center={{ lat:20.9858054, lng:-89.7844126  }}
            zoom={10}
          >{markers.map((row, index) => <MarkerF key={index} position={row.position}/>)}</GoogleMap>
        </div>
      }

      <div className={`gap-6 flex flex-col md:grid ${gridsAtMd} ${gridsAtLg}`}>

        {locationList.map((row, key) => (
          <div className='bg-neutral-600 flex flex-col items-center justify-center text-center p-6 border rounded' key={key}>
            <span className='font-medium text-xl'>{row.amount}</span>
            <span className='text-lg'>{row.description}</span>
          </div>
        ))}

      </div>

    </div>

  )

}

