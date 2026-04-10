# GDS Starry UI 2.0 — DESIGN.md Generator

> 🎨 多品牌设计系统文档生成器，支持 AI 代理直接使用

---

## 项目简介

本项目是 GDS Starry UI 2.0 设计系统的 DESIGN.md 生成器，支持：

- **四品牌切换**：极氪 (zeekr) / 售后 (aftersales) / 吉利 (geely) / 领克 (lynkco)
- **在线预览**：实时查看各品牌设计变量和组件样式
- **一键复制**：快速复制 DESIGN.md 内容
- **API 输出**：`/api/design-md/[brand]`
- **批量生成**：`npm run generate:design-md`

---

## 📦 在线预览

**GitHub Pages**: https://zijiangyu.github.io/GDS-starryUI2.0-design-md/design-md/zeekr/

预览页面支持：
- 四品牌实时切换
- 色彩系统展示
- 圆角系统展示（品牌差异）
- 字体层级展示
- 间距系统展示
- 组件交互预览
- DESIGN.md 内容预览与复制

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

访问 http://localhost:3000/design-md/zeekr 查看预览页面。

### 构建

```bash
npm run build
```

构建产物位于 `out/` 目录，可直接部署到静态托管服务。

### 生成 DESIGN.md 文件

```bash
npm run generate:design-md
```

生成的文件位于 `dist/design-md/` 目录。

---

## 品牌差异

| 品牌 | 品牌色 | 按钮圆角 | 风格特征 |
|------|--------|----------|----------|
| 极氪 Zeekr | #F56200 橙色 | 999px 胶囊 | 现代、动感 |
| 领克 LynkCo | #4D88FB 蓝色 | 2px 方正 | 简约、科技 |
| 售后 After-Sales | #2E5EFF 蓝色 | 4-6px 圆角 | 专业、稳重 |
| 吉利 Geely | 待定 | 待定 | 待定 |

---

## 变量来源

- **Figma 文件**：[GDS Starry 2.0](https://www.figma.com/design/F05obr0jxc9r2iv6P7Q9pt)
- **系统变量节点**：`4601:4048`

---

## License

MIT
