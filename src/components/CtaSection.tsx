import Link from "next/link";
import { CheckIcon } from "./icons/CommonIcons";

export default function CtaSection() {
  return (
    <section className="py-20 bg-[#1A2B5C]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 바로 무료 상담을 신청하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            VD-Tech의 전문가들이 귀사의 성장을 위한 최적의 솔루션을 제시해드립니다.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <div className="flex items-center">
              <CheckIcon className="text-yellow-300 mr-2" />
              <span className="text-white">높은 인증 획득률</span>
            </div>
            <div className="flex items-center">
              <CheckIcon className="text-yellow-300 mr-2" />
              <span className="text-white">10년 이상의 컨설팅 경험</span>
            </div>
            <div className="flex items-center">
              <CheckIcon className="text-yellow-300 mr-2" />
              <span className="text-white">전문 특허 컨설턴트</span>
            </div>
          </div>
          
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-[#FFD95A] hover:bg-yellow-400 text-[#1A2B5C] font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              무료 상담 신청하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 