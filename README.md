# GDS Starry UI 2.0 — DESIGN.md Generator

> 🎨 多品牌设计系统文档生成器，支持 AI 代理直接使用

---

## 项目简介

本项目是 GDS Starry UI 2.0 设计系统的 DESIGN.md 生成器，支持：

- **三品牌切换**：极氪 (zeekr) / 售后 (after-sales) / 领克 (lynkco)
- **在线预览**：实时查看各品牌设计变量和组件样式
- **一键复制**：快速复制 DESIGN.md 内容
- **组件规范**：完整的组件设计规范文档

---

## 📦 在线预览

**GitHub Pages**: https://zijiangyu.github.io/GDS-starryUI2.0-design-md/

预览页面支持：
- 三品牌实时切换
- 色彩系统展示
- 圆角系统展示
- 字体层级展示
- 间距系统展示
- **组件交互预览**（Button、Navigation Bar、Tabs、Input、Switch、Checkbox、Radio、Toast、Dialog、SearchBar、ActionBar）

---

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:3000 查看预览页面。

### 构建项目

```bash
npm run build
```

### 生成 DESIGN.md 文件

```bash
npm run generate:design-md
```

生成的文件位于 `dist/design-md/` 目录。

---

## 项目结构

```
├── DESIGN.md              # 主设计文档（包含完整组件规范）
├── brands/                # 品牌变量文档
│   ├── zeekr.md           # 极氪品牌变量
│   ├── lynkco.md          # 领克品牌变量
│   └── after-sales.md     # 售后品牌变量
├── components/            # 组件规范文档
│   ├── button.md          # Button 组件规范
│   ├── navigation-bar.md  # Navigation Bar 组件规范
│   └── tabs.md            # Tabs 组件规范
├── docs/                  # GitHub Pages 预览页面
│   ├── index.html
│   ├── styles.css
│   └── scripts.js
├── app/                   # Next.js 页面
├── components/            # React 组件
├── data/                  # 数据文件
├── dist/                  # 生成的 DESIGN.md
└── scripts/               # 脚本
```

---

## 品牌差异

| 品牌 | 品牌色 | 按钮圆角 | 风格特征 |
|------|--------|----------|----------|
| 极氪 Zeekr | #F56200 橙色 | 999px 胶囊 | 现代、动感 |
| 领克 LynkCo | #4D88FB 蓝色 | 2px 方正 | 简约、科技 |
| 售后 After-Sales | #2E5EFF 蓝色 | 4-6px 圆角 | 专业、稳重 |

---

## 变量来源

- **Figma 文件**：[GDS Starry 2.0](https://www.figma.com/design/F05obr0jxc9r2iv6P7Q9pt)
- **系统变量节点**：`4601:4048`

---

## 使用方式

### 方式一：复制 DESIGN.md 到项目

1. 复制 `DESIGN.md` 到你的项目根目录
2. 在 AI 提示中引用：`使用 DESIGN.md 生成...`

### 方式二：指定品牌

```
使用 DESIGN.md，品牌模式为 Z_Brand（极氪），生成一个列表页面...
```

---

## License

MIT
