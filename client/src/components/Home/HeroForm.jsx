import React, { useState } from 'react'

function HeroForm() {
    const [formData,setFormData]=useState({
        name:"",
        number:"",
        email:""
    })

    return (
        <>
            <div className="h-full bg-[#fcf9e5] relative rounded-l-sm">
                <div className=" p-6 sm:px-8 pb-12 rounded-lg shadow-md">
                    <h2 className="text-[40px] font-bold font-[Vidaloka] text-center text-[#005E68] mb-4">Quick Contact</h2>
                    <p className="text-center text-[20px] font-[TimesNewRoman] text-[#45484C] mb-[10px] sm:mb-[40px] px-[20px] py-[10]">“Connect with our expert consultants to learn about US Visa”</p>
                    <form className='font-[TimesNewRoman] text-[18px] font-light'>
                        <div className='flex sm:flex-row flex-col sm:gap-4'>
                            <div className="mb-4">
                                <input
                                onChange={(e)=>{setFormData({...formData,name:e.target.value})}}
                                value={formData.name}
                                    type="text"
                                    placeholder="Name*"
                                    className="w-full p-3 bg-white rounded-xs focus:outline-none focus:ring-1 focus:ring-gray-200 text-[#005e68]"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                onChange={(e)=>{setFormData({...formData,number:e.target.value})}}
                                value={formData.number}
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full p-3 bg-white rounded-xs focus:outline-none focus:ring-1 focus:ring-gray-200 text-[#005e68]"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <input
                            onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
                                value={formData.email}
                                type="email"
                                placeholder="Email Address*"
                                className="w-full p-3 bg-white rounded-xs focus:outline-none focus:ring-1 focus:ring-gray-200 text-[#005e68]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#005e68] text-white p-3 rounded-sm hover:bg-black transform transition-transform duration-400 hover:-translate-y-2"
                        >
                            Connect Us
                        </button>
                    </form>
                </div>



            </div>
        </>
    )
}

export default HeroForm