import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">고객 성공 사례</h2>
          <p className="text-lg text-gray-600">
            VD-Tech와 함께 정부조달 인증과 특허 출원에 성공한 고객들의 이야기를 들어보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 첫 번째 후기 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <Image
                src="/images/testimonial-1.jpg"
                alt="김철수 대표"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold">김철수 대표</h4>
                <p className="text-gray-500 text-sm">테크놀로지 스타트업</p>
              </div>
            </div>
            <div className="mb-4">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              &quot;조달청 MAS 등록을 위해 VD-Tech에 컨설팅을 의뢰했습니다. 전문적인 지식과 체계적인 프로세스로 짧은 시간 내에 성공적으로 등록을 완료할 수 있었습니다. 덕분에 정부 조달 시장에 진출하여 안정적인 매출을 확보할 수 있게 되었습니다.&quot;
            </p>
            <div className="text-blue-700 font-medium">
              • MAS 등록 성공 및 공공기관 납품 계약 체결
            </div>
          </div>

          {/* 두 번째 후기 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <Image
                src="/images/testimonial-2.jpg"
                alt="이민지 CTO"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold">이민지 CTO</h4>
                <p className="text-gray-500 text-sm">소프트웨어 솔루션 기업</p>
              </div>
            </div>
            <div className="mb-4">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              &quot;특허 출원 과정에서 선행기술 조사부터 명세서 작성까지 VD-Tech의 전문가분들의 도움을 받았습니다. 많은 특허 권리를 확보할 수 있었고, 이를 통해 투자 유치에도 큰 도움이 되었습니다. 특히 긴밀한 소통과 전략적인 접근이 인상적이었습니다.&quot;
            </p>
            <div className="text-blue-700 font-medium">
              • 3건의 특허 등록 성공 및 시리즈 A 투자 유치
            </div>
          </div>

          {/* 세 번째 후기 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <Image
                src="/images/testimonial-3.jpg"
                alt="박준혁 대표"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="ml-4">
                <h4 className="font-bold">박준혁 대표</h4>
                <p className="text-gray-500 text-sm">제조업 중소기업</p>
              </div>
            </div>
            <div className="mb-4">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              &quot;조달청 우수제품 지정을 목표로 VD-Tech에 컨설팅을 의뢰했습니다. 까다로운 심사 기준과 복잡한 절차에도 불구하고, 전문적인 가이드와 철저한 준비 덕분에 우수제품으로 지정받을 수 있었습니다. 이후 공공 조달 매출이 3배 이상 증가했습니다.&quot;
            </p>
            <div className="text-blue-700 font-medium">
              • 우수조달 제품 지정 및 공공시장 확대
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 