import Link from "next/link";

export default function Thanks() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center p-8">
        <div className="text-green-500 text-5xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4">문의해 주셔서 감사합니다!</h1>
        <p className="text-gray-600 mb-8 text-lg">
          담당자가 1영업일 이내에 연락드리도록 하겠습니다.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
} 