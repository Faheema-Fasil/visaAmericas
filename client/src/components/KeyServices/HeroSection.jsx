import React from 'react'

function HeroSection() {
    return (
        <>
          <div className="bg-[#eac33f2e]  pt-20 pb-16 font-[Times]">
      <div className="container  flex  flex-col lg:flex-row items-center  gap-9 xl:gap-0 justify-around">
        {/* Text Section */}
        <div className="flex-1 text-center  md:text-start">

        <div className=" ">
          <h5 className="text-[#046E79] text-[28px] font-[Vidaloka] mb-2">Visa Americas</h5>
          <h2 className="text-[#046E79] text-[38px] xl:text-[40px] leading-9  font-[Vidaloka] mb-3">
            B-1 Business Visitor Visa
          </h2>
          <span className="w-14 h-0.5 bg-[#eac33f] mb-5 mx-auto md:mx-0 block"></span>

          </div>
          <div>
          <p className="text-[#45484C] xl:leading-8 text-[20px] xl:pr-15">
            At visaamericas.com, we offer professional assistance and guidance
            for individuals seeking to obtain a B-1 Business Visitor Visa. Our
            dedicated team of experienced immigration experts is committed to
            helping you navigate the complexities of the visa application
            process and maximize your chances of a successful outcome.
          </p>
        </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://visaamericas.com/wp-content/uploads/2023/07/B-2-Visitor-Visa.jpg"
            alt="Business Visa"
            className=" w-full h-full rounded-[4px] object-cover"
          />
        </div>
      </div>
    </div>
            
        </>
    )
}

export default HeroSection
