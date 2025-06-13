import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const ServicesComponent = ({isInverted,data}) => {
    return (
        <>
        {!isInverted?

        <section id={data?.id} className="w-full bg-white font-[Vidaloka]">
            <div className="flex flex-col md:flex-row p-5 md:p-0">

                {/* Left Image */}
                <div className="lg:w-6/12 w-full  sm:h-auto">
                    <img
                        src={data?.image}
                        alt="Business Visa"
                        className="w-full h-full rounded-xl md:rounded-none  object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="lg:w-7/12 sm:w-full py-18 px-6 lg:px-15 text-[#046E79]">
                    <h4 className="text-[28px] mb-2">Visa Americas</h4>
                    <h1 className="text-[35px] sm:text-[40px] leading-tight  sm:leading-snug">{data.title}</h1>
                    <div className="h-[2px] w-20 bg-[#3333335c] mb-6"></div>

                    <p className="text-[18px] text-[#45484C] lg:pr-35 mb-6">
                       {data?.description}
                    </p>

                    <p className="text-[18px] text-[#45484C] mb-13">
                        {data?.caption}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-25">
                        <Link
                            to="https://visaamericas.com/b-1-business-visitor-visa/"
                            className="bg-[#046E79] text-[#eac33f] text-[12px] uppercase px-[27px] py-[14px] flex justify-center items-center gap-2 transition-transform duration-300 ease-out hover:bg-[#eac33f] hover:text-[#135c65] hover:translate-y-[-6px]"
                            target="_blank" rel="noopener noreferrer"
                        >

                            <span>Read More</span><FaChevronRight />
                        </Link>
                        <Link
                            to="/enquire"
                            className="bg-[#046E79] text-[#ffffff] text-[12px] uppercase px-[27px] py-[14px] flex justify-center items-center gap-2 transition-transform duration-300 ease-out hover:bg-[#eac33f] hover:text-[#135c65] hover:translate-y-[-6px]"
                            >
                            <span>Enquire Now</span>
                            <FaChevronRight />
                        </Link>
                    </div>
                </div>

            </div>
        </section>


:


         <section className="w-full bg-[#eac23f33] font-[Times]">
                           <div className="flex flex-col md:flex-row-reverse p-5 md:p-0">
               
                               {/* Left Image */}
                               <div className="lg:w-7/12 w-full  sm:h-auto">
                                   <img
                                       src={data?.image}
                                       alt="Business Visa"
                                       className="w-full h-full rounded-xl md:rounded-none  object-cover"
                                   />
                               </div>
               
                               {/* Right Content */}
                               <div className="lg:w-7/12 sm:w-full py-18 px-6 lg:px-15 lg:pl-36 text-[#046E79]">
                                   <h4 className="text-[28px] mb-2">Visa Americas</h4>
                                   <h1 className="text-[35px] sm:text-[40px] leading-tight  sm:leading-snug">{data?.title}</h1>
                                   <div className="h-[2px] w-20 bg-[#3333335c] mb-6"></div>
               
                                   <p className="text-[18px] text-[#45484C]  mb-6">
                                  {data?.description}
        
                                   </p>
               
                                   <p className="text-[18px] text-[#45484C] mb-13">
                                   {data.caption}
                                   </p>
               
                                   {/* Buttons */}
                                   <div className="flex flex-col sm:flex-row gap-3 lg:gap-25">
                                       <Link
                                           to="https://visaamericas.com/b-1-business-visitor-visa/"
                                           className="bg-[#046E79] text-[#eac33f] text-[12px] uppercase px-[27px] py-[14px] flex justify-center items-center gap-2 transition-transform duration-300 ease-out hover:bg-[#eac33f] hover:text-[#135c65] hover:translate-y-[-6px]"
                                           target="_blank" rel="noopener noreferrer"
                                       >
               
                                           <span>Read More</span><FaChevronRight />
                                       </Link>
                                       <Link
                                           to="/enquire"
                                           className="bg-[#046E79] text-[#ffffff] text-[12px] uppercase px-[27px] py-[14px] flex justify-center items-center gap-2 transition-transform duration-300 ease-out hover:bg-[#eac33f] hover:text-[#135c65] hover:translate-y-[-6px]"
                                           >
                                           <span>Enquire Now</span>
                                           <FaChevronRight />
                                       </Link>
                                   </div>
                               </div>
               
                           </div>
                       </section>}
        </>
    );
};

export default ServicesComponent;
