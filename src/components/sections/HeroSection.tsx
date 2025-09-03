/**
 * Hero Section Component
 * 守護鈴登陸頁面的英雄區塊組件
 * 包含主標題、副標題和主要 CTA 按鈕
 */

'use client';

import React from 'react';

export default function HeroSection() {
  // 處理下載按鈕點擊
  const handleDownloadClick = () => {
    console.log('Hero download button clicked');
    // 滾動到最終 CTA 區塊
    document.querySelector('[data-section="final-cta"]')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  // 處理觀看示範按鈕點擊
  const handleDemoClick = () => {
    console.log('Demo button clicked');
    // 滾動到功能介紹區塊
    document.querySelector('[data-section="features"]')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* 背景漸層效果 */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* 主要內容 */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* 主標題 */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          這個來電，
          <span className="block text-blue-400">是你的最佳藉口。</span>
        </h1>
        
        {/* 副標題 */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          告別尷尬社交，應對不安全情境。「守護鈴」用最真實的模擬來電，為你創造完美的脫身時機。
        </p>
        
        {/* CTA 按鈕群 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleDownloadClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            免費下載，取回你的主導權
          </button>
          
          <button 
            onClick={handleDemoClick}
            className="text-blue-400 hover:text-blue-300 font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 border border-blue-400 hover:border-blue-300"
          >
            看看它是如何運作的 ↓
          </button>
        </div>
      </div>
      
      {/* 滾動提示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}