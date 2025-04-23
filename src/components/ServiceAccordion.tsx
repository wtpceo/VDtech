"use client";

import { useState } from "react";
import Image from "next/image";

interface AccordionItemProps {
  title: string;
  description: string;
  features: string[];
  iconSrc?: string;
  id: string;
  applicationFields?: string;
  color?: {
    light: string;
    main: string;
    dark: string;
  };
}

const AccordionItem = ({ title, description, features, iconSrc, id, applicationFields, color }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const tags = applicationFields ? applicationFields.split(', ') : [];
  
  const defaultColor = {
    light: "bg-blue-50",
    main: "text-blue-600",
    dark: "text-blue-700"
  };
  
  const themeColor = color || defaultColor;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        className={`w-full flex items-center justify-between p-5 text-left bg-white hover:${themeColor.light} transition-colors ${isOpen ? "border-b border-gray-200" : ""}`}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
      >
        <div className="flex items-center">
          {iconSrc ? (
            <div className="w-10 h-10 mr-4 relative flex-shrink-0">
              <Image src={iconSrc} alt={title} width={40} height={40} />
            </div>
          ) : (
            <div className={`w-10 h-10 mr-4 ${themeColor.light} rounded-full flex items-center justify-center flex-shrink-0 ${themeColor.main}`}>
              <span className="font-bold">{title.charAt(0)}</span>
            </div>
          )}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${themeColor.main}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <div
        id={`accordion-content-${id}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-5 bg-white">
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="mb-6">
            <h4 className={`font-bold mb-4 ${themeColor.main}`}>서비스 프로세스</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className={`flex ${themeColor.light} bg-opacity-50 p-3 rounded-lg`}>
                  <div className={`flex-shrink-0 ${themeColor.light} w-8 h-8 rounded-full flex items-center justify-center mr-3`}>
                    <span className={`${themeColor.main} font-bold`}>{index + 1}</span>
                  </div>
                  <div className="text-gray-700">{feature}</div>
                </div>
              ))}
            </div>
          </div>
          
          {tags.length > 0 && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className={`font-bold mb-3 ${themeColor.main}`}>적용 가능 분야</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className={`inline-block ${themeColor.light} ${themeColor.main} text-xs px-2 py-1 rounded-full`}>
                    #{tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface ServiceAccordionProps {
  services: AccordionItemProps[];
}

export default function ServiceAccordion({ services }: ServiceAccordionProps) {
  return (
    <div className="w-full">
      {services.map((service) => (
        <AccordionItem
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          features={service.features}
          iconSrc={service.iconSrc}
          applicationFields={service.applicationFields}
          color={service.color}
        />
      ))}
    </div>
  );
} 