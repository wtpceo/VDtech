import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
              대한민국 대표 정부조달 인증 & 특허 컨설팅
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-blue-700">정부조달 인증</span>으로<br />
              더 큰 <span className="text-blue-700">비즈니스 기회</span>를 열어드립니다
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              VD-Tech는 정부조달 인증 취득부터 특허 컨설팅, R&D 과제 수주까지 
              기업 성장에 필요한 모든 컨설팅 서비스를 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  무료 상담 신청
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  서비스 살펴보기
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>10년 이상의 인증 컨설팅 경험</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/hero-image.jpg"
                alt="정부조달 인증 컨설팅"
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full opacity-70 z-0"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-100 rounded-full opacity-70 z-0"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-gray-700">신뢰할 수 있는 파트너사</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image src="/images/client-1.svg" alt="Client logo" width={120} height={40} className="opacity-60 hover:opacity-100 transition-opacity" />
            <Image src="/images/client-2.svg" alt="Client logo" width={120} height={40} className="opacity-60 hover:opacity-100 transition-opacity" />
            <Image src="/images/client-3.svg" alt="Client logo" width={120} height={40} className="opacity-60 hover:opacity-100 transition-opacity" />
            <Image src="/images/client-4.svg" alt="Client logo" width={120} height={40} className="opacity-60 hover:opacity-100 transition-opacity" />
            <Image src="/images/client-5.svg" alt="Client logo" width={120} height={40} className="opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
} 