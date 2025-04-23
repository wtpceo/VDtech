"use client";

import { motion, useInView, Variants, useMotionValue, animate } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

// 사용 가능한 애니메이션 타입 정의
export type AnimationType = 
  | "fadeIn"
  | "slideUp"
  | "slideDown" 
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "scaleUp"
  | "none";

export interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

// 애니메이션 변형 옵션
const animations: Record<AnimationType, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  },
  none: {
    hidden: {},
    visible: {}
  }
};

// 스태거 자식 요소를 위한 컨테이너 변형
const containerVariants: Variants = {
  hidden: {},
  visible: (staggerDelay: number = 0.1) => ({
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1
    }
  })
};

export default function AnimatedSection({
  children,
  animation = "fadeIn",
  duration = 0.6,
  delay = 0.1,
  className = "",
  once = true,
  staggerChildren = false,
  staggerDelay = 0.1
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  const selectedAnimation = animations[animation];

  // 스태거 효과가 적용된 컨테이너인 경우
  if (staggerChildren) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        custom={staggerDelay}
      >
        {children}
      </motion.div>
    );
  }

  // 일반 애니메이션 섹션
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// 자식 요소를 위한 애니메이션 아이템 컴포넌트
export function AnimatedItem({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  className = ""
}: Omit<AnimatedSectionProps, "once" | "staggerChildren" | "staggerDelay"> & { delay?: number }) {
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      className={className}
      variants={selectedAnimation}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// 숫자 카운트업 애니메이션 컴포넌트
export function CountUpAnimation({
  end,
  duration = 2,
  className = "",
  prefix = "",
  suffix = ""
}: {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);
  
  useEffect(() => {
    if (isInView) {
      const animation = animate(count, end, { 
        duration,
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        }
      });
      
      return animation.stop;
    }
  }, [count, end, duration, isInView]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
} 