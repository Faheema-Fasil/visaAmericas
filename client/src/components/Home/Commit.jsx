import React from 'react'
import img from '../../assets/NY.jpeg'

function Commit() {
    return (
        <>
            <div className="bg-[#fcf9e5]">
                <div className="container py-15">
                    <div className="flex flex-col sm:flex-row items-center lg:gap-25 gap-8">
                        <div className="text-[40px] leading-[40px] font-[Vidaloka] font-bold text-[#005e68] px-6 border-l-4 border-[#EAC33F] mb-8">
                            <h1>Our <br />Commitment</h1>
                        </div>
                        <div className="lg:flex lg:flex-row font-[TimesNewRoman] text-[18px] text-[#45484c] gap-10">
                            <span>At VisaAmericas.com, we are dedicated to simplifying the immigration process and helping you achieve your US immigration goals. We are committed to your success. Our passion for</span>
                            <span>helping individuals and businesses achieve their immigration goals is evident in every aspect of our services. Trust us to be your reliable partner in your journey to the United States.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#046E79]">
                <div className="container py-20 text-center sm:text-left flex flex-col sm:flex-row gap-20">
                    <div className="flex-1">
                        <div className='flex flex-col gap-6'>
                            <p className='text-[28px] font-[Vidaloka] text-[#EAC33F] font-bold'>Visa Americas</p>
                            <p className="text-[40px] leading-[40px] font-[Vidaloka] text-white font-bold">Your Trusted Immigration <br /> Services Provider</p>
                            <div className="w-[80px] h-[2px] bg-[#7FECF7] mx-auto sm:mx-0"></div>
                            <p className='text-[28px] font-[Vidaloka] text-[#EAC33F] font-bold'>About Us</p>
                            <p className="text-white font-[TimesNewRoman] text-[18px]">
                                We are dedicated to simplifying your journey to the United States. As a leading immigration services website, we strive to provide reliable, efficient, and affordable solutions to individuals and businesses seeking visas and immigration assistance. With our expert guidance and unwavering commitment to your success, we are here to help you navigate the complex world of U.S. immigration seamlessly.
                            </p>
                        </div>
                        <a href="">
                            <div className="button mt-14 inline-block bg-[#7fecf7] text-black px-[30px] py-[18px] border-3 border-white hover:bg-[#EAC33F] hover:text-[#005e68] transform transition-transform duration-400 hover:-translate-y-2">
                                <p className='font-[Karla] text-[13px] '>REAM &nbsp;MORE&nbsp; &gt;</p>
                            </div>
                        </a>
                    </div>
                    <div className="flex-1">
                        <img src={img} className='sm:h-[200px] md:h-[300px] w-full rounded-sm' alt="" />
                        <p className='text-[24px] font-[Vidaloka] text-[#EAC33F] font-bold my-6'>Visa Americas</p>
                            <p className="text-white font-[TimesNewRoman] text-[18px]">
                                Our mission at VisaAmericas.com is to provide reliable and affordable visa services to individuals and businesses seeking to travel to the United States. We are committed to delivering trustworthy guidance and streamlined processes, ensuring that our clients can navigate the complexities of the visa application process with ease. 
                            </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Commit