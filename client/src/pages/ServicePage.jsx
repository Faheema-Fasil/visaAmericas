import React from 'react'
import AssistanceSection from '../components/Services/AssistanceSection'
import ServicesSection from '../components/Services/ServicesSection'
import { visaServices } from '../components/Services/ServicesData'
import ServicesComponent from '../components/Services/B1Visitor'
import QuickLinkPage from './QuickLinkPage'


function ServicePage() {

  


  return (
    <>
    <div >

      <AssistanceSection/>
        <ServicesSection />
      {visaServices.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <>
          
          <ServicesComponent
            key={index}
            data={item}
            isInverted={!isEven} 
          />
          </>
  );
})}


    
    </div>
    
    </>
  )
}

export default ServicePage
