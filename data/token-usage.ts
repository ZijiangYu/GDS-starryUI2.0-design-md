import { getBrandTokens } from "./tokens/brands";
import type { BrandKey, BrandTokens, ColorUsageItem, RadiusUsageItem, TypographyUsageItem } from "./tokens/types";

function group(brand: BrandTokens, name: string): Record<string, string> {
  return brand.palettes.find((p) => p.name === name)?.colors ?? {};
}

function pick(obj: Record<string, string>, key: string): string {
  return obj[key] ?? "#000000";
}

export function getColorUsage(brandKey: BrandKey): ColorUsageItem[] {
  const brand = getBrandTokens(brandKey);
  const a = group(brand, "Palette A");
  const b = group(brand, "Palette B");
  const c = group(brand, "Palette C");
  const d = group(brand, "Palette D");
  const e = group(brand, "Palette E");
  const f = group(brand, "Palette F");
  const g = group(brand, "Palette G");

  const status =
    brandKey === "lynkco"
      ? {
          danger1: pick(d, "6"),
          danger2: pick(d, "1"),
          success1: pick(c, "6"),
          success2: pick(c, "1"),
          warning1: pick(b, "6"),
          warning2: pick(b, "1"),
          info1: brand.colors.brandPrimary,
          info2: brand.colors.brandActive
        }
      : {
          danger1: pick(c, "6"),
          danger2: pick(c, "1"),
          success1: pick(b, "6"),
          success2: pick(b, "1"),
          warning1: pick(d, "6"),
          warning2: pick(d, "1"),
          info1: pick(a, "6"),
          info2: pick(a, "1")
        };

  const support7 =
    brandKey === "zeekr"
      ? { p: "#b16c04", s: "#f9dba9", t: "#fff2dd" }
      : brandKey === "lynkco"
        ? { p: pick(g, "6"), s: pick(g, "3"), t: pick(g, "1") }
        : { p: "#b16c04", s: "#f9dba9", t: "#fff2dd" };

  const support4 =
    brandKey === "lynkco"
      ? { p: brand.colors.brandPrimary, s: pick(group(brand, "Brand"), "3"), t: brand.colors.brandActive }
      : { p: pick(a, "6"), s: pick(a, "3"), t: pick(a, "1") };

  return [
    { token: "sys_color-brand-primary", value: brand.colors.brandPrimary, scenario: "品牌主操作色：主按钮、关键状态、强调交互" },
    { token: "sys_color-brand-secondary", value: brand.colors.brandSecondary, scenario: "品牌辅助色：次强调、信息强调块" },
    { token: "sys_color-brand-primary-pressed", value: brand.colors.brandPressed, scenario: "品牌按下态：按钮 press / active" },
    { token: "sys_color-brand-primary-disabled", value: brand.colors.brandDisabled, scenario: "品牌禁用态：按钮禁用、弱化强调" },
    { token: "sys_color-brand-primary-active", value: brand.colors.brandActive, scenario: "品牌浅底：选中底色、轻提示背景" },

    { token: "sys_color-text-primary", value: brand.colors.textPrimary, scenario: "一级正文：主标题、正文核心信息" },
    { token: "sys_color-text-secondary", value: brand.colors.textSecondary, scenario: "二级正文：说明、表单辅助文本" },
    { token: "sys_color-text-tertiary", value: brand.colors.textTertiary, scenario: "三级正文：占位符、备注信息" },
    { token: "sys_color-text-quaternary", value: brand.colors.textQuaternary, scenario: "四级正文：最弱提示、分隔说明" },
    { token: "sys_color-text-disabled", value: brand.colors.textDisabled, scenario: "禁用文字：禁用态标签与文本" },
    { token: "sys_color-text-inverse", value: brand.colors.textInverse, scenario: "反色文字：深色底上的文字" },
    { token: "sys_color-text-inverse-disabled", value: "#ffffff99", scenario: "反色禁用文字：深底禁用态" },

    { token: "sys_color-fill-bg-primary", value: brand.colors.bgPrimary, scenario: "一级背景：页面默认背景" },
    { token: "sys_color-fill-bg-secondary", value: brand.colors.bgSecondary, scenario: "二级背景：卡片主容器" },
    { token: "sys_color-fill-bg-tertiary", value: brand.colors.bgTertiary, scenario: "三级背景：局部模块区" },
    { token: "sys_color-fill-bg-quaternary", value: brand.colors.bgQuaternary, scenario: "四级背景：禁用块/弱分组" },
    { token: "sys_color-fill-bg-disabled", value: brand.colors.bgDisabled, scenario: "背景禁用：不可操作区域" },
    { token: "sys_color-fill-overlay-primary-1", value: brand.colors.overlayPrimary, scenario: "一级遮罩：轻遮罩" },
    { token: "sys_color-fill-overlay-primary-2", value: brand.colors.overlaySecondary, scenario: "二级遮罩：强遮罩/模态层" },

    { token: "sys_color-border-default", value: brand.colors.borderDefault, scenario: "默认描边：卡片、输入框边框" },
    { token: "sys_color-border-heavy", value: brand.colors.borderHeavy, scenario: "重描边：重点分组、分割强化" },
    { token: "sys_color-border-disabled", value: brand.colors.borderDisabled, scenario: "禁用描边：禁用输入框边框" },

    { token: "sys_color-status-danger-1", value: status.danger1, scenario: "错误主色：错误图标、错误强调" },
    { token: "sys_color-status-danger-2", value: status.danger2, scenario: "错误浅色：错误提示背景" },
    { token: "sys_color-status-success-1", value: status.success1, scenario: "成功主色：成功状态标识" },
    { token: "sys_color-status-success-2", value: status.success2, scenario: "成功浅色：成功提示背景" },
    { token: "sys_color-status-warning-1", value: status.warning1, scenario: "警告主色：警告状态标识" },
    { token: "sys_color-status-warning-2", value: status.warning2, scenario: "警告浅色：警告提示背景" },
    { token: "sys_color-status-info-1", value: status.info1, scenario: "信息主色：信息提示与链接" },
    { token: "sys_color-status-info2", value: status.info2, scenario: "信息浅色：信息提示背景" },

    { token: "sys_color-support-1-primary", value: pick(c, "6"), scenario: "辅助色组1主色：图表/标签" },
    { token: "sys_color-support-1-secondary", value: pick(c, "3"), scenario: "辅助色组1次色：图表次级" },
    { token: "sys_color-support-1-tertiary", value: pick(c, "1"), scenario: "辅助色组1浅色：图表背景" },
    { token: "sys_color-support-2-primary", value: pick(b, "6"), scenario: "辅助色组2主色：图表/标签" },
    { token: "sys_color-support-2-secondary", value: pick(b, "3"), scenario: "辅助色组2次色：图表次级" },
    { token: "sys_color-support-2-tertiary", value: pick(b, "1"), scenario: "辅助色组2浅色：图表背景" },
    { token: "sys_color-support-3-primary", value: pick(d, "6"), scenario: "辅助色组3主色：图表/标签" },
    { token: "sys_color-support-3-secondary", value: pick(d, "3"), scenario: "辅助色组3次色：图表次级" },
    { token: "sys_color-support-3-tertiary", value: pick(d, "1"), scenario: "辅助色组3浅色：图表背景" },
    { token: "sys_color-support-4-primary", value: support4.p, scenario: "辅助色组4主色：图表/标签" },
    { token: "sys_color-support-4-secondary", value: support4.s, scenario: "辅助色组4次色：图表次级" },
    { token: "sys_color-support-4-tertiary", value: support4.t, scenario: "辅助色组4浅色：图表背景" },
    { token: "sys_color-support-5-primary", value: pick(e, "6"), scenario: "辅助色组5主色：图表/标签" },
    { token: "sys_color-support-5-secondary", value: pick(e, "3"), scenario: "辅助色组5次色：图表次级" },
    { token: "sys_color-support-5-tertiary", value: pick(e, "1"), scenario: "辅助色组5浅色：图表背景" },
    { token: "sys_color-support-6-primary", value: pick(f, "6"), scenario: "辅助色组6主色：图表/标签" },
    { token: "sys_color-support-6-secondary", value: pick(f, "3"), scenario: "辅助色组6次色：图表次级" },
    { token: "sys_color-support-6-tertiary", value: pick(f, "1"), scenario: "辅助色组6浅色：图表背景" },
    { token: "sys_color-support-7-primary", value: support7.p, scenario: "辅助色组7主色：图表/标签" },
    { token: "sys_color-support-7-secondary", value: support7.s, scenario: "辅助色组7次色：图表次级" },
    { token: "sys_color-support-7-tertiary", value: support7.t, scenario: "辅助色组7浅色：图表背景" }
  ];
}

