/**
 * Footer Component
 * 守護鈴登陸頁面的頁腳組件
 * 包含版權聲明、法律連結和基本聯繫資訊
 * 版本：1.0
 * 建立日期：2025-09-03
 * 功能：
 *   - 版權聲明
 *   - 隱私權政策連結
 *   - 聯繫我們連結
 *   - 簡潔的頁腳設計
 *   - 響應式佈局
 */

'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // 處理聯繫我們點擊
  const handleContactClick = () => {
    window.location.href = 'mailto:support@guardianring.app';
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo 和標語 */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              {/* Logo 圖示 */}
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.27-.27.35-.67.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                </svg>
              </div>
              
              {/* 品牌名稱 */}
              <div>
                <h3 className="text-xl font-bold text-white">守護鈴</h3>
                <p className="text-sm text-gray-400">Guardian Ring</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm max-w-md">
              你的社交緩衝，隨時隨地為你創造完美的脱身時機
            </p>
          </div>

          {/* 連結列表 */}
          <div className="flex flex-col sm:flex-row gap-6 text-center md:text-right">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              隱私權政策
            </Link>
            
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              使用條款
            </Link>
            
            <button
              onClick={handleContactClick}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              聯繫我們
            </button>
            
            <a 
              href="mailto:support@guardianring.app"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              support@guardianring.app
            </a>
          </div>
        </div>

        {/* 分隔線 */}
        <hr className="border-gray-800 my-8" />

        {/* 版權聲明和額外資訊 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-gray-400 text-sm">
            © {currentYear} Guardian Ring. 版權所有。
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-500">
            <span>台灣製造 🇹🇼</span>
            <span>•</span>
            <span>用心打造的社交工具</span>
            <span>•</span>
            <span>永久免費使用</span>
          </div>
        </div>

        {/* 額外的法律聲明 */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
            守護鈴（Guardian Ring）是一個社交輔助工具，請在合法和道德的範圍內使用。
            我們不鼓勵或支持任何形式的欺騙行為，用戶應為自己的使用行為負責。
            本產品僅用於幫助用戶在不舒適的社交情況下優雅地脫身。
          </p>
        </div>
      </div>
    </footer>
  );
}