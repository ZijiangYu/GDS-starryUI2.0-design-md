export type ComponentStatus = "planned" | "draft" | "ready";

export interface ComponentModuleItem {
  name: string;
  status: ComponentStatus;
  description: string;
  tokenRefs: string[];
}

export const componentModules: ComponentModuleItem[] = [
  {
    name: "Button 按钮",
    status: "draft",
    description: "主按钮/次按钮/文本按钮，覆盖默认、按下、禁用状态。",
    tokenRefs: ["sys_color-brand-*", "sys_radius-button-*", "shadow-light-0", "sys_space-8/12/16"]
  },
  {
    name: "Input 输入框",
    status: "planned",
    description: "文本输入、前后缀、错误态与禁用态。",
    tokenRefs: ["sys_color-border-*", "sys_color-text-*", "sys_radius-l", "sys_space-12/16"]
  },
  {
    name: "Tag 标签",
    status: "planned",
    description: "状态标签、可关闭标签与品牌强调标签。",
    tokenRefs: ["sys_color-support-*", "sys_radius-s/m", "sys_space-4/8"]
  },
  {
    name: "Card 卡片",
    status: "planned",
    description: "信息卡片、操作卡片、分组卡片。",
    tokenRefs: ["sys_color-fill-bg-*", "sys_radius-xl", "shadow-light-0/heavy-0", "sys_space-16/24"]
  },
  {
    name: "Tabs 标签页",
    status: "planned",
    description: "导航标签与内容切换标签两种模式。",
    tokenRefs: ["sys_color-brand-primary", "sys_color-text-*", "sys_space-8/16"]
  }
];

