import Link from "next/link";
import Button from "./Button";

export default function CtaSection() {
  return (
    <section className="bg-blue-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              VD-Tech와 함께 <span className="text-yellow-300">정부조달 인증</span>을 획득하세요
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
              전문성과 경험을 바탕으로 귀사의 제품이 정부조달 시장에 진입할 수 있도록 맞춤형 컨설팅을 제공합니다.
              지금 문의하시고 무료 상담을 받아보세요.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>높은 인증 획득률</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>10년 이상의 컨설팅 경험</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>전문 특허 컨설턴트</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>맞춤형 R&D 솔루션</span>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 lg:w-1/3">
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">무료 컨설팅</h3>
              <p className="mb-6 text-gray-600">지금 문의하시면 귀사의 제품 및 서비스에 대한 무료 컨설팅을 제공해 드립니다.</p>
              <Link href="/contact">
                <Button className="w-full" size="lg">
                  무료 상담 신청하기
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4 text-center">
                또는 전화로 문의하세요: <br />
                <span className="font-semibold text-gray-700">02-123-4567</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 