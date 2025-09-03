/**
 * @fileoverview 字體排版元件庫 - 提供各種文字元件
 * @author Guardian Ring Team
 * @version 1.0.0
 * @created 2025-09-03
 * @description 包含 HeroTitle、HeroSubtitle、SectionTitle、Heading、Text 等文字元件
 */

import React from 'react';

// Hero 標題介面
export interface HeroTitleProps {
  children: React.ReactNode;
  className?: string;
}

// Hero 標題元件
export const HeroTitle: React.FC<HeroTitleProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`text-4xl md:text-6xl font-bold text-white leading-tight ${className}`}>
      {children}
    </h1>
  );
};

// Hero 副標題介面
export interface HeroSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

// Hero 副標題元件
export const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-xl md:text-2xl text-gray-300 leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

// 區塊標題介面
export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

// 區塊標題元件
export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = "" }) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${className}`}>
      {children}
    </h2>
  );
};

// 一般標題介面
export interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

// 一般標題元件
export const Heading: React.FC<HeadingProps> = ({ children, level = 2, className = "" }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const sizeClasses = {
    1: 'text-4xl md:text-5xl',
    2: 'text-2xl md:text-3xl',
    3: 'text-xl md:text-2xl',
    4: 'text-lg md:text-xl',
    5: 'text-base md:text-lg',
    6: 'text-sm md:text-base'
  };

  return (
    <Tag className={`${sizeClasses[level]} font-semibold text-white ${className}`}>
      {children}
    </Tag>
  );
};

// 一般文字介面
export interface TextProps {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  color?: 'white' | 'gray-300' | 'gray-400' | 'blue-400';
  className?: string;
}

// 一般文字元件
export const Text: React.FC<TextProps> = ({ 
  children, 
  size = 'base', 
  color = 'gray-300', 
  className = "" 
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const colorClasses = {
    white: 'text-white',
    'gray-300': 'text-gray-300',
    'gray-400': 'text-gray-400',
    'blue-400': 'text-blue-400'
  };

  return (
    <p className={`${sizeClasses[size]} ${colorClasses[color]} leading-relaxed ${className}`}>
      {children}
    </p>
  );
};