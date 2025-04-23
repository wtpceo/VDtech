import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2B5C] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <Link href="/">
                <div className="relative inline-block">
                  {/* 로고 이미지가 준비되면 아래 주석을 해제하고 사용하세요 */}
                  {/* <Image src="/images/logo.svg" alt="VD-Tech 로고" fill /> */}
                  <span className="text-2xl font-bold text-white">VD<span className="text-[#FFD95A]">-</span>Tech</span>
                </div>
              </Link>
            </div>
            <p className="text-blue-100 mb-6">
              VD-Tech는 정부조달 인증 및 특허 컨설팅 전문기업으로, 기업의 기술력 인정과 안정적인 판로 확보를 위한 최고의 파트너입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-[#FFD95A] transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-[#FFD95A] transition-colors" aria-label="Twitter">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-[#FFD95A] transition-colors" aria-label="Facebook">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-[#FFD95A] transition-colors" aria-label="Youtube">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-[#FFD95A] transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 text-[#FFD95A]">빠른 링크</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-100 hover:text-[#FFD95A] transition-colors">홈</Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-[#FFD95A] transition-colors">서비스</Link>
              </li>
              <li>
                <Link href="/cases" className="text-blue-100 hover:text-[#FFD95A] transition-colors">성공 사례</Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-[#FFD95A] transition-colors">회사 소개</Link>
              </li>
              <li>
                <Link href="/team" className="text-blue-100 hover:text-[#FFD95A] transition-colors">전문가 팀</Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-[#FFD95A] transition-colors">문의하기</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 text-[#FFD95A]">서비스</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/procurement" className="text-blue-100 hover:text-[#FFD95A] transition-colors">조달청 등록 컨설팅</Link>
              </li>
              <li>
                <Link href="/services/excellent" className="text-blue-100 hover:text-[#FFD95A] transition-colors">우수조달 지정 컨설팅</Link>
              </li>
              <li>
                <Link href="/services/patent" className="text-blue-100 hover:text-[#FFD95A] transition-colors">특허 출원/전략 컨설팅</Link>
              </li>
              <li>
                <Link href="/services/rnd" className="text-blue-100 hover:text-[#FFD95A] transition-colors">R&D 과제기획 컨설팅</Link>
              </li>
              <li>
                <Link href="/services/support" className="text-blue-100 hover:text-[#FFD95A] transition-colors">정부지원사업 컨설팅</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 text-[#FFD95A]">연락처</h3>
            <ul className="space-y-3 text-blue-100">
              <li>
                <strong className="block text-white">주소:</strong>
                서울특별시 강남구 테헤란로 123, 7층
              </li>
              <li>
                <strong className="block text-white">전화:</strong>
                02-1234-5678
              </li>
              <li>
                <strong className="block text-white">이메일:</strong>
                info@vdtech.kr
              </li>
              <li>
                <strong className="block text-white">업무시간:</strong>
                평일 09:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; {currentYear} VD-Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-blue-200">
              <Link href="/privacy" className="hover:text-[#FFD95A] transition-colors">개인정보처리방침</Link>
              <Link href="/terms" className="hover:text-[#FFD95A] transition-colors">이용약관</Link>
              <Link href="/sitemap" className="hover:text-[#FFD95A] transition-colors">사이트맵</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 