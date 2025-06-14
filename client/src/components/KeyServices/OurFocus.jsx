import React from 'react';

function OurFocus() {
  return (
    <div className="bg-[#f2fbff] font-[Times]">
      <section className="container py-20">
        <div className="flex flex-col md:flex-row justify-between lg:justify-center gap-5 md:gap-2">
          {/* Left Column */}
          <div className="w-full md:w-2/4 lg:w-4/12 content-center">
            <h2 className="text-[35px] text-[#135c65] font-[Vidaloka] border-l-3 border-[#eac33f] pl-9 leading-tight">
              <span>Our</span>
              <br />
              <span>Focus</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="text-[#45484c] text-[17px]  sm:text-[15px] font-[Times] lg:text-[15px] text-start md:w-2/4 lg:w-8/12">
                            <p className="block lg:grid  lg:grid-cols-2 lg:gap-8">
                                <span>
                                    Please note that our services focus on providing consultation and assistance with the visa process for registered nurses. We recommend consulting with legal
                                </span>
                                <span>
                                    professionals for legal advice specific to your unique circumstances.
                                </span>
                            </p>
                        </div>
        </div>
      </section>
    </div>
  );
}

export default OurFocus;
