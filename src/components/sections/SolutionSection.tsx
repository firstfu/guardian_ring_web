/**
 * Solution Section Component
 * 守護鈴登陸頁面的功能解決方案區塊組件
 * 展示產品的核心功能和解決方案，使用左右交錯的圖文佈局
 * 版本：1.0
 * 建立日期：2025-09-03
 * 功能：
 *   - 三大功能亮點展示
 *   - 左右交錯的圖文佈局
 *   - 功能描述和視覺化展示
 *   - 滾動觸發動畫效果
 *   - 響應式設計適配
 */

import React from 'react';

// 定義功能特色的資料結構
interface FeatureProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  imagePlaceholder: string;
  reversed?: boolean;
}

// 功能特色組件
const FeatureItem: React.FC<FeatureProps> = ({ 
  title, 
  subtitle, 
  description, 
  icon, 
  imagePlaceholder, 
  reversed = false 
}) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${
      reversed ? 'lg:flex-row-reverse' : ''
    }`}>
      {/* 文字內容 */}
      <div className="flex-1 space-y-6">
        {/* 圖示和標題 */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {title}
            </h3>
            <p className="text-blue-400 font-medium">
              {subtitle}
            </p>
          </div>
        </div>
        
        {/* 描述 */}
        <p className="text-lg text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* 視覺化展示區域 */}
      <div className="flex-1">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm mb-4">{imagePlaceholder}</p>
            <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">功能展示區域</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SolutionSection() {
  // 定義三大功能特色
  const features: FeatureProps[] = [
    {
      title: "絕對真實，無懈可擊",
      subtitle: "完美模擬真實來電體驗",
      description: "使用真實的 iOS 來電介面，包含聯絡人姓名、大頭貼、和完整的通話功能。任何人看到都會相信這是一通真正的來電，讓你在任何場合都能自然地離開。",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.27-.27.35-.67.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
        </svg>
      ),
      imagePlaceholder: "iOS 來電介面動畫展示",
      reversed: false
    },
    {
      title: "智慧排程，從容應對",
      subtitle: "靈活的時間控制系統",
      description: "預設多種情境模式：緊急脫身（立即來電）、優雅告退（5分鐘後）、定時提醒（自訂時間）。智慧學習你的使用習慣，在適當的時機提供最佳的脫身方案。",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      ),
      imagePlaceholder: "App 時間排程介面截圖",
      reversed: true
    },
    {
      title: "隱私至上，安全無虞",
      subtitle: "你的資料只屬於你",
      description: "所有資料僅存儲在你的設備上，不會上傳到任何伺服器。無需註冊、無廣告干擾、無數據追蹤。完全離線運作，確保你的隱私和使用記錄永遠安全。",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.8 10.4,10V11H13.6V10C13.6,8.8 12.8,8.2 12,8.2Z"/>
        </svg>
      ),
      imagePlaceholder: "隱私保護功能說明圖",
      reversed: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* 區塊標題 */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            完美解決方案，
            <span className="block text-blue-400">就在你的口袋裡</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            「守護鈴」結合先進技術與人性化設計，為你提供最自然、最可信的脫身方案
          </p>
        </div>

        {/* 功能特色列表 */}
        <div className="space-y-0">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              {...feature}
            />
          ))}
        </div>

        {/* 底部強調 */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 bg-blue-500/20 backdrop-blur-sm rounded-full px-8 py-4 border border-blue-400/30">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-white font-medium">
              永久免費，無廣告，無隱藏收費
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}