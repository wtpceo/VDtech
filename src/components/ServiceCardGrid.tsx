"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  iconType: 'certification' | 'performance' | 'support';
  features: string[];
  slug: string;
  applicationFields?: string;
  color?: {
    light: string;
    main: string;
    dark: string;
  };
}

const IconComponents = {
  certification: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  performance: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  support: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

const ServiceCard = ({ title, description, iconType, features, slug, applicationFields, color }: ServiceCardProps) => {
  const tags = applicationFields ? applicationFields.split(', ') : [];
  const defaultColor = {
    light: "bg-blue-50",
    main: "text-blue-600",
    dark: "text-blue-700"
  };
  
  const cardColor = color || defaultColor;
  const IconComponent = IconComponents[iconType];
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className={`h-20 ${cardColor.light} flex items-center justify-center p-4`}>
        <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${cardColor.main}`}>
          <IconComponent />
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6 flex-1">
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className={`flex-shrink-0 w-5 h-5 ${cardColor.light} rounded-full flex items-center justify-center mr-3 mt-1`}>
                  <svg className={`w-3 h-3 ${cardColor.dark}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        
        {tags.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className={`inline-block ${cardColor.light} ${cardColor.main} text-xs px-2 py-1 rounded-full`}>
                  #{tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-auto text-center">
          <Link 
            href={`/services/${slug}`} 
            className={`inline-block ${cardColor.main} border border-current font-medium py-2 px-6 rounded-lg hover:${cardColor.dark} transition-colors`}
          >
            자세히 보기
          </Link>
        </div>
      </div>
    </div>
  );
};

interface ServiceCardGridProps {
  services: Array<Omit<ServiceCardProps, 'iconType'> & {
    iconType: 'certification' | 'performance' | 'support';
  }>;
}

export default function ServiceCardGrid({ services }: ServiceCardGridProps) {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={service.id} className={index === 2 ? "md:col-span-2 lg:col-span-1" : "col-span-1"}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
} 