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
    { id:1,   position:{ lat:21.0371, lng:-89.6186 }},
    { id:2,   position:{ lat:21.0121, lng:-89.6181 }},
    { id:3,   position:{ lat:21.0336, lng:-89.6411 }},
    { id:4,   position:{ lat:21.1574, lng:-86.8657 }},
    { id:5,   position:{ lat:21.0501, lng:-89.6133 }},
    { id:6,   position:{ lat:21.0173, lng:-89.5968 }},
    { id:7,   position:{ lat:21.0105, lng:-89.6019 }},
    { id:8,   position:{ lat:20.9961, lng:-89.6121 }},
    { id:9,   position:{ lat:20.9984, lng:-89.6021 }},
    { id:10,  position:{ lat:21.0222, lng:-89.6362 }},
    { id:11,  position:{ lat:20.9922, lng:-89.6062 }},
    { id:12,  position:{ lat:20.9913, lng:-89.6406 }},
    { id:13,  position:{ lat:21.0209, lng:-89.6141 }},
    { id:15,  position:{ lat:21.0153, lng:-89.6080 }},
    { id:16,  position:{ lat:21.0317, lng:-89.5960 }},
    { id:14,  position:{ lat:20.9213, lng:-89.6456 }},
    { id:17,  position:{ lat:21.0659, lng:-89.6033 }},
    { id:18,  position:{ lat:21.1105, lng:-89.6526 }},
    { id:19,  position:{ lat:21.0442, lng:-89.6239 }},
    { id:20,  position:{ lat:20.9600, lng:-89.6273 }},
    { id:21,  position:{ lat:20.9575, lng:-89.6288 }},
    { id:22,  position:{ lat:21.0329, lng:-89.5973 }},
    { id:23,  position:{ lat:21.0375, lng:-89.5882 }},
    { id:24,  position:{ lat:20.9853, lng:-89.6219 }},
    { id:25,  position:{ lat:21.0633, lng:-89.6217 }},
    { id:26,  position:{ lat:21.0629, lng:-89.6216 }},
    { id:27,  position:{ lat:21.0220, lng:-89.5867 }},
    { id:28,  position:{ lat:21.0013, lng:-89.6084 }},
    { id:29,  position:{ lat:20.9959, lng:-89.6129 }},
    { id:30,  position:{ lat:19.8439, lng:-90.5161 }},
    { id:31,  position:{ lat:21.0235, lng:-89.5845 }},
    { id:32,  position:{ lat:21.0235, lng:-89.5845 }},
    { id:33,  position:{ lat:21.0926, lng:-89.6162 }},
    { id:34,  position:{ lat:21.0176, lng:-89.6218 }},
    { id:35,  position:{ lat:21.0176, lng:-89.6112 }},
    { id:36,  position:{ lat:20.9994, lng:-89.6113 }},
    { id:37,  position:{ lat:21.0959, lng:-89.6258 }},
    { id:38,  position:{ lat:21.0125, lng:-89.6161 }},
    { id:39,  position:{ lat:20.9882, lng:-89.6240 }},
    { id:40,  position:{ lat:20.9936, lng:-89.6140 }},
    { id:41,  position:{ lat:20.9939, lng:-89.5641 }},
    { id:42,  position:{ lat:21.0361, lng:-89.6140 }},
    { id:43,  position:{ lat:21.0066, lng:-89.5851 }},
    { id:44,  position:{ lat:21.0265, lng:-89.6102 }},
    { id:45,  position:{ lat:21.0271, lng:-89.6185 }},
    { id:46,  position:{ lat:21.0328, lng:-89.5904 }},
    { id:47,  position:{ lat:21.0662, lng:-89.5515 }},
    { id:48,  position:{ lat:21.1169, lng:-89.6734 }},
    { id:49,  position:{ lat:21.0663, lng:-89.6292 }},
    { id:50,  position:{ lat:21.0567, lng:-89.5367 }},
    { id:51,  position:{ lat:21.0587, lng:-89.5363 }},
    { id:52,  position:{ lat:20.9689, lng:-89.6133 }},
    { id:53,  position:{ lat:20.9686, lng:-89.6136 }},
    { id:54,  position:{ lat:20.9623, lng:-89.6622 }},
    { id:55,  position:{ lat:20.9717, lng:-89.6239 }},
    { id:56,  position:{ lat:21.0155, lng:-89.5960 }},
    { id:57,  position:{ lat:21.0342, lng:-89.6395 }},
    { id:58,  position:{ lat:21.3141, lng:-89.5008 }},
    { id:59,  position:{ lat:21.2767, lng:-89.7155 }},
    { id:60,  position:{ lat:21.2961, lng:-89.6025 }},
    { id:61,  position:{ lat:21.3122, lng:-89.5177 }},
    { id:62,  position:{ lat:21.0379, lng:-89.5529 }},
    { id:63,  position:{ lat:21.3444, lng:-89.2534 }},
    { id:64,  position:{ lat:21.3042, lng:-89.5599 }},
    { id:65,  position:{ lat:21.0490, lng:-89.6100 }},
    { id:66,  position:{ lat:21.0144, lng:-89.6470 }},
    { id:67,  position:{ lat:20.9994, lng:-89.6113 }},
    { id:68,  position:{ lat:21.0070, lng:-89.6131 }},
    { id:69,  position:{ lat:20.9837, lng:-89.6219 }},
    { id:70,  position:{ lat:21.0574, lng:-89.6223 }},
    { id:71,  position:{ lat:20.9971, lng:-89.5777 }},
    { id:72,  position:{ lat:20.9904, lng:-89.6231 }},
    { id:73,  position:{ lat:20.0647, lng:-90.5979 }},
    { id:74,  position:{ lat:21.0451, lng:-89.5958 }},
    { id:75,  position:{ lat:21.0768, lng:-89.6695 }},
    { id:76,  position:{ lat:21.0477, lng:-89.6609 }},
    { id:77,  position:{ lat:21.0061, lng:-89.6283 }},
    { id:78,  position:{ lat:21.0351, lng:-89.5438 }},
    { id:79,  position:{ lat:21.0144, lng:-89.6215 }},
    { id:80,  position:{ lat:20.9812, lng:-89.6071 }},
    { id:81,  position:{ lat:20.9811, lng:-89.6071 }},
    { id:82,  position:{ lat:21.0153, lng:-89.6017 }},
    { id:83,  position:{ lat:21.0185, lng:-89.5872 }},
    { id:84,  position:{ lat:21.0255, lng:-89.5862 }},
    { id:85,  position:{ lat:21.0356, lng:-89.5967 }},
    { id:86,  position:{ lat:21.3533, lng:-89.1678 }},
    { id:87,  position:{ lat:21.3033, lng:-89.5624 }},
    { id:88,  position:{ lat:20.9496, lng:-89.6156 }},
    { id:89,  position:{ lat:21.0169, lng:-89.6381 }},
    { id:90,  position:{ lat:21.0946, lng:-89.6171 }},
    { id:91,  position:{ lat:21.0118, lng:-89.6343 }},
    { id:92,  position:{ lat:21.1207, lng:-89.5943 }},
    { id:93,  position:{ lat:21.0016, lng:-89.6835 }},
    { id:94,  position:{ lat:20.9316, lng:-89.0173 }},
    { id:95,  position:{ lat:20.9315, lng:-89.0173 }},
    { id:96,  position:{ lat:20.9318, lng:-89.0118 }},
    { id:97,  position:{ lat:20.9337, lng:-89.0235 }},
    { id:98,  position:{ lat:20.9318, lng:-89.0118 }},
    { id:99,  position:{ lat:20.982,  lng:-89.6422 }},
    { id:100, position:{ lat:20.9827, lng:-89.6653 }},
    { id:101, position:{ lat:21.018,  lng:-89.6169 }},
    { id:102, position:{ lat:21.0233, lng:-89.6148 }},
    { id:103, position:{ lat:21.0181, lng:-89.6088 }},
    { id:104, position:{ lat:21.0146, lng:-89.6213 }},
    { id:105, position:{ lat:21.107,  lng:-89.6461 }},
    { id:106, position:{ lat:19.8447, lng:-90.5388 }},
    { id:107, position:{ lat:21.0006, lng:-89.6266 }},
    { id:108, position:{ lat:21.2759, lng:-89.6605 }},
    { id:109, position:{ lat:21.0345, lng:-89.6104 }},
    { id:110, position:{ lat:21.2901, lng:-89.6360 }},
    { id:111, position:{ lat:21.0232, lng:-89.6044 }},
    { id:112, position:{ lat:21.0008, lng:-89.5994 }},
    { id:113, position:{ lat:21.0273, lng:-89.5738 }},
    { id:114, position:{ lat:21.0181, lng:-89.6088 }},
    { id:115, position:{ lat:21.0244, lng:-89.6161 }},
    { id:116, position:{ lat:21.0125, lng:-89.5915 }},
    { id:117, position:{ lat:20.9796, lng:-89.6248 }},
    { id:118, position:{ lat:21.0111, lng:-89.5697 }},
    { id:119, position:{ lat:21.0013, lng:-89.6812 }},
    { id:120, position:{ lat:20.9834, lng:-89.6334 }},
    { id:121, position:{ lat:21.0108, lng:-89.5768 }},
    { id:122, position:{ lat:21.0326, lng:-89.6192 }},
    { id:123, position:{ lat:20.9938, lng:-89.6138 }},
    { id:124, position:{ lat:21.0233, lng:-89.6039 }},
    { id:125, position:{ lat:21.0098, lng:-89.6036 }},
    { id:126, position:{ lat:20.9988, lng:-89.6069 }}
  ]

  return (

    <div className='flex flex-col gap-6 bg-neutral-200'>

      {
        isLoaded && 
        <GoogleMap
          mapContainerStyle={{ height: "400px", width: "100%" }}
          center={{ lat:20.9858054, lng:-89.7844126  }}
          zoom={10}
        >{markers.map((row, index) => <MarkerF key={index} position={row.position}/>)}</GoogleMap>
      }

      <div className={twMerge(clsx(`flex flex-col md:grid ${gridsAtMd} ${gridsAtLg} bg-neutral-200 gap-6`))}>

        {locationList.map((row, key) => (

          <div className='flex flex-col items-center justify-center shadow text-center p-6 bg-white' key={key}>
            
            <span className='font-medium text-xl'>{row.amount}</span>

            <span className='text-lg'>{row.description}</span>

          </div>

        ))}

      </div>

    </div>

  )

}

