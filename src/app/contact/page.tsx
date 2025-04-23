import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-10 text-center">문의하기</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">연락처 정보</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">주소</h3>
              <p>서울특별시 강남구 테헤란로 123, VD-Tech 빌딩 8층</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">이메일</h3>
              <p>info@vdtech.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">전화번호</h3>
              <p>02-123-4567</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">운영 시간</h3>
              <p>월요일 - 금요일: 09:00 - 18:00</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-bold mb-4">찾아오시는 길</h3>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              지도 영역
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">문의 양식</h2>
          <p className="mb-6">
            아래 양식을 작성하여 문의해 주시면 빠른 시일 내에 답변 드리겠습니다.
          </p>
          <ContactForm />
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">자주 묻는 질문</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-2">프로젝트 의뢰는 어떻게 하나요?</h3>
            <p>
              문의 양식을 통해 프로젝트에 대한 간략한 설명을 보내주시면 담당자가 연락드립니다. 
              또는 전화로 직접 문의하실 수도 있습니다.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-2">프로젝트 기간과 비용은 어떻게 결정되나요?</h3>
            <p>
              프로젝트의 범위와 복잡성에 따라 달라집니다. 자세한 요구사항을 바탕으로 
              견적과 일정을 제안해 드립니다.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-2">유지보수 서비스는 어떻게 제공되나요?</h3>
            <p>
              프로젝트 완료 후 유지보수 계약을 통해 지속적인 지원을 제공합니다. 
              다양한 유지보수 패키지가 준비되어 있습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 