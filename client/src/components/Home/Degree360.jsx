import React from 'react'
import bg from '../../assets/HomeBg-3.jpg'
import { motion } from "framer-motion";

function Degree360() {
    return (
        <>
            <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
                <div className="absolute inset-0 bg-[#046e79]/70 z-0"></div>

                <div className="container relative z-10 py-12">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex-1">
                            <div className='flex flex-col gap-8'>
                                <p className="text-[28px] font-[Vidaloka] text-white font-bold">360 Degree</p>
                                <p className="text-[40px] leading-[40px] font-[Vidaloka] text-[#EAC33F] font-bold">
                                    US Immigration <br /> Support Services
                                </p>
                                <p className="text-white font-[TimesNewRoman] text-[18px] mt-4">
                                    Welcome to Visa Americas, your trusted partner for all your US visa and immigration needs. We specialize in a wide range of visa services and immigration solutions, catering to individuals, families, and businesses seeking entry into the United States.
                                </p>
                            </div>
                            <a href="">
                                <div className="button mt-14 inline-block hover:border-[#7fecf7] text-black px-[30px] py-[18px] border-3 border-white hover:bg-white bg-[#EAC33F] hover:text-[#005e68] transform transition-transform duration-400 hover:-translate-y-2">
                                    <p className='font-[Karla] text-[13px] '>ALL &nbsp;SERVICES&nbsp; &gt;</p>
                                </div>
                            </a>
                        </div>
                        <div className="flex-1 mt-15 lg:mt-0">
                            <div className="flex flex-col gap-5 mt-15 sm:mt-0">

                                {/* Row 1 */}
                                <div className='flex flex-col sm:flex-row gap-5'>
                                    {/* card 1 */}
                                    <a className='flex-1'>
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            className="bg-[#fcf9e5] transition duration-500 ease-in-out hover:bg-white hover:border-[#EAC33F] py-10 px-4 text-center border-t-4 border-[#7FECF7]"
                                        >
                                            <p className="text-[28px] font-[Vidaloka] text-[#005e68] font-bold">B1 Business Visa</p>
                                            <p className="text-[#45484c] font-[TimesNewRoman] text-[18px] mt-4">
                                                A non-immigrant visa that allows individuals to enter the United States temporarily for business purposes.
                                            </p>
                                        </motion.div>
                                    </a>

                                    {/* card 2 */}
                                    <a className='flex-1'>
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            className="bg-white transition duration-500 hover:border-[#EAC33F] py-10 px-4 text-center border-t-4 border-[#7FECF7]"
                                        >
                                            <p className="text-[28px] font-[Vidaloka] text-[#005e68] font-bold">EB-5 Investor Visa</p>
                                            <p className="text-[#45484c] font-[TimesNewRoman] text-[18px] mt-4">
                                                It offers foreign investors the opportunity to obtain a Green Card by making a qualifying investment.
                                            </p>
                                        </motion.div>
                                    </a>
                                </div>

                                {/* Row 2 */}
                                <div className='flex flex-col sm:flex-row gap-5'>
                                    {/* card 3 */}
                                    <a className='flex-1'>
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            className="bg-white transition duration-500 hover:border-[#EAC33F] py-10 px-4 text-center border-t-4 border-[#7FECF7]"
                                        >
                                            <p className="text-[28px] font-[Vidaloka] text-[#005e68] font-bold">Student Visa</p>
                                            <p className="text-[#45484c] font-[TimesNewRoman] text-[18px] mt-4">
                                                A nonimmigrant visa category that allows foreign nationals to pursue academic studies in the United States at accredited educational institutions.
                                            </p>
                                        </motion.div>
                                    </a>

                                    {/* card 4 */}
                                    <a className='flex-1'>
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            className="bg-[#fcf9e5] transition duration-500 hover:bg-white hover:border-[#EAC33F] py-10 px-4 text-center border-t-4 border-[#7FECF7]"
                                        >
                                            <p className="text-[28px] font-[Vidaloka] text-[#005e68] font-bold">Nurse’s Visa</p>
                                            <p className="text-[#45484c] font-[TimesNewRoman] text-[18px] mt-4">
                                                A pathway for registered nurses to live and work in the United States, addressing the growing demand for qualified healthcare professionals.
                                            </p>
                                        </motion.div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Degree360
