import React, { useRef } from 'react';
import bg from '../../assets/HomeBg-2.jpg';
import { motion as Motion, useInView } from 'framer-motion';

const MotionDiv = Motion.div;
const MotionButton = Motion.button;

function ExpertConnect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[#046e79] opacity-95"></div>

      <MotionDiv
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-[35px] sm:px-[30px] md:px-[10px] lg:px-[20px] xl:px-[120px] mx-auto relative z-10 flex flex-col items-center gap-6 justify-center text-center py-30 "
      >
        <h2 className="text-[55px] leading-11 font-[Vodaloka]">Expert Connect</h2>
        <p className="text-[20px] sm:text-[20px] md:text-[22px] font-thin text-[#eac33f] text-center font-[Times] px-[5px] sm:px-[8px]  md:px-[40px] lg:px-[105px] xl:px-[160px]">
          Contact us today to learn more about how we can assist you in obtaining your B-1 Business
          Visitor Visa and take a step closer to your business goals in the United States.
        </p>
        <MotionButton
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-13 text-[18px] border-2 bg-[#005e68] rounded-[3px] font-[Times] border-white text-white px-8 py-3 hover:bg-white hover:text-[#046e79] transition duration-300"
        >
          Connect Now
        </MotionButton>
      </MotionDiv>
    </section>
  );
}

export default ExpertConnect;
