"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium rounded-lg transition-colors focus:outline-none";
  
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
    link: "bg-transparent text-blue-600 hover:underline p-0"
  };
  
  const sizeStyles = {
    default: "px-5 py-2.5",
    sm: "px-3 py-1.5 text-sm",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        variant !== "link" && sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 