// CMS 연동을 위한 인터페이스 및 함수 정의

// 콘텐츠 타입 인터페이스 정의
export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  publishedAt: string;
  author: {
    name: string;
    avatar?: string;
  }
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  industry: string;
  technologies: string[];
  featuredImage?: string;
  galleryImages?: string[];
}

export interface ServiceInfo {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: string;
  features: {
    title: string;
    description: string;
  }[];
}

// API 엔드포인트 (실제 구현 시 환경 변수로 관리)
const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL || 'https://api.example.com';
const CMS_API_KEY = process.env.CMS_API_KEY;

// API 호출 함수
async function fetchAPI(endpoint: string, params?: Record<string, string>) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (CMS_API_KEY) {
    headers['Authorization'] = `Bearer ${CMS_API_KEY}`;
  }

  const queryString = params ? 
    '?' + Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&') 
    : '';

  try {
    const response = await fetch(`${CMS_API_URL}${endpoint}${queryString}`, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API 요청 중 오류:', error);
    throw error;
  }
}

// 데이터 가져오기 함수
export async function getCaseStudies(limit?: number): Promise<CaseStudy[]> {
  const params: Record<string, string> = {};
  if (limit) params.limit = limit.toString();
  
  const data = await fetchAPI('/case-studies', params);
  return data.caseStudies;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy> {
  const data = await fetchAPI(`/case-studies/${slug}`);
  return data.caseStudy;
}

export async function getServices(): Promise<ServiceInfo[]> {
  const data = await fetchAPI('/services');
  return data.services;
}

export async function getServiceBySlug(slug: string): Promise<ServiceInfo> {
  const data = await fetchAPI(`/services/${slug}`);
  return data.service;
}

export async function getPosts(limit?: number): Promise<Post[]> {
  const params: Record<string, string> = {};
  if (limit) params.limit = limit.toString();
  
  const data = await fetchAPI('/posts', params);
  return data.posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const data = await fetchAPI(`/posts/${slug}`);
  return data.post;
}

// 양식 제출 함수
export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}) {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (CMS_API_KEY) {
      headers['Authorization'] = `Bearer ${CMS_API_KEY}`;
    }
    
    const response = await fetch(`${CMS_API_URL}/contact`, {
      method: 'POST',
      headers,
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`양식 제출 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('양식 제출 중 오류:', error);
    throw error;
  }
} 