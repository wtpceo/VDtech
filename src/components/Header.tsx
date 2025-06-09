"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md z-50 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center">
            <div className="relative w-[200px] h-[50px]">
              <Image 
                src="/VDTECH-logo.svg" 
                alt="VD-Tech 로고" 
                fill 
                priority
                className="object-contain"
                sizes="200px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="text-2xl font-bold text-[#1A2B5C]">VD<span class="text-[#FFD95A]">-</span>Tech</span>';
                  }
                }}
              />
            </div>
          </Link>

          {/* 모바일 메뉴 버튼 */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6 text-[#1A2B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium text-[#1A2B5C] hover:text-[#FFD95A] transition-colors">홈</Link>
            <Link href="/services" className="font-medium text-[#1A2B5C] hover:text-[#FFD95A] transition-colors">서비스</Link>
            <Link href="/cases" className="font-medium text-[#1A2B5C] hover:text-[#FFD95A] transition-colors">사례</Link>
            <Link href="/about" className="font-medium text-[#1A2B5C] hover:text-[#FFD95A] transition-colors">회사소개</Link>
            <Link href="/contact" className="font-medium text-[#1A2B5C] hover:text-[#FFD95A] transition-colors">문의</Link>
          </nav>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="font-medium text-[#1A2B5C] hover:text-[#FFD95A] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                홈
              </Link>
              <Link 
                href="/services" 
                className="font-medium text-[#1A2B5C] hover:text-[#FFD95A] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                서비스
              </Link>
              <Link 
                href="/cases" 
                className="font-medium text-[#1A2B5C] hover:text-[#FFD95A] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                사례
              </Link>
              <Link 
                href="/about" 
                className="font-medium text-[#1A2B5C] hover:text-[#FFD95A] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                회사소개
              </Link>
              <Link 
                href="/contact" 
                className="font-medium text-[#1A2B5C] hover:text-[#FFD95A] transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                문의
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 