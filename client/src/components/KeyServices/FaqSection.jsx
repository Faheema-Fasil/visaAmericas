import React, { useState } from 'react';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const faqs = [
    { question: 'Who is eligible for a B-1 Business Visitor Visa?' },
    { question: 'What types of activities are allowed on a B-1 Business Visa?' },
    { question: 'Can I work or receive payment on a B-1 Business Visitor Visa?' },
    { question: 'How long can I stay in the United States on a B-1 Business Visitor Visa?' },
    { question: 'Do I need an invitation letter for the B-1 Business Visitor Visa?' },
];

function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#eac33f2e] py-16 sm:px-4">
            <div className='container   items-center text-center'>

                <div className="text-center sm:px-22">
                    <div className="w-0.5 h-15 bg-[#eac33f] mx-auto mb-6" />
                    <h2 className="text-[40px] text-[#005e68] font-[Vidaloka] leading-10 mb-4">Frequently Asked Questions?</h2>
                    <p className="text-[#046e79] mb-10 font-[Times] text-[17px] sm:text-[22px] text-center md:text-base md:px-35">
                        You can find the most commonly asked questions and their answers right on this page.
                        For any further doubts, please do not hesitate to contact us. We are here to help you.
                    </p>
                </div>

                <div className="space-y-1 text-left scroll-auto">
                    {faqs.map((item, index) => (
                        <div key={index} className="scroll-auto overflow-hidden">
                            <button
                                onClick={() => toggle(index)}
                                className={`w-full flex flex-row gap-1 sm:gap-2 sm:items-center text-start justify-between px-2 h-auto sm:px-8 py-2 sm:py-4 transition-colors duration-300 ${openIndex === index ? 'text-[#eac33f] bg-[#046e79]' : 'bg-[#046e79] text-white'
                                    } text-[17px] font-[Times]`}
                            >
                                <span className="leading-9 w-4/4">{item.question}</span>
                                {openIndex === index ? (
                                    <IoIosArrowDropupCircle size={35} />
                                ) : (
                                    <IoIosArrowDropdownCircle size={35} />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out px-2 sm:px-9 ${
                                    openIndex === index ? 'max-h-96 py-6' : 'max-h-0 py-0'
                                }`}
                            >
                                <p className="text-[18px] text-[#046e79] text-start font-[Times] leading-8">
                                    {item.question} Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                                    quidem quod asperiores, consequatur autem expedita tenetur dolorum minima
                                    laboriosam nobis ullam eos? Libero natus delectus similique recusandae, tempora
                                    tenetur nostrum.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <Link to="/" className="flex flex-col items-center mt-10">
                    <button className="text-[17px] border-1 border-transparent rounded-[3px] font-[Times] text-white px-[37px] py-[15px] bg-[#005e68] uppercase flex justify-center items-center gap-2 transition-transform duration-300 ease-out hover:bg-[#eac33f] hover:text-[#135c65] hover:border-[#135c65] hover:translate-y-[-6px]">
                        Contact Us
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default FaqSection;
