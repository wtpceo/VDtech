"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection, { AnimatedItem, CountUpAnimation } from "./AnimatedSection";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1A2B5C] via-blue-800 to-blue-700 py-16">
      {/* 배경 효과 요소들 */}
      <div className="absolute inset-0 z-0">
        {/* 흐릿한 원형 빛 효과 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-5xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-5xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-5xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* 곡선 SVG 요소 */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 C20,80 50,20 100,50 L100,100 L0,100 Z" fill="rgba(255,255,255,0.1)"></path>
          <path d="M0,30 C30,10 70,90 100,30 L100,100 L0,100 Z" fill="rgba(255,255,255,0.05)"></path>
        </svg>
        
        {/* 점선 패턴 */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}>
        </div>
        
        {/* 오버레이 이미지 */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero-bg-new.jpg"
            alt="디지털 기술 혁신 배경 이미지"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection animation="slideLeft" delay={0.3} className="text-white text-left">
            <AnimatedItem animation="slideLeft" delay={0.4}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-[#FFD95A] font-bold block mb-3">기술은 인증으로,</span>
                <span className="font-bold text-white block mb-3">인증은 특허로,</span>
                <span className="font-bold text-white block mb-3">특허는 조달 시장확대로</span>
                <span className="font-bold text-white block">이어집니다.</span>
              </h1>
            </AnimatedItem>
            
            <AnimatedItem animation="slideLeft" delay={0.6}>
              <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl">
                정부조달 인증과 기술 특허를 하나의 전략으로 묶어,<br className="hidden md:block" />
                귀사의 혁신 제품을 공공시장 주력 상품으로 육성합니다.
              </p>
            </AnimatedItem>
            
            <AnimatedItem animation="fadeIn" delay={0.8} className="flex flex-col sm:flex-row gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="bg-[#FFD95A] hover:bg-[#FFD95A]/90 text-[#1A2B5C] font-bold py-4 px-10 rounded-lg text-center transition duration-300 shadow-lg shadow-[#FFD95A]/20 text-lg block"
                >
                  무료 상담 신청
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/services"
                  className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-10 rounded-lg text-center transition duration-300 text-lg block"
                >
                  서비스 살펴보기
                </Link>
              </motion.div>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={0.5} className="hidden lg:block relative">
            <div className="relative h-[550px] w-full">
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-tr from-blue-500/10 to-transparent rounded-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-bl from-[#FFD95A]/10 to-transparent rounded-xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-[#1A2B5C]/50 to-blue-900/50 rounded-xl p-8 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/10 shadow-lg shadow-blue-900/20">
                <div className="relative w-full h-full">
                  <Image
                    src="/hero-strategy.svg"
                    alt="기술 인증과 특허 전략을 통한 조달시장 진입 흐름도"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 성과 지표 섹션 */}
        <AnimatedSection animation="fadeIn" className="mt-12 lg:mt-0 pb-12">
          <h3 className="text-white text-center text-xl font-medium mb-8">성과 지표</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 인증 성공 사례 */}
            <AnimatedItem animation="fadeIn" delay={0.1} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition duration-300 hover:translate-y-[-5px] border border-white/20">
              <div className="flex items-start">
                <div className="bg-[#FFD95A]/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-[#FFD95A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#FFD95A] text-3xl font-bold mb-1">
                    <CountUpAnimation end={150} suffix="+" />
                  </h4>
                  <p className="text-white text-sm">인증 성공 사례</p>
                </div>
              </div>
            </AnimatedItem>
            
            {/* 인증 통과율 */}
            <AnimatedItem animation="fadeIn" delay={0.2} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition duration-300 hover:translate-y-[-5px] border border-white/20">
              <div className="flex items-start">
                <div className="bg-green-400/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-green-300 text-3xl font-bold mb-1">
                    <CountUpAnimation end={98} suffix="%" />
                  </h4>
                  <p className="text-white text-sm">인증 통과율</p>
                </div>
              </div>
            </AnimatedItem>
            
            {/* 기술 컨설팅 경험 */}
            <AnimatedItem animation="fadeIn" delay={0.3} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition duration-300 hover:translate-y-[-5px] border border-white/20">
              <div className="flex items-start">
                <div className="bg-blue-400/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-blue-300 text-3xl font-bold mb-1">
                    <CountUpAnimation end={15} suffix="년+" />
                  </h4>
                  <p className="text-white text-sm">기술 컨설팅 경험</p>
                </div>
              </div>
            </AnimatedItem>
            
            {/* 컨설팅 대응 */}
            <AnimatedItem animation="fadeIn" delay={0.4} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition duration-300 hover:translate-y-[-5px] border border-white/20">
              <div className="flex items-start">
                <div className="bg-purple-400/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-purple-300 text-3xl font-bold mb-1">24/7</h4>
                  <p className="text-white text-sm">연중무휴 컨설팅 대응</p>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedSection>
      </div>
      
      {/* 사선 구분선 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 48H1440V0L0 48Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
} 