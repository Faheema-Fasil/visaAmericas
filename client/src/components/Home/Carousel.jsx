import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
    {
        title: 'EB-5 Investment visa',
        desc: 'Invest in America and get Green Card for you and your Family',
        button: 'Know More',
        link: ""
    },
    {
        title: 'L-1A Visa',
        desc: 'You can start your business in USA with future option for Green Card for you and family',
        button: 'Know More',
        link: ""

    },
    {
        title: 'H-1B Employers',
        desc: 'Are you legally compliant? Keep your Public Access Files ready to face USCIS/ DOL audits any time. We can help to prepare your PAFs',
        button: 'Know More',
        link: ""

    },
    {
        title: 'Attorney Connect',
        desc: 'Need expert Legal Advice about your US immigration case? We can connect you with experienced Immigration Attorneys in US- Affordable and Reliable.',
        button: 'Connect Us',
        link: ""

    }, {
        title: 'Family Visa',
        desc: 'Any of your immediate family is in US? May be you are also eligible for a US greencard. We can help',
        button: 'Know More',
        link: ""

    }, {
        title: 'Business Visa',
        desc: 'Want to visit USA for business or pleasure? Confused about filing your visaapplication? We can help.',
        button: 'Know More',
        link: ""

    }, {
        title: 'Academic/Work Experience Evaluation',
        desc: 'Need an Academic or Work Experience Evaluation for US Visa? We can help to obtain evaluations compliant to USCIS regulations and practices.',
        button: 'Connect Us',
        link: ""

    }, {
        title: 'Visa refusal 221(g)',
        desc: 'Your visa refused by embassy/consulate under 221(g)? You need professional help to address the query.. we can help',
        button: 'Know More',
        link: ""

    }, {
        title: 'Nurse Visa',
        desc: 'Are you a Nurse with US NCLEX-RN? Exploring exciting employment as RS in the US? Contact us to check your options.',
        button: 'Know More',
        link: ""

    },
];

function Carousel() {
    return (
        <>
            {/* Swiper content */}
            <div className=" z-10 w-full max-w-xs sm:max-w-4xl px-6 text-center text-white">
                <Swiper
                    className="hero-swiper"
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }} loop={true}
                    speed={800}
                >

                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center justify-center h-[70vh] slide-content">
                                <h2 className="text-[40px] font-bold font-[Vidaloka] leading-[40px] text-[#eac33f] mb-4">{slide.title}</h2>
                                <p className="text-base text-[22px] mb-6 font-[TimesNewRoman] max-w-lg break-words">{slide.desc}</p>
                                <a href={slide.link}>
                                    <button className="bg-[#54F9F5] hover:bg-[#eac33f] border-[2px] border-[white] text-[#005E68] text-[18px] font-[TimesNewRoman] px-[24px] py-[10px] rounded-sm shadow-lg transition">
                                        {slide.button}
                                    </button>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>);
}

export default Carousel;
