export default function Cases() {
  const cases = [
    {
      id: 1,
      title: "A사 클라우드 시스템 구축",
      description: "글로벌 기업 A사의 클라우드 인프라 구축 및 마이그레이션 프로젝트",
      category: "클라우드",
      result: "인프라 비용 30% 절감 및 시스템 안정성 향상"
    },
    {
      id: 2,
      title: "B사 웹 애플리케이션 개발",
      description: "핀테크 기업 B사의 사용자 중심 웹 애플리케이션 개발",
      category: "웹 개발",
      result: "사용자 경험 개선 및 전환율 20% 증가"
    },
    {
      id: 3,
      title: "C사 디지털 트랜스포메이션",
      description: "제조업체 C사의 전사적 디지털 전환 컨설팅 및 구현",
      category: "컨설팅",
      result: "업무 효율성 35% 향상 및 비즈니스 프로세스 최적화"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-10 text-center">성공 사례</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              이미지 영역
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full mb-3">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-sm mb-1">성과:</h4>
                <p className="text-sm">{item.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">귀사도 VD-Tech와 함께 성공 사례를 만들어보세요</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
          문의하기
        </button>
      </div>
    </div>
  );
} 