import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaCircleDot } from "react-icons/fa6";

const services = [
    { title: "B-1 Business Visitor Visa", path: "#business" },
    { title: "B-2 Visitor Visa", path: "#visitor" },
    { title: "L-1A New Office Visa", path: "#office" },
    { title: "EB-5 Investor Visa", path: "#investor" },
    { title: "PAF - Public Access Files for H-1B Employers", path: "#PAF" },
    { title: "H-1B Petition filing for Employers", path: "#employers" },
    { title: "H-1B Visa services for Employees", path: "#employees" },
    { title: "Visa for Nurses (RN)", path: "#nurses" },
    { title: "Family Based Visa", path: "#family" },
    { title: "Fiancé Visa", path: "#fiance" },
    { title: "Visa Refusal 221(g)", path: "#refusal" },
    { title: "Student Visa", path: "#student" },
    { title: "TN Visa", path: "#TN" },
    { title: "H-4, E-3D, TD - Dependent visa and EAD (Employment Authorization)", path: "#dependent" },
    { title: "I-485 - Adjustment of status", path: "#adjustment" },
    { title: "E-3 Visa", path: "#E-3" },
    { title: "H-1B1 Singapore Visa", path: "#singapore" }
  ];
  

const ServicesSection = () => {
  const firstColumn = services.slice(0, Math.ceil(services.length / 2));
  const secondColumn = services.slice(Math.ceil(services.length / 2));

  return (
    <div className="bg-[#e9fbf7] ">

    <div className="container py-16  text-[#135c65] font-[Times]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[28px] mb-2">Our array of services</h2>
        <p className="text-[22px] text-gray-700 mb-10">
          Discover our array of services and pick one to learn more about:
        </p>

        <div className="flex flex-col text-left md:flex-row  justify-between">
        
          {[firstColumn, secondColumn].map((column, colIndex) => (
            <ul key={colIndex} className="space-y-4">
              {column.map(({ title, path }, idx) => (
                <li key={idx} className="flex  items-start  gap-2">
                    <div className='flex flex-row  items-center gap-3'>

                  <FaCircleDot className=" text-[#135c65]" maxSize={13} />
                  <HashLink smooth to={path} className=" text-[18px] text-black hover:text-[#25666a] transition-colors">
                    {title}
                  </HashLink>
                    </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServicesSection;
