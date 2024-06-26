// Modules
import { useState } from 'react'

// Classes
import ButtonClass from '../../../classes/ButtonClass';

// Sections
import HouseSection from './HouseSection';
import CompanySection from './CompanySection';

export default function SelectHouseOrCompanySection () {

  // Vars
  const [ isShowingHouseSection, setIsShowingHouseSection ] = useState(true);

  // Toggle
  const toggleSection = (isShowing:boolean) => { setIsShowingHouseSection(isShowing) }

  const houseMainImage = {
    backgroundImage:'url(/images/screens/financiamiento/img4.jpg)',
    backgroundSize:'cover',
    backgroundPosition:'center',
    height:'100vh'
  }
  
  const companyMainImage = {
    backgroundImage:'url(/images/screens/financiamiento/img5.jpg)',
    backgroundSize:'cover',
    backgroundPosition:'center',
    height:'100vh'
  }

  const currentBackground = (isShowingHouseSection) 
    ? houseMainImage 
    : companyMainImage;

  return (

    <section>

      <div className='h-screen p-6 flex items-end justify-center' style={currentBackground}>

        <div className="flex gap-4">

          <button 
            className={isShowingHouseSection ? ButtonClass.WhiteButtonClass : ButtonClass.BlackButtonClass} 
            onClick={() => toggleSection(true)}
          >Para Casas</button>
        
          <button 
            className={isShowingHouseSection ? ButtonClass.BlackButtonClass : ButtonClass.WhiteButtonClass}
            onClick={() => toggleSection(false)}
          >Para Empresas</button>

        </div>

      </div>

      {isShowingHouseSection ? <HouseSection/> : <CompanySection/>}

    </section>

  )

}