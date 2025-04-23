import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <Image
              src="/about-illustration.svg"
              alt="정부조달 인증 및 특허 컨설팅 서비스"
              fill
              className="object-contain rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#1A2B5C] text-white p-8 rounded-lg shadow-lg hidden md:block">
              <p className="text-xl font-bold">15년+</p>
              <p>전문 컨설팅</p>
            </div>
          </div>

          <div>
            <div className="inline-block bg-blue-100 text-[#1A2B5C] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              회사 소개
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A2B5C]">
              정부조달 시장 진출 및 특허 획득의<br />
              <span className="text-[#1A2B5C]">최고의 파트너 <span className="text-[#FFD95A]">VD-Tech</span></span>
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg">
              VD-Tech는 정부조달 등록부터 우수조달 지정, 기술 특허 출원까지 인증과 특허를 전략적으로 연계하는 전문 컨설팅 기업입니다. 
              인증 요건 분석, 특허 포지셔닝 전략, 실증자료 준비까지 귀사의 기술이 공공시장에 진입할 수 있도록 원스톱으로 지원합니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A2B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#1A2B5C]">전문성</h3>
                  <p className="text-gray-600">다년간의 정부조달 인증/특허 컨설팅 경험을 보유한 전문팀이 함께합니다.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A2B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#1A2B5C]">맞춤 컨설팅</h3>
                  <p className="text-gray-600">기업의 상황과 목표에 맞는 최적의 컨설팅 서비스를 제공합니다.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A2B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#1A2B5C]">성과 중심</h3>
                  <p className="text-gray-600">가시적이고 지속 가능한 성과 창출에 집중합니다.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A2B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#1A2B5C]">효율성</h3>
                  <p className="text-gray-600">불필요한 과정을 줄이고 핵심에 집중하여 시간과 비용을 절약합니다.</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="/about"
              className="inline-block bg-[#1A2B5C] hover:bg-[#1A2B5C]/90 text-white font-bold py-3 px-8 rounded-lg transition duration-300 border border-[#1A2B5C] hover:shadow-lg"
            >
              더 알아보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 