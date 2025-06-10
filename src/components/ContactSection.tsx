"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { ChangeEvent, FormEvent } from "react";

// 상담 요청 폼 컴포넌트를 분리
export function ConsultRequest() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/eddie00700@naver.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowModal(true);
        form.reset();
        // 3초 후 모달 닫기
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md relative">
      {/* 모달 */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-lg shadow-xl z-10 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="text-green-500 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">문의 주셔서 감사합니다</h3>
              <p className="text-gray-900 text-lg">최대한 빠른 시일내에 연락드리겠습니다.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* FormSubmit 설정 */}
        <input type="hidden" name="_subject" value="VD-Tech 무료 상담 신청" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        
        {/* Honeypot field */}
        <input type="text" name="_honey" style={{ display: 'none' }} />
        
        {/* 실제 폼 필드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              이름 *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="홍길동"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
              회사명 *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              placeholder="회사명을 입력해주세요"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              이메일 *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              연락처 *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="010-1234-5678"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
            관심 서비스 *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option value="" className="text-gray-400">선택해주세요</option>
            <option value="procurement">조달청 등록 컨설팅</option>
            <option value="excellent">우수조달 지정 컨설팅</option>
            <option value="patent">특허 출원/전략 컨설팅</option>
            <option value="rnd">R&D 과제기획 컨설팅</option>
            <option value="other">기타</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            문의 내용
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="궁금한 점이나 요청사항을 자유롭게 작성해주세요."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          무료 상담 신청하기
        </button>
      </form>
    </div>
  );
}

// 기존 ContactSection 컴포넌트
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B5C] mb-4">
            무료 <span className="text-[#FFD95A]">상담 신청</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            정부조달 인증 및 특허 관련 궁금한 점이 있으시거나 컨설팅이 필요하신가요?
            전문 컨설턴트가 기업에 맞는 최적의 솔루션을 제안해 드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-[#1A2B5C] mb-6">문의 안내</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[#FFD95A]">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-[#1A2B5C] font-semibold mb-1">오시는 길</h4>
                    <p className="text-gray-600">경기도 이천시 신둔면 원적로 147번길 34</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#FFD95A]">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-[#1A2B5C] font-semibold mb-1">전화 문의</h4>
                    <p className="text-gray-600">031-631-6191</p>
                    <p className="text-gray-600">팩스: 031-631-6192</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#FFD95A]">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-[#1A2B5C] font-semibold mb-1">이메일 문의</h4>
                    <p className="text-gray-600">eddie00700@naver.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#FFD95A]">
                    <FiClock className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-[#1A2B5C] font-semibold mb-1">업무 시간</h4>
                    <p className="text-gray-600">평일: 09:00 - 18:00</p>
                    <p className="text-gray-600">점심시간: 12:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ConsultRequest />
        </div>
      </div>
    </section>
  );
} 