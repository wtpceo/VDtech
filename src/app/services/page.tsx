import React from 'react';
import CertificationCards from '@/components/CertificationCards';
import Link from 'next/link';

// 내부 FeatureCard 컴포넌트
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mb-4 text-indigo-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// 내부 FeatureCards 컴포넌트
function FeatureCards() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: "인증-특허 통합 전략",
      description: "인증과 특허를 별개로 접근하지 않고, 하나의 통합된 전략으로 설계하여 시너지 효과를 극대화합니다."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: "분야별 전문가 협업",
      description: "인증 전문가, 특허 변리사, 기술 엔지니어가 함께 협업하여 최적의 결과물을 도출합니다."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "결과 중심 프로세스",
      description: "단순한 인증 취득이나 특허 출원에 그치지 않고, 실질적인 비즈니스 성과로 이어지는 프로세스를 제공합니다."
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <FeatureCard 
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

const servicesList = [
  {
    id: 'green-tech',
    title: '녹색기술인증 + 특허 전략',
    description: '친환경 기술의 가치를 객관적으로 인증받고 특허로 보호하여 정부조달 시장에서의 환경 경쟁력을 확보합니다.',
    features: [
      {
        title: '녹색기술 인증을 위한 특허 전략',
        description: '인증 심사 기준에 최적화된 특허 포트폴리오를 구축하여 기술의 혁신성과 환경개선 효과를 입증합니다.'
      },
      {
        title: '친환경 기술 성능 검증 및 데이터 확보',
        description: '에너지 절감, 자원 효율화, 환경 영향 저감 등의 효과를 객관적으로 검증하여 인증 취득 가능성을 높입니다.'
      },
      {
        title: '녹색기술제품 확인 연계 전략',
        description: '녹색기술인증을 기반으로 녹색기술제품 확인을 취득하여 공공조달 시장 진입을 위한 기반을 마련합니다.'
      }
    ]
  },
  {
    id: 'performance',
    title: '성능인증 + 특허 전략',
    description: '제품의 핵심 성능을 객관적으로 검증하고 차별화 기술 포인트를 특허로 확보하여 시장 경쟁우위를 창출합니다.',
    features: [
      {
        title: '성능인증 핵심 기술 특허화',
        description: '인증 심사에서 중요하게 평가되는 핵심 기술 요소를 식별하고, 이를 특허로 보호하여 기술적 우위성을 입증합니다.'
      },
      {
        title: '시험기관 연계 성능 검증',
        description: '공인 시험기관과 협력하여 성능 검증 프로세스를 최적화하고, 테스트 결과를 특허 전략에 반영합니다.'
      },
      {
        title: '중소기업 기술개발제품 시장진출 전략',
        description: '성능인증을 통해 공공기관 우선구매 대상 제품으로 지정받을 수 있는 전략을 수립하고 실행을 지원합니다.'
      }
    ]
  },
  {
    id: 'procurement',
    title: '우수조달제품 지정 + 특허 전략',
    description: '핵심 기술의 특허 독점성을 기반으로 우수조달제품 지정을 획득하여 안정적인 공공시장 매출 기반을 구축합니다.',
    features: [
      {
        title: '조달 경쟁력 강화를 위한 특허 포트폴리오 구축',
        description: '조달청 심사기준에 맞는 기술 혁신성과 품질 우수성을 입증할 수 있는 특허 포트폴리오를 전략적으로 구축합니다.'
      },
      {
        title: '신기술/신제품 인증 연계 전략',
        description: '우수조달제품 지정 가능성을 높이기 위한 NEP, NET 등 관련 인증 획득 전략을 수립하고 실행을 지원합니다.'
      },
      {
        title: '다수공급자계약(MAS) 전환 전략',
        description: '우수조달제품 지정 이후 MAS 전환을 통해 안정적인 공공조달 시장 진출 기반을 마련할 수 있도록 지원합니다.'
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* 서비스 소개 섹션 */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              인증과 특허의 시너지로<br />공공조달 시장 진출의 길을 열어드립니다
            </h1>
            <p className="text-xl text-gray-600">
              기술의 가치를 인증으로 증명하고 특허로 보호하는 원스톱 전략으로<br />
              귀사의 혁신 제품이 공공조달 시장에서 경쟁력을 갖출 수 있도록 지원합니다.
            </p>
          </div>
          
          <CertificationCards />
        </div>
      </section>
      
      {/* 서비스 상세 정보 섹션 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">서비스 상세 정보</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              각 서비스에 대한 자세한 정보와 주요 특징을 확인하세요.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {servicesList.map((service) => (
              <div key={service.id} className="mb-8 border-b border-gray-200 pb-8 last:border-0">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-6 group-open:animate-fadeIn">
                    <p className="mb-6">{service.description}</p>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">주요 특징</h4>
                    <div className="space-y-4">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="bg-gray-50 p-6 rounded-lg">
                          <h5 className="font-bold mb-2 text-gray-800">{feature.title}</h5>
                          <p>{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 차별화 포인트 섹션 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">VD-Tech의 차별화된 3가지 특징</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              인증 컨설팅과 특허 전략을 통합적으로 제공하는 VD-Tech만의 차별화 포인트를 확인하세요.
            </p>
          </div>
          
          <FeatureCards />
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-16 md:py-20 bg-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">무료 상담 신청</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            귀사의 제품과 기술에 맞는 최적의 인증 및 특허 전략을 제안해 드립니다.<br />
            지금 바로 무료 상담을 신청하세요.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="mb-6 text-gray-600">
                저희 VD-Tech는 귀사에 맞는 맞춤형 인증 및 특허 전략을 제안해 드립니다.
                무료 상담을 통해 귀사의 제품과 기술에 대한 전문가의 조언을 받아보세요.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300 w-full text-center"
              >
                무료 상담 신청하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 