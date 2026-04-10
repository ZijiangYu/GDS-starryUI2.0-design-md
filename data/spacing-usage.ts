export interface SpacingUsageItem {
  token: string;
  value: number;
  scenario: string;
}

export interface SpacingGridPreset {
  columns: number;
  margin: number;
  gutter: number;
  scenario: string;
}

export interface SpacingSplitPreset {
  name: string;
  horizontal: number;
  vertical: number;
  scenario: string;
}

export const spacingPrinciples: string[] = [
  "Spacing 统一，不随品牌变化，确保跨品牌组件结构一致。",
  "遵循 4pt 栅格体系，优先复用既有档位，减少新值扩散。",
  "通过横向与纵向间距拆分，适配不同信息密度和内容节奏。",
  "当 Figma 组件已默认内置 20px 间距时，页面外层不再额外加边距，改为容器内 padding 实现同等视觉留白。"
];

export const spacingUsage: SpacingUsageItem[] = [
  { token: "sys_space-0", value: 0, scenario: "贴边布局、无间距组合" },
  { token: "sys_space-2", value: 2, scenario: "微调对齐、细粒度补偿" },
  { token: "sys_space-4", value: 4, scenario: "图标与文字最小呼吸间距" },
  { token: "sys_space-8", value: 8, scenario: "同组元素默认间距（高频）" },
  { token: "sys_space-12", value: 12, scenario: "紧凑信息块纵向间距" },
  { token: "sys_space-16", value: 16, scenario: "标准卡片内边距/模块间距" },
  { token: "sys_space-20", value: 20, scenario: "页面左右安全边距" },
  { token: "sys_space-24", value: 24, scenario: "区块级间距、标题与内容分隔" },
  { token: "sys_space-28", value: 28, scenario: "大号信息区纵向留白" },
  { token: "sys_space-32", value: 32, scenario: "大模块分隔、页面节奏切换" },
  { token: "sys_space-36", value: 36, scenario: "强分组区块间距" },
  { token: "sys_space-40", value: 40, scenario: "大型容器内部留白" },
  { token: "sys_space-44", value: 44, scenario: "强调区块与正文分离" },
  { token: "sys_space-48", value: 48, scenario: "首屏级分区间距" }
];

export const spacingGridPresets: SpacingGridPreset[] = [
  { columns: 2, margin: 20, gutter: 12, scenario: "双列信息卡片布局" },
  { columns: 3, margin: 20, gutter: 8, scenario: "三列入口/快捷能力区" },
  { columns: 4, margin: 20, gutter: 8, scenario: "四列图标菜单布局" },
  { columns: 5, margin: 20, gutter: 8, scenario: "五列紧凑入口布局" }
];

export const spacingSplitPresets: SpacingSplitPreset[] = [
  { name: "标准间距", horizontal: 8, vertical: 8, scenario: "普通列表与基础组件组合" },
  { name: "较大间距", horizontal: 16, vertical: 12, scenario: "内容分组更明显的中密度页面" },
  { name: "超大间距", horizontal: 24, vertical: 16, scenario: "低密度信息展示与重点分区" }
];
