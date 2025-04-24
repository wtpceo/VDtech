"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection, { AnimatedItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "녹색기술인증 + 특허 전략",
    description:
      "친환경 기술성 및 에너지 효율성 기반의 고난이도 인증. 온실가스 감축·탄소저감 기술 특허화, 실증자료 설계 및 시험기관 연계 제공.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "성능인증 + 특허 전략",
    description:
      "기술의 성능을 실증 평가로 입증하며, 우수조달의 필수 요건. 핵심 알고리즘 특허화 및 시험 기준 설계부터 인증 문서까지 지원.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "우수조달제품 지정 + 특허 전략",
    description:
      "조달청이 검증한 제품으로, 수의계약·우선구매가 가능한 등 최대 혜택. 기술 혁신성 강조 특허 전략 + 독점 포지셔닝까지 마케팅 자료 구성 포함.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B5C] mb-4">
            VD-Tech <span className="text-[#FFD95A]">서비스</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            기업의 가치를 높이는 맞춤형 정부조달 인증 및 특허 컨설팅 서비스를 제공합니다.
            국내 최고 전문가들이 고객사의 성장을 위한 최적의 솔루션을 제시합니다.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" staggerChildren={true} staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <AnimatedItem 
              key={service.id}
              animation="slideUp"
              className="relative h-full"
            >
              <motion.div
                className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col h-full"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 flex flex-col flex-grow">
                  <AnimatedItem animation="slideDown" delay={0.2} className="mb-6 mx-auto">
                    <div className="bg-[#1A2B5C]/10 text-[#1A2B5C] p-4 rounded-full w-16 h-16 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </AnimatedItem>
                  
                  <h3 className="text-xl font-bold text-[#1A2B5C] mb-4 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-center flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto text-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={`/services#${service.id}`}
                        className="inline-block bg-[#1A2B5C] hover:bg-[#1A2B5C]/90 text-white font-medium py-3 px-6 rounded-lg transition duration-300 border border-transparent hover:border-[#FFD95A] w-full"
                      >
                        서비스 자세히 보기
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={0.6} className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/services"
              className="inline-block bg-[#1A2B5C] hover:bg-[#1A2B5C]/90 text-white py-3 px-8 rounded-lg transition duration-300 border border-transparent hover:border-[#FFD95A]"
            >
              모든 서비스 보기
            </Link>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.3} className="mt-20 bg-[#F8F9FA] p-10 rounded-xl shadow-md">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-[#1A2B5C] mb-6">
              조달·인증·특허를<br />하나의 전략으로
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              VD-Tech는 정부조달 인증과 특허 전략을 유기적으로 연결하여
              기업의 공공시장 경쟁력을 극대화합니다.
              단순 인증 획득이 아닌, 특허와 연계된 강력한 시장 지위를 확보하도록
              지원합니다.
            </p>
            
            {/* 수치 강조 섹션 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-[#FFD95A] text-4xl font-bold mb-2">150+</div>
                <p className="text-gray-700">인증 성공 사례</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-[#1A2B5C] text-4xl font-bold mb-2">98%</div>
                <p className="text-gray-700">인증 통과율</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-blue-500 text-4xl font-bold mb-2">15년+</div>
                <p className="text-gray-700">컨설팅 노하우</p>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-block bg-[#FFD95A] hover:bg-[#1A2B5C] text-[#1A2B5C] hover:text-white py-3 px-8 rounded-lg transition duration-300 border border-[#FFD95A]"
              >
                무료 상담 신청하기
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 