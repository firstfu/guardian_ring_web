/**
 * Social Proof Section Component
 * 守護鈴登陸頁面的社會認同區塊組件
 * 展示用戶評價和使用統計，建立信任感和社會認同
 * 版本：1.0
 * 建立日期：2025-09-03
 * 功能：
 *   - 用戶評價輪播展示
 *   - 使用統計數據展示
 *   - 自動輪播和手動控制
 *   - 用戶頭像和評分系統
 *   - 響應式設計適配
 */

'use client';

import React, { useState, useEffect } from 'react';

// 定義評價資料結構
interface TestimonialProps {
  id: number;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  comment: string;
  situation: string;
}

// 評價卡片組件
const TestimonialCard: React.FC<TestimonialProps> = ({ 
  name, 
  avatar, 
  location, 
  rating, 
  comment, 
  situation 
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/30 transition-all duration-300">
      {/* 評分星星 */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      
      {/* 評價內容 */}
      <blockquote className="text-white text-lg leading-relaxed mb-4">
        "{comment}"
      </blockquote>
      
      {/* 使用情境標籤 */}
      <div className="mb-4">
        <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
          {situation}
        </span>
      </div>
      
      {/* 用戶資訊 */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
          {avatar}
        </div>
        <div>
          <div className="text-white font-medium">{name}</div>
          <div className="text-gray-400 text-sm">{location}</div>
        </div>
      </div>
    </div>
  );
};

// 統計數據組件
const StatCard: React.FC<{ number: string; label: string; icon: React.ReactNode }> = ({ 
  number, 
  label, 
  icon 
}) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-4 mx-auto">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {number}
      </div>
      <div className="text-gray-400">
        {label}
      </div>
    </div>
  );
};

export default function SocialProofSection() {
  // 用戶評價資料
  const testimonials: TestimonialProps[] = [
    {
      id: 1,
      name: "小華",
      avatar: "小華",
      location: "台北市",
      rating: 5,
      comment: "真的太神奇了！上次公司聚餐拖太久，用了這個 App 立刻有完美的理由離開。同事們都沒有懷疑，超自然的！",
      situation: "工作應酬"
    },
    {
      id: 2,
      name: "Amy",
      avatar: "A",
      location: "台中市",
      rating: 5,
      comment: "約會遇到恐怖情人時的救星！來電介面完全就像真的一樣，讓我安全脫身。現在出門約會都會準備好這個 App。",
      situation: "約會脫身"
    },
    {
      id: 3,
      name: "阿明",
      avatar: "明",
      location: "高雄市",
      rating: 5,
      comment: "夜班下班走夜路時很有安全感，假裝在講電話讓我感覺不再孤單。設定很簡單，效果很逼真！",
      situation: "夜歸安全"
    },
    {
      id: 4,
      name: "Linda",
      avatar: "L",
      location: "新竹市",
      rating: 5,
      comment: "業務拜訪時遇到難纏客戶的最佳幫手。緊急來電功能讓我能夠優雅地結束會面，客戶完全不會起疑心。",
      situation: "商務會面"
    }
  ];

  // 當前顯示的評價索引
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動輪播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // 統計數據
  const stats = [
    {
      number: "10,000+",
      label: "活躍用戶",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4zm-4 6c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    },
    {
      number: "50,000+",
      label: "成功脫身次數",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      number: "4.9",
      label: "App Store 評分",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      number: "99%",
      label: "推薦率",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* 區塊標題 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            超過 <span className="text-blue-400">10,000+</span> 用戶的
            <span className="block">信賴選擇</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            真實用戶分享他們的成功脫身經驗，看看「守護鈴」如何改變他們的社交生活
          </p>
        </div>

        {/* 統計數據 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* 用戶評價輪播 */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <TestimonialCard {...testimonials[currentIndex]} />
          </div>

          {/* 輪播指示器 */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-400 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl text-white font-medium mb-4">
            加入這個不斷成長的社群
          </p>
          <p className="text-gray-400">
            讓「守護鈴」成為你社交生活中最可靠的夥伴
          </p>
        </div>
      </div>
    </section>
  );
}