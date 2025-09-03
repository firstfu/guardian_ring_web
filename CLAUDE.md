# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build` (uses Turbopack)
- **Start production server**: `npm start`
- **Lint code**: `npm run lint` (ESLint with Next.js TypeScript config)

## Project Architecture

This is a Next.js 15 application using the App Router architecture with TypeScript and Tailwind CSS.

### Key Technologies
- **Framework**: Next.js 15.5.2 with App Router
- **Runtime**: React 19.1.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Build Tool**: Turbopack (Next.js default)
- **TypeScript**: Strict mode enabled

### Directory Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind imports and CSS variables
- `src/` - 所有新開發的程式碼都放在此資料夾
- `docs/` - 專案文件目錄
  - `prd.md` - 產品需求文件 (Product Requirements Document)
  - `todo.md` - 專案任務清單與進度追蹤
- `public/` - Static assets

### Configuration Files
- `tsconfig.json` - TypeScript configuration with path mapping (`@/*` to `./`)
- `eslint.config.mjs` - ESLint configuration extending Next.js core web vitals and TypeScript rules
- `next.config.ts` - Next.js configuration (currently minimal)
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS processing

### Styling System
- Uses Tailwind CSS v4 with inline theme configuration
- CSS variables for theming (`--background`, `--foreground`)
- Dark mode support via `prefers-color-scheme`
- Font variables integrated with Tailwind theme

### Development Notes
- Project uses Turbopack for faster development and builds
- TypeScript strict mode is enabled
- All builds and linting use the latest Next.js conventions
- Font optimization is handled automatically via `next/font`

## 專案管理流程 (Project Management Process)

### 文件結構說明
1. **PRD 文件**: 產品需求文件存放於 `docs/prd.md`，包含完整的產品規格與設計指南
2. **任務管理**: 開發任務清單存放於 `docs/todo.md`，將 PRD 拆解為可執行的子功能
3. **程式碼組織**: 所有新開發的程式碼都放在 `src/` 資料夾中
4. **文件規範**: 每個文件頂部都須加上詳細的註解，說明用途、版本和更新紀錄

### Todo 完成機制
**重要**: 每完成一個 todo 項目的功能時，請執行以下步驟：

1. **標記完成**: 在 `docs/todo.md` 中找到對應的任務項目
2. **加上刪除線**: 在已完成的項目前加上 `~~刪除線~~` 標記
3. **更新統計**: 更新 todo.md 底部的「任務完成統計」數字
4. **提交變更**: 確保 todo.md 的變更被正確提交

#### 範例格式
```markdown
// 未完成
- [ ] 建立 Hero Section 組件架構

// 已完成
- ~~[x] 建立 Hero Section 組件架構~~
```

### 溝通語言
- **主要語言**: 繁體中文
- **程式碼註解**: 英文或繁體中文皆可
- **Git commit 訊息**: 英文