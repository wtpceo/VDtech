import React from 'react';
import Link from 'next/link';

interface CertificationCardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  icon: React.ReactNode;
  color: {
    light: string;
    main: string;
    dark: string;
  };
  link: string;
  applicationFields: string;
}

const CertificationCard = ({
  title,
  description,
  bulletPoints,
  icon,
  color,
  link,
  applicationFields
}: CertificationCardProps) => {
  const tags = applicationFields.split(', ');
  
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-white border border-gray-100 h-full flex flex-col`}>
      <div className={`h-56 ${color.light} flex items-center justify-center p-6`}>
        <div className="w-40 h-40 text-center">
          {icon}
        </div>
      </div>
      <div className="px-6 py-8 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6 flex-1">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start mb-3 last:mb-0">
              <div className={`flex-shrink-0 w-5 h-5 ${color.light} rounded-full flex items-center justify-center mr-3 mt-1`}>
                <svg className={`w-3 h-3 ${color.dark}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
        
        {tags.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className={`inline-block ${color.light} ${color.dark} text-xs px-2 py-1 rounded-full`}>
                  #{tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="text-center mt-auto">
          <Link 
            href={link}
            className={`inline-flex items-center ${color.main} font-medium hover:${color.dark} transition-colors`}
          >
            자세히 알아보기
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function CertificationCards() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">인증 + 특허 전략 컨설팅</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          혁신 기술의 가치를 인증으로 증명하고 특허로 보호하여 
          공공조달 시장에서 안정적 수익 기반을 구축하는 통합 전략을 제공합니다.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* 녹색기술인증 + 특허 전략 */}
        <div>
          <CertificationCard
            title="녹색기술인증 + 특허 전략"
            description="친환경 기술의 가치를 객관적으로 인증받고 특허로 보호하여 정부조달 시장에서의 환경 경쟁력을 확보합니다."
            bulletPoints={[
              "친환경/에너지효율 핵심 기술 특허화",
              "환경 영향 검증 및 실증 데이터 확보",
              "녹색기술 인증과 연계한 특허권 강화"
            ]}
            icon={
              <svg className="w-full h-full text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12a3 3 0 015.12-2.12L15 10.75M3 21l2-2m10.75-1.25L19 15"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M7 8l2.83 2.83a1 1 0 001.41 0L14 8"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M6 18l4-4 2 2 4-4"></path>
              </svg>
            }
            color={{
              light: "bg-green-50",
              main: "text-green-600",
              dark: "text-green-700"
            }}
            link="/services/green-tech"
            applicationFields="환경센서, 에너지효율화 장비, 자원순환 기술, 친환경 소재"
          />
        </div>
        
        {/* 성능인증 + 특허 전략 */}
        <div>
          <CertificationCard
            title="성능인증 + 특허 전략"
            description="제품의 핵심 성능을 객관적으로 검증하고 차별화 기술 포인트를 특허로 확보하여 시장 경쟁우위를 창출합니다."
            bulletPoints={[
              "객관적 성능 검증을 위한 테스트 설계",
              "성능 차별화 알고리즘/구조 특허화",
              "인증-특허 연계 독점적 시장 포지셔닝"
            ]}
            icon={
              <svg className="w-full h-full text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 4v4m0 4v.01M12 18v.01"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 15h6"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 8l-5 5-5-5"></path>
              </svg>
            }
            color={{
              light: "bg-blue-50",
              main: "text-blue-600",
              dark: "text-blue-700"
            }}
            link="/services/performance"
            applicationFields="산업기기, 의료기기, 제어장치, 정밀측정 기술"
          />
        </div>
        
        {/* 우수조달제품 지정 + 특허 전략 */}
        <div className="md:col-span-2 lg:col-span-2">
          <CertificationCard
            title="우수조달제품 지정 + 특허 전략"
            description="핵심 기술의 특허 독점성을 기반으로 우수조달제품 지정을 획득하여 안정적인 공공시장 매출 기반을 구축합니다."
            bulletPoints={[
              "조달청 심사기준 맞춤형 특허 포트폴리오 구축",
              "기술-품질-실적 통합 인증 전략",
              "특허 활용 혁신성 입증 및 차별화"
            ]}
            icon={
              <svg className="w-full h-full text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 9l-7 7-3-3"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M20 12v-3a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h3"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 14l6-6 2 2-6 6-3-1 1-1z"></path>
              </svg>
            }
            color={{
              light: "bg-indigo-50",
              main: "text-indigo-600",
              dark: "text-indigo-700"
            }}
            link="/services/procurement"
            applicationFields="IT 시스템, 의료설비, 교육용 기자재, 공공시설 장비"
          />
        </div>
      </div>
    </div>
  );
} 