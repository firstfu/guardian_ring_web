/**
 * @fileoverview 卡片元件庫 - 提供各種卡片樣式組件
 * @author Guardian Ring Team
 * @version 1.0.0
 * @created 2025-09-03
 * @description 包含 ProblemCard、TestimonialCard、StatCard 等卡片元件
 */

import React from 'react';
import Image from 'next/image';

// 問題卡片介面
export interface ProblemCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

// 問題卡片元件
export const ProblemCard: React.FC<ProblemCardProps> = ({ 
  title, 
  description, 
  icon, 
  className = "" 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border border-gray-200 ${className}`}>
      {icon && (
        <div className="mb-4 text-2xl">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// 推薦卡片介面
export interface TestimonialCardProps {
  name: string;
  content: string;
  avatar?: string;
  title?: string;
  className?: string;
}

// 推薦卡片元件
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  content,
  avatar,
  title,
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border border-gray-200 ${className}`}>
      <p className="text-gray-600 mb-4 italic">&ldquo;{content}&rdquo;</p>
      <div className="flex items-center">
        {avatar && (
          <Image 
            src={avatar} 
            alt={name} 
            width={40}
            height={40}
            className="w-10 h-10 rounded-full mr-3"
          />
        )}
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          {title && <p className="text-sm text-gray-500">{title}</p>}
        </div>
      </div>
    </div>
  );
};

// 統計卡片介面
export interface StatCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

// 統計卡片元件
export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  icon,
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center ${className}`}>
      {icon && (
        <div className="mb-3 text-3xl flex justify-center">
          {icon}
        </div>
      )}
      <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};