export function getRadiusUsage(brandKey: BrandKey): RadiusUsageItem[] {
  const r = getBrandTokens(brandKey).radius;
  return [
    { token: "sys_radius-none", value: r.none, scenario: "通栏组件、基础卡片" },
    { token: "sys_radius-s", value: r.s, scenario: "小标签、微型状态块" },
    { token: "sys_radius-m", value: r.m, scenario: "大标签、分段控件" },
    { token: "sys_radius-l", value: r.l, scenario: "输入框、搜索框" },
    { token: "sys_radius-xl", value: r.xl, scenario: "悬浮菜单、卡片、气泡、Toast" },
    { token: "sys_radius-xxl", value: r.xxl, scenario: "半弹窗、侧边面板" },
    { token: "sys_radius-xxxl", value: r.xxxl, scenario: "特殊大圆角容器" },
    { token: "sys_radius-button-s", value: r.buttonS, scenario: "中小按钮" },
    { token: "sys_radius-button-m", value: r.buttonM, scenario: "大按钮" },
    { token: "sys_radius-full", value: r.full, scenario: "开关、徽标、头像、胶囊" }
  ];
}

export function getTypographyUsage(brandKey: BrandKey): TypographyUsageItem[] {
  const brand = getBrandTokens(brandKey);
  const cn = brand.typography.cnFamily;
  const en = brand.typography.enFamily;

  return [
    { token: "text-c1-10-cn-regular", size: 10, lineHeight: 14, weight: 400, family: cn, scenario: "最小中文注释/角标", sample: "辅助注释 10" },
    { token: "text-c1-10-cn-medium", size: 10, lineHeight: 14, weight: 500, family: cn, scenario: "最小中文强调注释", sample: "辅助注释 Medium" },
    { token: "text-c1-11-en-regular", size: 11, lineHeight: 14, weight: 400, family: en, scenario: "最小英文注释/单位", sample: "Caption 11" },
    { token: "text-c1-11-en-medium", size: 11, lineHeight: 14, weight: 500, family: en, scenario: "最小英文强调", sample: "Caption Medium" },

    { token: "text-b2-12-cn-regular", size: 12, lineHeight: 18, weight: 400, family: cn, scenario: "次级正文中文", sample: "次级正文 Regular" },
    { token: "text-b2-12-cn-medium", size: 12, lineHeight: 18, weight: 500, family: cn, scenario: "次级正文中文强调", sample: "次级正文 Medium" },
    { token: "text-b2-13-en-regular", size: 13, lineHeight: 18, weight: 400, family: en, scenario: "次级正文英文", sample: "Body Secondary" },
    { token: "text-b2-13-en-medium", size: 13, lineHeight: 18, weight: 500, family: en, scenario: "次级正文英文强调", sample: "Body Secondary M" },

    { token: "text-b1-14-cn-regular", size: 14, lineHeight: 20, weight: 400, family: cn, scenario: "基础正文中文", sample: "基础正文 Regular" },
    { token: "text-b1-14-cn-medium", size: 14, lineHeight: 20, weight: 500, family: cn, scenario: "基础正文中文强调", sample: "基础正文 Medium" },
    { token: "text-b1-15-en-regular", size: 15, lineHeight: 20, weight: 400, family: en, scenario: "基础正文英文", sample: "Primary Body" },
    { token: "text-b1-15-en-medium", size: 15, lineHeight: 20, weight: 500, family: en, scenario: "基础正文英文强调", sample: "Primary Body M" },

    { token: "text-t2-16-cn-regular", size: 16, lineHeight: 24, weight: 400, family: cn, scenario: "T2 小标题中文", sample: "标题 T2" },
    { token: "text-t2-16-cn-medium", size: 16, lineHeight: 24, weight: 500, family: cn, scenario: "T2 小标题中文强调", sample: "标题 T2 Medium" },
    { token: "text-t2-17-en-regular", size: 17, lineHeight: 24, weight: 400, family: en, scenario: "T2 小标题英文", sample: "Title T2" },
    { token: "text-t2-17-en-medium", size: 17, lineHeight: 24, weight: 500, family: en, scenario: "T2 小标题英文强调", sample: "Title T2 M" },

    { token: "text-t1-18-cn-regular", size: 18, lineHeight: 26, weight: 400, family: cn, scenario: "T1 标题中文", sample: "标题 T1" },
    { token: "text-t1-18-cn-medium", size: 18, lineHeight: 26, weight: 500, family: cn, scenario: "T1 标题中文强调", sample: "标题 T1 Medium" },
    { token: "text-t1-19-en-regular", size: 19, lineHeight: 26, weight: 400, family: en, scenario: "T1 标题英文", sample: "Title T1" },
    { token: "text-t1-19-en-medium", size: 19, lineHeight: 26, weight: 500, family: en, scenario: "T1 标题英文强调", sample: "Title T1 M" },

    { token: "text-h1-20-cn-regular", size: 20, lineHeight: 28, weight: 400, family: cn, scenario: "H1 大标题中文", sample: "大标题 H1" },
    { token: "text-h1-20-cn-medium", size: 20, lineHeight: 28, weight: 500, family: cn, scenario: "H1 大标题中文强调", sample: "大标题 H1 Medium" },
    { token: "text-h1-21-en-regular", size: 21, lineHeight: 28, weight: 400, family: en, scenario: "H1 大标题英文", sample: "Headline H1" },
    { token: "text-h1-21-en-medium", size: 21, lineHeight: 28, weight: 500, family: en, scenario: "H1 大标题英文强调", sample: "Headline H1 M" },

    { token: "text-d3-24-cn-regular", size: 24, lineHeight: 34, weight: 400, family: cn, scenario: "D3 展示字：关键指标", sample: "展示 D3" },
    { token: "text-d3-24-cn-medium", size: 24, lineHeight: 34, weight: 500, family: cn, scenario: "D3 展示字强调", sample: "展示 D3 Medium" },
    { token: "text-d3-25-en-regular", size: 25, lineHeight: 34, weight: 400, family: en, scenario: "D3 英文展示字", sample: "Display D3" },
    { token: "text-d3-25-en-medium", size: 25, lineHeight: 34, weight: 500, family: en, scenario: "D3 英文展示字强调", sample: "Display D3 M" },

    { token: "text-d2-28-cn-regular", size: 28, lineHeight: 40, weight: 400, family: cn, scenario: "D2 大展示字：关键数字", sample: "展示 D2" },
    { token: "text-d2-28-cn-medium", size: 28, lineHeight: 40, weight: 500, family: cn, scenario: "D2 大展示字强调", sample: "展示 D2 Medium" },
    { token: "text-d2-29-en-regular", size: 29, lineHeight: 40, weight: 400, family: en, scenario: "D2 英文大展示字", sample: "Display D2" },
    { token: "text-d2-29-en-medium", size: 29, lineHeight: 40, weight: 500, family: en, scenario: "D2 英文大展示字强调", sample: "Display D2 M" },

    { token: "text-d1-44-cn-medium", size: 44, lineHeight: 62, weight: 500, family: cn, scenario: "D1 顶级展示字：首屏关键数值", sample: "展示 D1" },
    { token: "text-d1-45-en-medium", size: 45, lineHeight: 62, weight: 500, family: en, scenario: "D1 顶级英文展示字", sample: "Display D1" }
  ];
}
