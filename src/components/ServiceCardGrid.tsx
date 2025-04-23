"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  iconSrc?: string;
  features: string[];
  slug: string;
  applicationFields?: string;
  color?: {
    light: string;
    main: string;
    dark: string;
  };
}

const ServiceCard = ({ title, description, iconSrc, features, slug, applicationFields, color }: ServiceCardProps) => {
  const tags = applicationFields ? applicationFields.split(', ') : [];
  const defaultColor = {
    light: "bg-blue-50",
    main: "text-blue-600",
    dark: "text-blue-700"
  };
  
  const cardColor = color || defaultColor;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className={`h-20 ${cardColor.light} flex items-center justify-center p-4`}>
        {iconSrc ? (
          <div className="w-12 h-12 relative flex-shrink-0">
            <Image src={iconSrc} alt={title} fill className="object-contain" />
          </div>
        ) : (
          <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${cardColor.main}`}>
            <span className="font-bold text-xl">{title.charAt(0)}</span>
          </div>
        )}
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
  services: ServiceCardProps[];
}

export default function ServiceCardGrid({ services }: ServiceCardGridProps) {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={service.id} className={index === 2 ? "md:col-span-2 lg:col-span-1" : "col-span-1"}>
            <ServiceCard
              id={service.id}
              title={service.title}
              description={service.description}
              iconSrc={service.iconSrc}
              features={service.features}
              slug={service.slug}
              applicationFields={service.applicationFields}
              color={service.color}
            />
          </div>
        ))}
      </div>
    </section>
  );
} 