/**
 * Problem Section Component
 * 守護鈴登陸頁面的痛點共鳴區塊組件
 * 展示用戶在日常生活中遇到的社交困境，引起共鳴
 * 版本：1.0
 * 建立日期：2025-09-03
 * 功能：
 *   - 三欄式卡片佈局展示不同情境
 *   - 響應式設計，手機版改為單欄
 *   - 卡片懸停效果和動畫
 *   - 情境圖示和描述文字
 */

import React from 'react';

// 定義情境卡片的資料結構
interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// 情境卡片組件
const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-white/20">
      <div className="text-center">
        {/* 圖示 */}
        <div className="mb-4 flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500/20 text-red-400">
            {icon}
          </div>
        </div>
        
        {/* 標題 */}
        <h3 className="text-xl font-bold text-white mb-3">
          {title}
        </h3>
        
        {/* 描述 */}
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function ProblemSection() {
  // 定義三種情境的資料
  const problemScenarios = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5L21 9ZM3 7V9L9 8.5V6.5L3 7ZM9.5 11.5C9.5 11.5 8.5 11.5 8.5 13.5S9.5 15.5 9.5 15.5V21H11V15.5H13V21H14.5V15.5C14.5 15.5 15.5 15.5 15.5 13.5S14.5 11.5 14.5 11.5H9.5Z"/>
        </svg>
      ),
      title: "尷尬約會",
      description: "遇到話不投機的約會對象，氣氛尷尬到令人窒息。你需要一個體面的理由離開現場，而不是直接說「我要走了」。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
        </svg>
      ),
      title: "冗長應酬",
      description: "工作應酬拖得太久，你想早點回家陪家人，但又不好意思直接離席。需要一個合理的藉口脫身。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      ),
      title: "夜歸不安",
      description: "深夜獨自在陌生環境或感到不安全的地方，需要一個緊急聯絡人的關注，讓你感到不再孤單。"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* 區塊標題 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            你是否也想從這些時刻
            <span className="block text-red-400">「被拯救」？</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            生活中總有些時刻，我們需要一個完美的藉口來脫身。這些情境你一定不陌生...
          </p>
        </div>

        {/* 三欄式卡片佈局 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemScenarios.map((scenario, index) => (
            <ProblemCard
              key={index}
              icon={scenario.icon}
              title={scenario.title}
              description={scenario.description}
            />
          ))}
        </div>

        {/* 底部強調文字 */}
        <div className="text-center mt-16">
          <p className="text-2xl font-medium text-white">
            現在，你有了<span className="text-blue-400 font-bold">最完美的解決方案</span>
          </p>
        </div>
      </div>
    </section>
  );
}