/**
 * @fileoverview UI 元件匯出文件 - 統一匯出所有 UI 相關元件
 * @author Guardian Ring Team
 * @version 1.0.0
 * @created 2025-09-03
 * @description 此文件提供所有 UI 元件的統一匯出接口，方便其他組件引用
 */

import React from 'react';

// Icon 元件
export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color, className }) => {
  // 簡單的 Icon 實現，可以根據需要擴展
  return (
    <div 
      className={`inline-block ${className}`}
      style={{ 
        width: size, 
        height: size, 
        color: color 
      }}
      aria-label={name}
    >
      {/* 這裡可以放置實際的 Icon 實現 */}
      <span>📱</span>
    </div>
  );
};