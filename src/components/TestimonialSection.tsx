import React from 'react';
import { StarIcon, InnovationIcon, CertificationIcon } from "./icons/CommonIcons";

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A2B5C] mb-4">
            고객 성공 사례
          </h2>
          <p className="text-lg text-gray-600">
            VD-Tech와 함께 정부조달 인증과 특허 출원에 성공한 고객들의 이야기를 들어보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 첫 번째 후기 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="w-[60px] h-[60px] bg-blue-100 rounded-full flex items-center justify-center">
                <CertificationIcon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-[#1A2B5C]">김철수 대표</h4>
                <p className="text-gray-700 font-medium">제조업체 A사</p>
              </div>
            </div>
            <div className="mb-4">
              {Array(5).fill(0).map((_, i) => (
                <StarIcon key={i} className="text-yellow-400 inline-block" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              &ldquo;조달청 MAS 등록을 위해 VD-Tech에 컨설팅을 의뢰했습니다. 전문적인 지식과 체계적인 프로세스로 짧은 시간 내에 성공적으로 등록을 완료할 수 있었습니다. 덕분에 정부 조달 시장에 진출하여 안정적인 매출을 확보할 수 있게 되었습니다.&rdquo;
            </p>
            <div className="text-blue-700 font-medium">
              • MAS 등록 성공 및 공공기관 납품 계약 체결
            </div>
          </div>
          
          {/* 두 번째 후기 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="w-[60px] h-[60px] bg-blue-100 rounded-full flex items-center justify-center">
                <InnovationIcon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-[#1A2B5C]">이민지 CTO</h4>
                <p className="text-gray-700 font-medium">소프트웨어 솔루션 기업</p>
              </div>
            </div>
            <div className="mb-4">
              {Array(5).fill(0).map((_, i) => (
                <StarIcon key={i} className="text-yellow-400 inline-block" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              &ldquo;GS인증과 특허 출원을 동시에 진행하면서 VD-Tech의 도움을 받았습니다. 기술적 특징을 잘 이해하고 최적의 전략을 제시해 주셔서 두 가지 모두 성공적으로 마무리할 수 있었습니다. 특히 특허 명세서 작성 과정에서 보여준 전문성이 인상적이었습니다.&rdquo;
            </p>
            <div className="text-blue-700 font-medium">
              • GS인증 1등급 획득 및 핵심기술 특허 등록
            </div>
          </div>
          
          {/* 세 번째 후기 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="w-[60px] h-[60px] bg-blue-100 rounded-full flex items-center justify-center">
                <CertificationIcon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-[#1A2B5C]">박준혁 대표</h4>
                <p className="text-gray-700 font-medium">환경기술 전문기업</p>
              </div>
            </div>
            <div className="mb-4">
              {Array(5).fill(0).map((_, i) => (
                <StarIcon key={i} className="text-yellow-400 inline-block" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              &ldquo;조달청 우수제품 지정을 목표로 VD-Tech에 컨설팅을 의뢰했습니다. 까다로운 심사 기준과 복잡한 절차에도 불구하고, 전문적인 가이드와 철저한 준비 덕분에 우수제품으로 지정받을 수 있었습니다. 이후 공공 조달 매출이 3배 이상 증가했습니다.&rdquo;
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