/**
 * 手機來電模擬器組件
 * 建立日期：2025-09-03
 * 描述：模擬 iOS 風格的來電介面，展示守護鈴應用的核心功能
 * 功能：呈現逼真的來電畫面，包含聯絡人資訊、接聽/拒絕按鈕和動畫效果
 * 版本：1.0
 * 作者：Guardian Ring 開發團隊
 * 更新紀錄：
 *   - 2025-09-03: 初版建立，包含基本的來電介面和動畫效果
 * 注意事項：
 *   - 設計完全還原 iOS 來電介面的視覺效果
 *   - 支援響應式設計，適配不同螢幕尺寸
 *   - 包含滑動接聽動畫和視覺回饋效果
 */

'use client';

import React, { useState, useEffect } from 'react';

interface PhoneCallSimulatorProps {
  contactName?: string;
  contactLabel?: string;
  isAnimated?: boolean;
  showDemo?: boolean;
}

export default function PhoneCallSimulator({
  contactName = '媽媽',
  contactLabel = '行動電話',
  isAnimated = true,
  showDemo = false
}: PhoneCallSimulatorProps) {
  const [isRinging, setIsRinging] = useState(false);
  const [showSlideToAnswer, setShowSlideToAnswer] = useState(true);

  useEffect(() => {
    if (isAnimated) {
      // 模擬來電震動和鈴聲效果
      const ringInterval = setInterval(() => {
        setIsRinging(prev => !prev);
      }, 1000);

      return () => clearInterval(ringInterval);
    }
  }, [isAnimated]);

  const handleAcceptCall = () => {
    setShowSlideToAnswer(false);
    // 可以在這裡加入更多互動效果
  };

  const currentTime = new Date().toLocaleTimeString('zh-TW', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const currentDate = new Date().toLocaleDateString('zh-TW', {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  return (
    <div className="relative mx-auto">
      {/* iPhone 外框 */}
      <div className="relative w-[280px] h-[580px] bg-black rounded-[50px] p-[8px] shadow-2xl">
        {/* iPhone 螢幕 */}
        <div className="w-full h-full bg-black rounded-[42px] overflow-hidden relative">
          
          {/* 狀態列 */}
          <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-6 pt-3 pb-1">
            <div className="text-white text-sm font-medium">
              {currentTime}
            </div>
            <div className="flex items-center space-x-1">
              {/* 訊號強度 */}
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 bg-white rounded-full ${
                      i === 0 ? 'h-2' : i === 1 ? 'h-3' : i === 2 ? 'h-4' : 'h-5'
                    }`}
                  />
                ))}
              </div>
              {/* WiFi 圖標 */}
              <svg className="w-4 h-4 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21L24 8.98C20.93 5.9 16.69 4 12 4Z" />
              </svg>
              {/* 電池圖標 */}
              <div className="ml-2 w-6 h-3 border border-white rounded-sm flex items-center">
                <div className="w-4 h-2 bg-white rounded-sm ml-0.5" />
                <div className="w-0.5 h-1 bg-white rounded-r-sm ml-0.5" />
              </div>
            </div>
          </div>

          {/* 來電背景漸層 */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />

          {/* 動態背景效果 */}
          {isAnimated && (
            <div className={`absolute inset-0 transition-opacity duration-1000 ${
              isRinging ? 'opacity-20' : 'opacity-10'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-purple-600" />
            </div>
          )}

          {/* 主要來電內容 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
            
            {/* "來電中" 標籤 */}
            <div className="mb-4">
              <span className="text-sm text-gray-300 font-light tracking-wide">來電中</span>
            </div>

            {/* 聯絡人大頭照 */}
            <div className={`w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mb-6 shadow-lg ${
              isAnimated && isRinging ? 'animate-pulse' : ''
            }`}>
              <span className="text-4xl font-bold text-white">媽</span>
            </div>

            {/* 聯絡人姓名 */}
            <h2 className="text-3xl font-light text-white mb-2 tracking-wide">
              {contactName}
            </h2>

            {/* 聯絡人標籤 */}
            <p className="text-lg text-gray-300 font-light mb-8">
              {contactLabel}
            </p>

            {/* 快速操作按鈕 */}
            <div className="flex space-x-12 mb-16">
              {/* 提醒稍後 */}
              <button className="w-14 h-14 bg-gray-700 bg-opacity-50 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              
              {/* 訊息 */}
              <button className="w-14 h-14 bg-gray-700 bg-opacity-50 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>

          {/* 底部接聽/拒接操作區 */}
          {showSlideToAnswer ? (
            <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center px-6">
              <div className="flex items-center justify-between w-full max-w-xs">
                
                {/* 拒接按鈕 */}
                <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 3l18 18" />
                  </svg>
                </button>

                {/* 滑動接聽區域 */}
                <div className="relative flex-1 mx-4">
                  <div className="h-16 bg-gray-800 bg-opacity-60 rounded-full flex items-center backdrop-blur-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">滑動接聽</span>
                    </div>
                    
                    {/* 滑動動畫指示器 */}
                    {isAnimated && (
                      <div className="absolute left-1 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* 接聽按鈕 (隱藏，僅用於平衡佈局) */}
                <div className="w-16 h-16" />
              </div>
            </div>
          ) : (
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <div className="bg-green-500 px-6 py-2 rounded-full">
                <span className="text-white font-medium">通話中...</span>
              </div>
            </div>
          )}

          {/* Home 指示器 */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60" />
        </div>
      </div>

      {/* 展示標籤 */}
      {showDemo && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          逼真的來電體驗
        </div>
      )}
    </div>
  );
}