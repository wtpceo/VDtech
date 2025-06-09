import { CertificationIcon, InnovationIcon, TeamIcon } from "./icons/CommonIcons";

const expertGroups = [
  {
    id: 1,
    role: "인증 컨설팅 전문가",
    description: "정부조달 등록, 성능평가, 환경표지 등 주요 인증 대응을 위한 전략 수립",
    icon: <CertificationIcon className="w-10 h-10" />,
  },
  {
    id: 2,
    role: "특허 전략 컨설턴트",
    description: "기술 포지셔닝, 명세서 작성, 신규 특허 출원 및 특허맵 기반 전략 제공",
    icon: <InnovationIcon className="w-10 h-10" />,
  },
  {
    id: 3,
    role: "변리사 / 법률 전문가",
    description: "지식재산권 분쟁 예방, 계약 자문, 특허 분쟁 대응 및 독점성 확보 지원",
    icon: <TeamIcon className="w-10 h-10" />,
  },
  {
    id: 4,
    role: "시험기관 협력자",
    description: "실증 실험 설계, 공인 시험기관 연계, 시험 기준 문서화",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            VD-Tech <span className="text-blue-700">전문가 그룹</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            정부조달 인증 및 특허 분야의 최고 전문가들이 기업의 성장을 위해 함께합니다.
            풍부한 경험과 전문 지식을 바탕으로 고객사에 최적화된 컨설팅을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertGroups.map((expert) => (
            <div
              key={expert.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-blue-100 text-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                {expert.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {expert.role}
              </h3>
              <p className="text-gray-600 text-center">
                {expert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-10 rounded-xl shadow-md">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-[#1A2B5C] mb-6">
              최적의 솔루션을 위한<br />다양한 전문가 협업
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              VD-Tech는 특허 전문가, 조달청 경력자, 기술거래사, 변리사 등 각 분야 전문가들의
              협업을 통해 고객사의 제품과 기술이 최대한의 가치를 인정받을 수 있도록 지원합니다.
              산업별 특성을 고려한 맞춤형 컨설팅으로 최상의 결과를 도출합니다.
            </p>
            
            {/* 전문성 강조 카드 섹션 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1A2B5C]/5 p-6 rounded-lg border border-[#1A2B5C]/10">
                <h4 className="text-xl font-bold text-[#1A2B5C] mb-3">전략적 접근</h4>
                <p className="text-gray-700">
                  인증 요건을 분석하고 기업의 핵심 기술을 식별하여 인증과 특허를 효과적으로 연계하는 전략을 수립합니다.
                </p>
              </div>
              <div className="bg-[#1A2B5C]/5 p-6 rounded-lg border border-[#1A2B5C]/10">
                <h4 className="text-xl font-bold text-[#1A2B5C] mb-3">맞춤형 솔루션</h4>
                <p className="text-gray-700">
                  기업 규모, 산업 분야, 기술 성숙도에 따라 최적화된 맞춤형 전략과 솔루션을 제공합니다.
                </p>
              </div>
            </div>
            
            <a 
              href="/contact" 
              className="inline-block bg-[#FFD95A] hover:bg-[#1A2B5C] text-[#1A2B5C] hover:text-white py-3 px-8 rounded-lg transition duration-300 font-semibold shadow-md"
            >
              무료 상담 신청하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 