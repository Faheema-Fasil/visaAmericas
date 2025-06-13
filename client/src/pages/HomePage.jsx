import React from 'react'
import bg1 from '../assets/HomeBg-1.jpg'
import Carousel from '../components/Home/Carousel'
import HeroForm from '../components/Home/HeroForm'
import Commit from '../components/Home/Commit';
import Carousel2 from '../components/Home/Carousel2';
import Degree360 from '../components/Home/Degree360';

function HomePage() {
  return (
    <>
      {/* hero section */}
      <div
        className="relative bg-cover bg-center py-15"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#073D40] via-[#073D40] to-[#397C7A] opacity-90 transition-all duration-300 rounded-none" />

        <div className='container'>

          <div className=" z-10 flex flex-col sm:flex-row items-center justify-center gap-20">
            <div className="flex-1 sm:w-1/2">
              <Carousel />
            </div>
            <div className="flex-1 sm:w-1/2">
              <HeroForm />
            </div>
          </div>
        </div>
      </div>

      {/* commitment */}
      <Commit/>

      {/* 2nd carousel */}
      <Carousel2/>

    {/* 360 */}
    <Degree360/>
    </>
  );
}


export default HomePage