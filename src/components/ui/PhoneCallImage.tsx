/**
 * 手機來電圖片展示組件
 * 建立日期：2025-09-03
 * 描述：直接使用用戶提供的真實 iOS 來電截圖
 * 功能：展示真實的來電介面截圖，保持原始品質和外觀
 * 版本：1.1
 * 作者：Guardian Ring 開發團隊
 * 更新紀錄：
 *   - 2025-09-03: 初版建立，精確還原用戶截圖的視覺效果
 *   - 2025-09-03: 更新為直接使用真實截圖圖片
 * 注意事項：
 *   - 使用 Next.js Image 組件優化圖片載入
 *   - 保持截圖的原始品質和比例
 *   - 支援響應式設計和光暈效果
 */

'use client';

import React from 'react';
import Image from 'next/image';

interface PhoneCallImageProps {
  showDemo?: boolean;
  className?: string;
}

export default function PhoneCallImage({
  showDemo = false,
  className = ''
}: PhoneCallImageProps) {

  // 您的真實來電截圖 base64 編碼
  // 注意：實際使用時應該將圖片放在 public/images/ 資料夾中
  const phoneCallScreenshot = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

  return (
    <div className={`relative ${className}`}>
      {/* 手機外框和截圖展示 */}
      <div className="relative w-[280px] h-[580px] mx-auto">
        
        {/* 如果有真實截圖，直接顯示 */}
        <div className="relative w-full h-full rounded-[50px] overflow-hidden shadow-2xl">
          <Image
            src="/images/mom-call-screenshot.png"
            alt="守護鈴來電示範 - 媽媽的來電"
            width={280}
            height={580}
            className="w-full h-full object-cover rounded-[50px]"
            priority
            quality={100}
            onError={(e) => {
              console.log('圖片載入失敗，請確保截圖已放在 public/images/ 資料夾中');
              // 如果圖片載入失敗，顯示備用內容
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          
          {/* 如果圖片載入失敗的備用顯示 */}
          <div className="absolute inset-0 bg-gray-800 rounded-[50px] flex items-center justify-center">
            <div className="text-white text-center p-6">
              <div className="text-4xl mb-4">📱</div>
              <div className="text-lg mb-2">來電截圖</div>
              <div className="text-sm text-gray-300">請將截圖放在 public/images/ 資料夾</div>
            </div>
          </div>
        </div>
      </div>

      {/* 展示標籤 */}
      {showDemo && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          真實的來電體驗
        </div>
      )}
    </div>
  );
}