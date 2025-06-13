import React from 'react'
import bg from '../../assets/HomeBg-2.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel2() {
    const slides = [
        {
            title: "Attorney Connect",
            desc: "Need expert Legal Advice about your US immigration case? We can connect you with experienced Immigration Attorneys in the US- Affordable and Reliable..",
            button: "Connect Now",
            link: "#",
            bgColor: "bg-[#FAF3DB]"
        },
        {
            title: "Any of your immediate family is in the US?",
            desc: "Maybe you are also eligible for a US green card. We can help",
            button: "Schedule a Free Consultation",
            link: "#",
            bgColor: "bg-[#E9FBDC]"
        },
        {
            title: "Are you a Nurse with US NCLEX-RN?",
            desc: "Exploring exciting employment as RS in the US? Contact us to check your options.",
            button: "Enquire Details",
            link: "#",
            bgColor: "bg-[#DCECFB]"
        },
        {
            title: "US Visa Refused?",
            desc: "Has your visa been refused by the embassy or consulate under 221(g)? You may need professional help to address this query. We can provide the assistance you need.",
            button: "Know More",
            link: "#",
            bgColor: "bg-[#DCFBE9]"
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "ease-in-out",
        autoplaySpeed: 5000,
        arrows: false,
        appendDots: dots => (
            <div className="relative z-10 mt-4">
                <ul className="flex justify-center">{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-2 h-2 bg-[#046E79] rounded-full hover:bg-[#005E68] transition duration-200"></div>
        )
    };
    return (
        <>
            <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
                {/* Transparent overlay */}
                <div className="absolute inset-0 bg-white " style={{ opacity: 0.92 }}></div>

               <div className=''>
                    {/* Content over the image */}
                    <div className="w-[100%] mx-auto sm:py-25 p-[30px]">
                        <Slider {...settings}>
                            {slides.map((slide, index) => (
                                <div key={index}>
                                    <div className={` ${slide.bgColor} text-white px-8 py-8 text-center container`} style={{ opacity: 0.9 }}>
                                        <h2 className="text-[40px] font-bold font-[Vidolka] mb-4 text-[#005E68]">{slide.title}</h2>
                                        <p className="text-[22px] mb-4 font-[TimesNewEmpire] text-[#45484c]">{slide.desc}</p>
                                        <a href={slide.link} className=''>
                                            <button className="bg-[#005E68] hover:bg-[#eac33f] border-[2px] border-[white] text-white text-[18px] font-[TimesNewRoman] px-[24px] py-[10px] rounded-xs transition">
                                                {slide.button}
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
               </div>
            </div>

        </>
    )
}

export default Carousel2