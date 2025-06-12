import React from 'react';

const quickLinks = [
  {
    title: "Apply for US Visa: Fill in your DS 160 here",
    url: "https://ceac.state.gov/genniv/"
  },
  {
    title: "Schedule your Visa Appointments: India",
    url: "https://www.ustraveldocs.com/in/"
  },
  {
    title: "Check and print your latest I-94 and USA travel history",
    url: "https://i94.cbp.dhs.gov/I94/#/home"
  },
  {
    title: "Do you have pending Petitions with USCIS? Check status here",
    url: "https://egov.uscis.gov/casestatus/landing.do"
  },
  {
    title: "Do you have pending Petitions with USCIS? Check normal processing times here",
    url: "https://egov.uscis.gov/processing-times/"
  },
  {
    title: "Are you a Beneficiary of an Immigrant Petition? Check the current Visa Bulletin here",
    url: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html"
  }
];

function QuickLinkPage() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-15 px-4" style={{
      backgroundImage: `url('https://visaamericas.com/wp-content/uploads/2023/07/Visa-Americas-About.jpeg')`
    }}>

      <div className="absolute inset-0 bg-white opacity-80 transition-all duration-300"></div>


      <div className="relative z-10 px-[35px] sm:px-[30px] md:px-[50px] xl:px-[150px] mx-auto">
        <h4 className="text-center text-[36px] sm:text-[42px] font-[Vidaloka] text-[#005e68] mb-16">
          Important page links
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {quickLinks.map((link, idx) => (
            <div
              key={idx}
              className="bg-[#006a6e] text-white py-[55px] px-[45px] flex flex-col gap-10 justify-between border border-transparent hover:border-green-500 transition-all duration-300"
            >
              <p className="text-center font-[Times] text-[18px] leading-relaxed mb-6">
                {link.title}
              </p>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto w-fit px-8 py-3 border-2 border-white text-[#EAC33F] text-[13px] font-semibold bg-[#005E68] hover:bg-[#EAC33F] hover:text-[#005E68] transition duration-300"
              >
                VISIT WEBSITE
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickLinkPage;
