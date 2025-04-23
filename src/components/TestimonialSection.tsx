export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">고객 성공 사례</h2>
          <p className="text-lg text-gray-600">
            VD-Tech의 전문 컨설팅을 통해 성공적인 정부조달 인증 및 특허 취득에 성공한 고객들의 생생한 후기입니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">김민수 대표</h3>
                <p className="text-gray-600">테크노솔루션 주식회사</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;VD-Tech의 도움으로 GS인증을 성공적으로 취득했습니다. 처음부터 끝까지 체계적인 프로세스와 전문적인 조언 덕분에 어려운 인증 과정을 수월하게 통과할 수 있었습니다. 인증 취득 후 공공기관 납품 실적이 50% 이상 증가했습니다.&quot;
            </p>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">2023년 6월</span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">이지현 이사</h3>
                <p className="text-gray-600">메디케어 시스템즈</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;특허 출원 과정에서 VD-Tech의 전문가들이 큰 도움을 주셨습니다. 기술적 내용을 명확하게 정리하고 특허 명세서를 작성하는 과정에서 세심한 조언과 방향성을 제시해주셔서 최종적으로 3건의 특허를 성공적으로 등록할 수 있었습니다.&quot;
            </p>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">2023년 4월</span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">박준호 팀장</h3>
                <p className="text-gray-600">스마트시티 솔루션</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;조달청 등록 및 우수조달제품 지정을 위한 컨설팅을 받았습니다. 복잡한 서류 준비부터 심사 대응까지 모든 과정에서 VD-Tech의 전문성이 빛났습니다. 덕분에 정부 사업 입찰 기회가 크게 확대되었고, 매출이 두 배 이상 증가했습니다.&quot;
            </p>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">2023년 8월</span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">이수진 대표</h3>
                <p className="text-gray-600">그린에너지 테크</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;R&D 과제 수주를 위해 VD-Tech와 함께 했습니다. 사업계획서 작성부터 발표 자료 준비까지 모든 단계에서 탁월한 지원을 받았고, 결과적으로 3억 규모의 정부지원 R&D 과제를 성공적으로 수주할 수 있었습니다.&quot;
            </p>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">2023년 2월</span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">최영민 CEO</h3>
                <p className="text-gray-600">네오테크놀로지</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;NET 인증 취득을 위해 1년간 VD-Tech와 협업했습니다. 기술 검증 및 시험 단계에서 발생한 여러 문제점들을 VD-Tech 컨설턴트의 도움으로 모두 해결할 수 있었고, 마침내 신기술 인증을 받게 되었습니다.&quot;
            </p>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">2022년 11월</span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">정하윤 대표</h3>
                <p className="text-gray-600">바이오헬스케어</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;조달 경험이 전혀 없는 상태에서 VD-Tech를 만나 처음부터 조달시장 진입 전략을 수립했습니다. 제품 경쟁력 분석부터 인증 취득, 조달 등록까지 모든 과정을 함께했고, 지금은 안정적인 공공기관 거래처를 확보했습니다.&quot;
            </p>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">2023년 1월</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 