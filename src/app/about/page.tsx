import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#F8F9FA]">
      {/* 헤더 섹션 - 배경 그라디언트 추가 */}
      <div className="relative bg-gradient-to-br from-[#1A2B5C] to-[#0F172A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">회사 소개</h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-90">
            기술 인증과 특허 전략의 통합으로 공공시장 진출의 새로운 지평을 열어갑니다
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        {/* VD-Tech 소개 섹션 */}
        <section className="mb-32 relative">
          {/* 장식 요소 */}
          <div className="absolute top-0 left-0 w-6 h-16 bg-[#00B686]"></div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full opacity-30"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#FFD95A]/20 rounded-full opacity-30"></div>
          
          <div className="max-w-3xl mx-auto text-center py-8 relative z-10">
            <div className="mb-4 inline-block px-4 py-1 bg-[#1A2B5C]/10 text-[#1A2B5C] rounded-full text-sm font-semibold">
              VD-TECH 소개
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#1A2B5C]">정부조달 인증 및<br />특허 전략 전문 기업</h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              VD-Tech는 정부조달 인증과 기술 특허 전략을 통합하여, 공공시장 진입을 위한 전문 컨설팅을 제공하는 기술 전략 파트너입니다. 녹색기술, 성능인증, 우수조달제품 지정 등 다양한 인증 경험과 기술 포지셔닝 특허 전략을 바탕으로 고객의 기술이 시장에서 인정받을 수 있도록 지원합니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              우리는 기술을 통해 고객의 지속 가능한 성장을 이끌고, 조달 등록까지 원스톱으로 함께하는 파트너십을 지향합니다.
            </p>
            
            {/* 주요 수치 표시 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-xl shadow-lg mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1A2B5C] mb-2">15년+</div>
                <p className="text-gray-600">컨설팅 경험</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00B686] mb-2">150+</div>
                <p className="text-gray-600">인증 성공 사례</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD95A] mb-2">98%</div>
                <p className="text-gray-600">인증 통과율</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFD95A] text-[#1A2B5C] font-semibold rounded-lg transition-all hover:bg-[#1A2B5C] hover:text-white shadow-md">
                무료 상담 신청
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 미션 및 비전 섹션 */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#1A2B5C]/10 text-[#1A2B5C] rounded-full text-sm font-semibold mb-4">
              MISSION & VISION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B5C]">미션 및 비전</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-t-4 border-[#1A2B5C]">
              <div className="w-16 h-16 bg-[#1A2B5C]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1A2B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A2B5C]">미션</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                기술 인증과 특허 전략을 통해 고객의 혁신 기술이 공공시장에서 인정받을 수 있도록 돕고, 지속가능한 경쟁력을 만드는 전략 파트너가 되는 것
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-t-4 border-[#00B686]">
              <div className="w-16 h-16 bg-[#00B686]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00B686]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#00B686]">비전</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                기술 전략과 신뢰 기반의 인증 서비스를 통해 조달 시장을 선도하는 기업으로 성장하는 것
              </p>
            </div>
          </div>
        </section>

        {/* 우리는 이렇게 함께합니다 섹션 */}
        <section className="mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#1A2B5C]/5 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#00B686]/5 rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
          
          <div className="relative z-10 bg-white rounded-2xl shadow-xl p-12">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-[#1A2B5C]/10 text-[#1A2B5C] rounded-full text-sm font-semibold mb-4">
                COLLABORATION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B5C]">우리는 이렇게 함께합니다</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex items-start group">
                <div className="bg-[#1A2B5C]/10 p-4 rounded-2xl mr-5 flex-shrink-0 transition-all duration-300 group-hover:bg-[#1A2B5C] group-hover:text-white">
                  <svg className="w-7 h-7 text-[#1A2B5C] transition-all duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A2B5C]">조달 인증 전문가</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">녹색기술, 성능인증 등 경험자를 포함한 정부조달 인증 전문가들이 함께합니다.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-[#00B686]/10 p-4 rounded-2xl mr-5 flex-shrink-0 transition-all duration-300 group-hover:bg-[#00B686] group-hover:text-white">
                  <svg className="w-7 h-7 text-[#00B686] transition-all duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#00B686]">특허 전문 변리사와 엔지니어 팀 협업</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">특허 전문 변리사와 다양한 분야의 엔지니어가 협업하여 최적의 특허 전략을 제공합니다.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-[#1A2B5C]/10 p-4 rounded-2xl mr-5 flex-shrink-0 transition-all duration-300 group-hover:bg-[#1A2B5C] group-hover:text-white">
                  <svg className="w-7 h-7 text-[#1A2B5C] transition-all duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#1A2B5C]">시험기관/실증기관과의 네트워크 확보</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">다양한 시험기관 및 실증기관과의 네트워크를 통해 신속하고 효율적인 인증 과정을 지원합니다.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-[#00B686]/10 p-4 rounded-2xl mr-5 flex-shrink-0 transition-all duration-300 group-hover:bg-[#00B686] group-hover:text-white">
                  <svg className="w-7 h-7 text-[#00B686] transition-all duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#00B686]">기술 기획–인증 대응–특허 출원–조달 등록까지 원스톱 지원</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">기술 기획부터 인증 대응, 특허 출원, 조달 등록까지 모든 과정을 원스톱으로 지원하여 시간과 비용을 절약합니다.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A2B5C] text-white font-semibold rounded-lg transition-all hover:bg-[#FFD95A] hover:text-[#1A2B5C] shadow-md">
                서비스 자세히 보기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 핵심 가치 섹션 */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#1A2B5C]/10 text-[#1A2B5C] rounded-full text-sm font-semibold mb-4">
              CORE VALUES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B5C]">핵심 가치</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-10 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] border-b-4 border-transparent hover:border-[#1A2B5C]">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1A2B5C]/10 to-[#1A2B5C]/20 flex items-center justify-center group-hover:bg-[#1A2B5C] transition-all duration-300">
                <svg className="w-10 h-10 text-[#1A2B5C] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A2B5C] text-center">혁신</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                끊임없는 학습과 도전을 통해 새로운 가치를 창출합니다.
              </p>
            </div>
            
            <div className="group bg-white p-10 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] border-b-4 border-transparent hover:border-[#1A2B5C]">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1A2B5C]/10 to-[#1A2B5C]/20 flex items-center justify-center group-hover:bg-[#1A2B5C] transition-all duration-300">
                <svg className="w-10 h-10 text-[#1A2B5C] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A2B5C] text-center">신뢰</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                정직과 투명성을 바탕으로 고객과의 신뢰 관계를 구축합니다.
              </p>
            </div>
            
            <div className="group bg-white p-10 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] border-b-4 border-transparent hover:border-[#1A2B5C]">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1A2B5C]/10 to-[#1A2B5C]/20 flex items-center justify-center group-hover:bg-[#1A2B5C] transition-all duration-300">
                <svg className="w-10 h-10 text-[#1A2B5C] group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1A2B5C] text-center">협력</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                열린 소통과 상호 존중을 통해 함께 성장하는 문화를 만듭니다.
              </p>
            </div>
          </div>
        </section>

        {/* 연혁 섹션 */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#1A2B5C]/10 text-[#1A2B5C] rounded-full text-sm font-semibold mb-4">
              HISTORY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B5C]">연혁</h2>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-12">
            <div className="relative pl-10 pb-12">
              <div className="absolute h-full w-1 bg-gradient-to-b from-[#1A2B5C] to-[#00B686] left-0 top-0 rounded-full"></div>
              <div className="absolute w-6 h-6 bg-[#1A2B5C] rounded-full -left-[10px] top-1 border-4 border-white"></div>
              <div className="mb-4">
                <div className="text-2xl font-bold text-[#1A2B5C] mb-2 flex items-center">
                  <span className="mr-4">2010</span>
                  <span className="text-xl text-[#00B686]">VD-Tech 설립</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed ml-16">
                  다년간의 인증·특허 컨설팅 경험을 바탕으로 정부조달 인증 및 특허 전략 전문 기업 설립
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA 섹션 */}
        <section className="rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B5C] to-[#00B686] opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">고객의 기술에 새로운 가치를 더합니다</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              VD-Tech의 인증·특허 통합 전략으로 귀사의 혁신 제품을 공공시장 주력 상품으로 육성하세요
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD95A] text-[#1A2B5C] font-semibold rounded-lg transition-all hover:bg-white hover:shadow-lg">
              지금 상담 신청하기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 