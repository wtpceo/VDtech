"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { ChangeEvent, FormEvent } from "react";

// 상담 요청 폼 컴포넌트를 분리
export function ConsultRequest() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 여기에 실제 폼 제출 로직을 구현하세요
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="text-green-500 text-5xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">상담 신청이 완료되었습니다!</h3>
          <p className="text-gray-600 mb-6">
            담당 컨설턴트가 1영업일 이내에 연락드리겠습니다.
          </p>
          <button
            className="text-blue-700 font-medium"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                service: "",
                message: "",
              });
            }}
          >
            새로운 상담 신청하기
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                이름 *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">선택해주세요</option>
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
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="궁금한 점이나 요청사항을 자유롭게 작성해주세요."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                처리 중...
              </>
            ) : (
              "무료 상담 신청하기"
            )}
          </button>
        </form>
      )}
    </div>
  );
}

// 기존 ContactSection 컴포넌트
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            무료 <span className="text-blue-700">상담 신청</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            정부조달 인증 및 특허 관련 궁금한 점이 있으시거나 컨설팅이 필요하신가요?
            전문 컨설턴트가 기업에 맞는 최적의 솔루션을 제안해 드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6">문의 안내</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-700 mt-1">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-1">오시는 길</h4>
                    <p className="text-gray-600">경기도 이천시 신둔면 원적로 147번길 34</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-700 mt-1">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-1">전화 문의</h4>
                    <p className="text-gray-600">031-631-6191</p>
                    <p className="text-gray-600">팩스: 031-631-6192</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-700 mt-1">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-1">이메일 문의</h4>
                    <p className="text-gray-600">eddie00700@naver.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-blue-700 mt-1">
                    <FiClock className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-1">업무 시간</h4>
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