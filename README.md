# Starry UI 2.0 DESIGN.md (变量层)

当前阶段仅完成变量层：

- 四品牌切换：`zeekr / aftersales / geely / lynkco`
- 在线预览页：`/design-md/[brand]`
- 当前品牌 `DESIGN.md` 预览
- 一键复制当前品牌 `DESIGN.md`
- API 输出：`/api/design-md/[brand]`
- 批量生成 markdown：`npm run generate:design-md`

## 启动

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 变量来源

- Figma 文件：`GDS-Starry-2.0`
- 节点：`4601:4048`
- 链接：<https://www.figma.com/design/F05obr0jxc9r2iv6P7Q9pt/GDS-Starry-2.0?node-id=4601-4048&t=flPEy4ooeuus3G71-1>
- 说明文件：`data/tokens/figma-sync-notes.md`

## 说明

- 已确认并同步：通用变量、极氪品牌色、四品牌圆角差异。
- `aftersales / geely / lynkco` 品牌色目前是占位蓝系值，待你提供对应精确变量节点后可无损覆盖。
- 组件层尚未接入，等待你下一轮提供组件规范。
