/**
 * Final CTA Section Component
 * 守護鈴登陸頁面的最終行動呼籲區塊組件
 * 包含下載按鈕和最後的說服元素，促使用戶採取行動
 * 版本：1.0
 * 建立日期：2025-09-03
 * 功能：
 *   - 強化版 CTA 按鈕設計
 *   - App Store 和 Google Play 下載連結
 *   - 最終說服文案和保證
 *   - 全寬度強調背景
 *   - 按鈕懸停和點擊效果
 */

'use client';

import React from 'react';

// 下載按鈕組件
const DownloadButton: React.FC<{
  platform: 'ios' | 'android';
  onClick: () => void;
}> = ({ platform, onClick }) => {
  const isIOS = platform === 'ios';
  
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 bg-white text-black font-semibold py-4 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg min-w-[200px]"
    >
      {/* App Store / Google Play Icon */}
      <div className="w-8 h-8">
        {isIOS ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
        )}
      </div>
      
      <div className="text-left">
        <div className="text-xs text-gray-600">
          {isIOS ? 'Download on the' : 'GET IT ON'}
        </div>
        <div className="text-lg font-bold leading-tight">
          {isIOS ? 'App Store' : 'Google Play'}
        </div>
      </div>
    </button>
  );
};

export default function FinalCTASection() {
  // 處理下載按鈕點擊
  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/us/app/%E5%AE%88%E8%AD%B7%E9%88%B4-%E7%B7%8A%E6%80%A5%E8%84%AB%E8%BA%AB%E6%95%91%E6%8F%B4%E7%A5%9E%E5%99%A8/id6751815031', '_blank');
  };

  const handleGooglePlayClick = () => {
    alert('Android 版本正在開發中，敬請期待！\n請先下載 iOS 版本體驗完整功能。');
  };

  return (
    <section data-section="final-cta" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      {/* 背景裝飾元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* 主標題 */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            你的社交緩衝，
            <span className="block text-yellow-300">你的安全感，</span>
            <span className="block">現在就掌握</span>
          </h2>
          
          {/* 副標題 */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            永久免費，無廣告干擾，讓「守護鈴」成為你最信賴的社交夥伴
          </p>

          {/* 特色強調 */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              '✓ 完全免費使用',
              '✓ 無廣告干擾', 
              '✓ 隱私完全保護',
              '✓ 離線完全可用'
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white font-medium">
                {feature}
              </div>
            ))}
          </div>

          {/* 下載按鈕 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <DownloadButton platform="ios" onClick={handleAppStoreClick} />
            <DownloadButton platform="android" onClick={handleGooglePlayClick} />
          </div>

          {/* 支援裝置說明 */}
          <p className="text-blue-200 text-sm mb-8">
            支援 iOS 13.0+ 和 Android 8.0+ 裝置
          </p>

          {/* 最後的保證文字 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              30 天滿意保證
            </h3>
            <p className="text-blue-100 leading-relaxed">
              我們相信「守護鈴」會成為你不可或缺的社交工具。如果你在使用後不滿意，
              我們提供 30 天內的全額退款保證。但別擔心 - 這個 App 完全免費，
              你唯一會後悔的就是沒有早點發現它！
            </p>
          </div>

          {/* 下載統計 */}
          <div className="mt-12 text-center">
            <p className="text-blue-200 text-lg">
              已有超過 <span className="text-white font-bold">10,000+</span> 人下載使用
            </p>
            <div className="flex justify-center gap-2 mt-4">
              {/* 小頭像展示 */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                  style={{ marginLeft: i > 0 ? '-8px' : '0', zIndex: 8 - i }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xs ml-2">
                +1K
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}