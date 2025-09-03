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
- 1、請將規畫書寫成 prd.md 放在 docs 目錄下。                                                                
2、請將規畫書拆解成不同的子功能 todo, 然後放在 docs 目錄下的 todo.md 文件。        3、更新CLAUDE.md 文件，請寫上每完成一個 todo的功能，要將 todo.md 裡面對應的功能劃掉。   
4、一律用繁體中文回應。  
5、每個文件的頂部要加上詳細的註解。
6、在根目錄下新建資料夾src，新建的程式之後都放在這個資料夾。