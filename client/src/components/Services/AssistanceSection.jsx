import React from 'react';

const AssistanceSection = () => {
  return (
    <div className="bg-[#fffdea] font-[Times]">
      <section className="container py-16 ">
        <div className="flex flex-col md:flex-row justify-center  gap-5 md:gap-2 ">
          {/* Left Column */} 
          <div className=" md:w-2/4 lg:w-4/12 content-center">
            <h4 className="text-[#135c65] text-[26px] font-thin mb-2 pl-4">Visa Americas</h4>
            <h2 className="text-[35px] lg:text-[35px] md:font-serif text-[#135c65] border-l-3  border-yellow-400 pl-4 leading-tight flex flex-col sm:flex-row sm:gap-2 md:gap-0 md:flex-col ">
             <span>We are here to </span> 
              <span> assist</span> 
            </h2>
          </div>

          {/* Right Column */}
          {/* <div className="text-[#046E79]  md:w-2/4 lg:w-8/12 text-[17px] lg:text-[18px] lg:leading-tight grid grid-cols-1 lg:grid-cols-2 lg:gap-8 ">
            <p>
              Welcome to Visa Americas, your trusted partner for all your US visa and immigration needs. We specialize in a wide range of visa services and immigration solutions, catering to individuals, families, and businesses seeking entry into the United States.
            </p>
            <p>
              With our extensive knowledge and experience in navigating the complex world of immigration, we are here to make your journey smoother and more efficient.
            </p>
          </div> */}
          <div className="text-[#046E79] text-[17px] lg:text-[18px] lg:leading- md:w-2/4 lg:w-8/12">
  <p className="block lg:grid lg:grid-cols-2 lg:gap-8">
    <span>
      Welcome to Visa Americas, your trusted partner for all your US visa and immigration needs. We specialize in a wide range of visa services and immigration solutions, catering to individuals, families, and businesses seeking entry into the United States.
    </span>
    <span>
      With our extensive knowledge and experience in navigating the complex world of immigration, we are here to make your journey smoother and more efficient.
    </span>
  </p>
</div>

        </div>
      </section>
    </div>
  );
};

export default AssistanceSection;
