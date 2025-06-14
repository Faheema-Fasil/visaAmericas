import React from 'react';
import { keyServices } from './keyServicesData';

function VisaServices() {
  const services = keyServices.business.visaservice;
  return (
    <section className="py-16 bg-white font-[Vidaloka]">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="w-0.5 h-15 bg-[#33333346] mx-auto mb-6" />
          <h2 className="text-[#005e68] text-[40px] max-w-[557px] font-[Vidaloka] leading-10 text-center">
            {services.title}
          </h2>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {services.cards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#046E79] py-[20px] sm:px-6 flex flex-col w-full lg:w-[48%]"
              style={{ backgroundColor: card.bg, maxWidth: card.width }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-4 px-5 sm:px-[15px] py-[10px]">
                <img
                  className="sm:w-[80px] sm:h-[auto] md:w-[60px] md:h-[auto] object-cover"
                  src={card.image.default}
                  alt={card.title}
                />
                <h3 className="text-[28px] xl:text-start text-[#046E79] font-[Times] leading-8">
                  {card.title}
                </h3>
              </div>
              <p className="text-[15px] md:text-[16px] text-[#45484c] font-[Times] px-5 sm:px-[0px] py-[10px] sm:text-left leading-relaxed text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisaServices;
