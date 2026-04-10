import { brands, getBrandTokens } from "./tokens/brands";
import { spacingGridPresets, spacingPrinciples, spacingSplitPresets, spacingUsage } from "./spacing-usage";
import { getColorUsage, getRadiusUsage, getTypographyUsage } from "./token-usage";
import type { BrandKey } from "./tokens/types";

function tokenLines(tokens: Record<string, string | number>): string {
  return Object.entries(tokens)
    .map(([k, v]) => `- ${k}: ${v}`)
    .join("\n");
}

function paletteLines(name: string, tokens: Record<string, string>): string {
  const sorted = Object.entries(tokens).sort((a, b) => Number(b[0]) - Number(a[0]));
  return [`### ${name}`, ...sorted.map(([k, v]) => `- ${k}: ${v}`)].join("\n");
}

function usageLines(items: Array<{ token: string; value?: string | number; scenario: string }>): string {
  return items
    .map((item) => `- ${item.token}${item.value !== undefined ? `: ${item.value}` : ""} ｜ ${item.scenario}`)
    .join("\n");
}

export function renderDesignMd(brand: BrandKey): string {
  const t = getBrandTokens(brand);
  const colorUsage = getColorUsage(brand);
  const radiusUsage = getRadiusUsage(brand);
  const typographyUsage = getTypographyUsage(brand);
  return [
    `# Starry UI 2.0 DESIGN.md - ${t.label}`,
    "",
    "## 设计目标",
    "- 在 Starry UI 2.0 中保持一致的中文车机/移动端视觉语言。",
    "- 使用品牌化 Token 控制主题差异，组件行为保持一致。",
    "- 输出面向 AI 编码工具（Codex / Cursor / Claude Code / Trae）可直接消费。",
    "",
    "## 品牌信息",
    `- 品牌: ${t.label}`,
    `- 品牌家族: ${t.family}`,
    `- 数据来源: ${t.sourceFile}`,
    `- Figma 节点: ${t.sourceNodeId}`,
    `- 最近同步: ${t.lastSyncedAt}`,
    "",
    "## 色彩 Tokens",
    tokenLines(t.colors as unknown as Record<string, string>),
    "",
    "## 圆角 Tokens",
    tokenLines(t.radius as unknown as Record<string, number>),
    "",
    "## 阴影 Tokens",
    tokenLines(t.shadows as unknown as Record<string, string>),
    "",
    "## 间距 Tokens",
    usageLines(
      spacingUsage.map((item) => ({
        token: item.token,
        value: `${item.value}px`,
        scenario: item.scenario
      }))
    ),
    "",
    "## 字体家族",
    tokenLines(t.typography as unknown as Record<string, string>),
    "",
    "## 完整颜色定义",
    ...t.palettes.map((item) => paletteLines(item.name, item.colors)),
    "",
    "## 颜色使用场景",
    usageLines(colorUsage),
    "",
    "## 字体使用场景",
    usageLines(
      typographyUsage.map((item) => ({
        token: item.token,
        value: `${item.size}/${item.lineHeight}px ${item.weight}`,
        scenario: item.scenario
      }))
    ),
    "",
    "## 圆角使用场景",
    usageLines(radiusUsage),
    "",
    "## 间距原则",
    ...spacingPrinciples.map((item) => `- ${item}`),
    "",
    "## 栅格建议",
    ...spacingGridPresets.map(
      (item) =>
        `- ${item.columns} 栏: margin ${item.margin}px / gutter ${item.gutter}px ｜ ${item.scenario}`
    ),
    "",
    "## 横纵拆分建议",
    ...spacingSplitPresets.map(
      (item) =>
        `- ${item.name}: horizontal ${item.horizontal}px / vertical ${item.vertical}px ｜ ${item.scenario}`
    ),
    "",
    "## AI 生成约束",
    "- 只在视觉层面体现品牌差异：颜色、圆角、阴影、字体家族。",
    "- 不改变交互模式，不改变组件结构语义。",
    "- 优先使用 token，不允许写死魔法值。",
    "- 新增视觉值必须先补充到 token。",
    "- 当 Figma 组件已内置 20px 间距时，页面外层不再追加边距，改用容器内 padding 保持一致留白。",
    "",
    "## 代码生成指令（给大模型）",
    "- 优先读取 DESIGN.md 当前品牌 tokens。",
    "- 生成样式时优先使用 CSS Variables 或 Design Token 引用。",
    "- 仅在缺失 token 时提出补充建议，不直接硬编码。",
    "- 输出代码需保证桌面端与移动端均可用。"
  ].join("\n");
}

export function getAllDesignMd(): Array<{ brand: BrandKey; label: string; content: string }> {
  return brands.map((b) => ({ brand: b.key, label: b.label, content: renderDesignMd(b.key) }));
}

export function getBrandFromParam(value: string): BrandKey {
  const keys = brands.map((b) => b.key);
  if ((keys as string[]).includes(value)) {
    return value as BrandKey;
  }
  return "zeekr";
}
