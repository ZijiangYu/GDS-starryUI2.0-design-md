# Starry UI 2.0 — DESIGN.md

> **GDS Starry 2.0** · Geely ToB Mobile Design System
> 支持多品牌切换的设计系统文档，供 AI 代理生成一致的 UI。

---

## 品牌切换说明

本文档定义了一套语义化设计变量系统，支持三个品牌的切换：

| 品牌 | 模式名称 | 切换方式 |
|------|----------|----------|
| 极氪 Zeekr | `Z_Brand` | 默认品牌 |
| 领克 LynkCo | `L_Brand` | 通过指令或配置指定 |
| 售后 After-Sales | `A_Brand` | 通过指令或配置指定 |

**指定品牌的方式：**
```
使用 DESIGN.md，品牌模式为 L_Brand（领克），生成...
```

---

## 1. Visual Theme & Atmosphere

**设计哲学（四原则）：**
- **清晰 Clarity** — 清晰的层级和信息结构，强调关键内容，降低认知负担
- **一致 Consistency** — 统一的布局模式、交互惯例和视觉元素
- **确定 Certainty** — 稳定的页面结构，准确的信息表达，及时的交互反馈
- **包容 Adaptability** — 灵活适配多种业务场景和用户群体

**字体哲学：** 仅使用系统字体，信息优先于品牌表达，字体不参与品牌切换。

**间距哲学：** 全局使用 4pt 网格系统，间距在所有品牌间保持一致。

**圆角哲学：** 圆角跟随品牌主题，可按部署配置。品牌差异化完全通过组件配置实现。

---

## 2. Color System

### 2.1 品牌色 (Brand Colors)

语义变量通过引用基础色板实现品牌切换：

| 语义变量 | 功能 | Z_Brand (极氪) | L_Brand (领克) | A_Brand (售后) |
|----------|------|----------------|----------------|----------------|
| `sys_color/brand/primary` | 常规 | 品牌色-6 | 品牌色-6 | 品牌色-6 |
| `sys_color/brand/primary-pressed` | 按下 | 品牌色-7 | 品牌色-7 | 品牌色-7 |
| `sys_color/brand/secondary` | 特殊场景 | 品牌色-5 | 品牌色-5 | 品牌色-5 |
| `sys_color/brand/primary-disabled` | 禁用 | 品牌色-3 | 品牌色-2 | 品牌色-3 |
| `sys_color/brand/primary-active` | 浅色 | 品牌色-1 | 品牌色-1 | 品牌色-1 |

### 2.2 文字&图标色 (Text & Icon Colors)

| 语义变量 | Z_Brand | L_Brand | A_Brand | 用途 |
|----------|---------|---------|---------|------|
| `text/primary` | Gray-10 | Gray-10 | Gray-10 | 一级文字 |
| `text/secondary` | Gray-8 | Gray-8 | Gray-8 | 二级文字 |
| `text/tertiary` | Gray-7 | Gray-7 | Gray-7 | 三级文字 |
| `text/quaternary` | Gray-6 | Gray-5 | Gray-6 | 四级文字 |
| `text/disabled` | Gray-5 | Gray-3 | Gray-5 | 禁用文字 |
| `text/inverse` | Gray-0 | Gray-0 | Gray-0 | 白色文字 |
| `text/inverse-disabled` | White 60% | White 60% | White 60% | 白色禁用 |

### 2.3 背景色 (Background Colors)

| 语义变量 | Z_Brand | L_Brand | A_Brand | 用途 |
|----------|---------|---------|---------|------|
| `bg/primary` | Gray-2 | Palettes-A/1 | Gray-2 | 背景一级 |
| `bg/secondary` | Gray-0 | Gray-0 | Gray-0 | 背景二级（白色） |
| `bg/tertiary` | Gray-1 | Gray-1 | Gray-1 | 背景三级 |
| `bg/quaternary` | Gray-4 | Gray-2 | Gray-3 | 背景四级 |
| `bg/disabled` | #232323 8% | #666666 8% | Gray-2 | 背景禁用 |
| `overlay/primary` | #000000 60% | #000000 60% | #000000 60% | 遮罩一级 |
| `overlay/secondary` | #000000 80% | #000000 75% | #000000 80% | 遮罩二级 |

### 2.4 描边色 (Border Colors)

| 语义变量 | Z_Brand | L_Brand | A_Brand | 用途 |
|----------|---------|---------|---------|------|
| `border/default` | Gray-3 | Palettes-A/3 | Gray-3 | 默认描边 |
| `border/heavy` | Gray-6 | Gray-2 | Gray-7 | 加重描边 |
| `border/disabled` | #232323 8% | Palettes-A/4 | Gray-5 | 禁用描边 |

### 2.5 功能色 (Status Colors)

| 功能 | Primary (图标/强调) | Secondary (背景) |
|------|---------------------|------------------|
| Danger 错误 | `status/danger1` | `status/danger2` |
| Warning 警示 | `status/warning1` | `status/warning2` |
| Success 成功 | `status/success1` | `status/success2` |
| Info 信息 | `status/info1` | `status/info2` |

### 2.6 辅助色 (Support Colors)

7组辅助色，每组包含 primary / secondary / tertiary 三个层级：

| 系列 | 用途示例 |
|------|----------|
| Support 1 | 红色系 - 警告标签 |
| Support 2 | 绿色系 - 成功标签 |
| Support 3 | 橙色系 - 提醒标签 |
| Support 4 | 蓝色系 - 信息标签 |
| Support 5 | 紫色系 - 特殊标签 |
| Support 6 | 青色系 - 辅助标签 |
| Support 7 | 琥珀色系 - 强调标签 |

---

## 3. Border Radius System

圆角是品牌差异的核心体现：

| 语义变量 | Z_Brand (极氪) | L_Brand (领克) | A_Brand (售后) | 用途 |
|----------|----------------|----------------|----------------|------|
| `radius/none` | 0px | 0px | 0px | 无圆角 |
| `radius/S` | 2px | 2px | 2px | 小标签、徽章 |
| `radius/M` | 4px | 4px | 4px | 大标签、分段控件 |
| `radius/L` | **8px** | **6px** | **6px** | 输入框、卡片 |
| `radius/XL` | 8px | 8px | 8px | 浮层、气泡 |
| `radius/XXL` | **12px** | **8px** | **12px** | 弹窗、面板 |
| `radius/XXXL` | **16px** | **12px** | **16px** | 特殊场景 |
| `radius/full` | 999px | 999px | 999px | 胶囊按钮、头像 |
| `radius/button/S` | **999px** | **2px** | **4px** | 小按钮 |
| `radius/button/M` | **999px** | **2px** | **6px** | 中/大按钮 |

**品牌圆角特征：**
- **极氪 Z_Brand**: 大圆角，胶囊按钮 (radius/full)
- **领克 L_Brand**: 小圆角，方正风格 (2-6px)
- **售后 A_Brand**: 中等圆角，平衡风格 (4-6px)

---

## 4. Typography Rules

### 4.1 字体家族

| 平台 | 中文 | 西文&数字 |
|------|------|-----------|
| iOS | 苹方-简 (PingFang SC) | DIN |
| Android | 思源黑体 (Noto Sans) | DIN |

### 4.2 字号层级

| Token | 中文 | 西文 | 行高 | 用途 |
|-------|------|------|------|------|
| `font/XS` | 10px | 11px | 14px | 注释、徽标 |
| `font/S` | 12px | 13px | 18px | 正文、标签 |
| `font/M` | 14px | 15px | 20px | 正文 |
| `font/L` | 16px | 17px | 24px | 标题、模块名 |
| `font/XL` | 18px | 19px | 26px | 大标题 |
| `font/XXL` | 20px | 21px | 28px | 特殊标题 |
| `font/XXXL` | 24px | 25px | 34px | 数据展示 |
| `font/XXXXL` | 28px | 29px | 40px | 数据展示 |
| `font/XXXXXL` | 44px | 45px | 62px | 极端强调 |

### 4.3 字重

| Token | 值 | 用途 |
|-------|-----|------|
| `weight/regular` | 400 | 正文 |
| `weight/medium` | 500 | 强调、标题 |
| `weight/semibold` | 600 | Android H5 替代 500 |

> **禁止使用 700 字重**，在部分 Android 设备上渲染过重。

---

## 5. Spacing System

### 5.1 间距层级（4pt 网格）

| Level | 值 | 用途 |
|-------|-----|------|
| 0 | 0px | 无间距 |
| 1 | 2px | 微间距（图标与文字） |
| 2 | 4px | 紧凑间距 |
| 3 | 8px | 标准组件内部间距 |
| 4 | 12px | 卡片内边距、列表垂直节奏 |
| 5 | 16px | 默认水平内边距 |
| 6 | 20px | 页面安全区边距 |
| 7 | 24px | 模块间距 |
| 8 | 32px | 大区块间距 |
| 9 | 44px | 触摸目标高度 |

### 5.2 页面边距

- 水平安全区：**20px**（两侧）
- 状态栏：44px (iOS) / 系统默认 (Android)
- 底部安全区：34px (iOS)

---

## 6. Component Specifications

### 6.1 Button 按钮

**按钮类型：**
| 类型 | 背景 | 文字 | 边框 | 用途 |
|------|------|------|------|------|
| Primary 主要 | `brand/primary` | `text/inverse` | 无 | 主要操作 |
| Secondary 次要 | `bg/secondary` | `brand/primary` | `border/heavy` | 次要操作 |
| Outline 线性 | transparent | `text/primary` | `border/heavy` | 辅助操作 |
| Text 文本 | transparent | `brand/primary` | 无 | 文本链接 |
| Dropdown 下拉 | `brand/primary` + 箭头 | `text/inverse` | 无 | 下拉菜单触发 |
| FAB 悬浮 | `brand/primary` | `text/inverse` | 无 | 悬浮操作 |

**按钮尺寸：**
| 尺寸 | 高度 | 字号 | 圆角 |
|------|------|------|------|
| Large 大 | 40px | 16px Medium | `radius/button/M` |
| Medium 中 | 36px | 14px Medium | `radius/button/M` |
| Small 小 | 28px | 12px Medium | `radius/button/S` |

**按钮状态：**
| 状态 | 背景 | 文字 |
|------|------|------|
| Default 默认 | `brand/primary` | `text/inverse` |
| Pressed 按下 | `brand/primary-pressed` | `text/inverse` |
| Disabled 禁用 | `brand/primary-disabled` | `text/inverse` |
| Loading 加载 | `brand/primary` | `text/inverse` + 加载动画 |

**Vue 组件：**
```vue
<gds-button type="primary" size="lg">确认</gds-button>
<gds-button type="secondary" size="md" :loading="isLoading">提交</gds-button>
<gds-button type="outline" size="sm" :disabled="true">取消</gds-button>
```

---

### 6.2 Navigation Bar 导航栏

**结构：**
- 高度：44px (iOS) / 56px (Android)
- 背景：`bg/secondary` (白色)
- 底部边框：`border/default`
- 标题：`font/L` Medium, `text/primary`, 居中，最大宽度60%

**导航层级：**
| 层级 | 左侧 | 中间 | 右侧 |
|------|------|------|------|
| 一级页面 | 无/图标 | 标题 | 图标(0-3个) |
| 二级页面 | 返回图标 | 标题 | 图标(0-2个) |
| 面板/弹窗 | 关闭/返回 | 标题 | 图标(0-2个) |
| 权限切换 | 标题 + 下拉箭头 | - | 图标(0-3个) |

**图标规范：**
- 尺寸：24×24px
- 点击区域：44×44px
- 颜色：`text/primary` 或 `brand/primary`
- 间距：16px

**Vue 组件：**
```vue
<gds-navbar title="标题" :show-back="true" @back="router.back()" />
```

---

### 6.3 Tabs 选项卡

**Tabs 类型：**
| 类型 | 样式 | 选中态 | 用途 |
|------|------|--------|------|
| Line 线型 | 文字 + 下划线 | `brand/primary` 下划线 + Medium | 一级导航 |
| Capsule 胶囊 | 文字 + 胶囊背景 | 背景 `bg-secondary` + `brand/primary` 文字 | 切换过滤 |
| Text 文字 | 纯文字 | `brand/primary` 文字 + Medium | 辅助切换 |

**Tabs 层级：**
- 一级 Tabs：`font/L` (16px)
- 二级 Tabs：`font/M` (14px)
- 三级 Tabs：`font/S` (12px)

**Tabs 尺寸：**
- 高度：44px
- 最小宽度：根据内容自适应
- 间距：8px
- 选项数量：建议 2-6 个

**Segmented Control 分段控件：**
| 尺寸 | 高度 | 字号 |
|------|------|------|
| 大 | 44px | 14px |
| 中 | 34px | 14px |
| 小 | 26px | 12px |

---

### 6.4 Input 输入框

**输入框类型：**
| 类型 | 用途 |
|------|------|
| 基础输入框 | 单行文本 |
| 密码输入框 | 密码输入，支持显示/隐藏 |
| 长文本输入框 | 多行文本 |
| 车牌输入框 | 车牌号专用 |

**输入框尺寸：**
- 高度：56px (含标签)
- 圆角：`radius/L`
- 背景：`bg/secondary`
- 边框：`border/default` (激活态：`brand/primary`)

**输入框状态：**
| 状态 | 边框 | 背景 | 说明 |
|------|------|------|------|
| 未激活 | `border/default` | `bg/secondary` | 默认状态 |
| 输入中 | `brand/primary` | `bg/secondary` | 获得焦点 |
| 完成态 | `border/default` | `bg/secondary` | 输入完成 |
| 错误态 | `status/danger1` | `status/danger2` | 校验失败 |
| 禁用态 | `border/disabled` | `bg/disabled` | 不可编辑 |
| 只读 | `border/default` | `bg/tertiary` | 仅展示 |

**Vue 组件：**
```vue
<gds-input v-model="value" label="标签" placeholder="请输入" :maxlength="20" />
<gds-input type="password" v-model="password" label="密码" />
```

---

### 6.5 Dialog 弹窗

**弹窗类型：**
| 类型 | 尺寸 | 用途 |
|------|------|------|
| 常规 | 294×210px | 确认提示 |
| 长文本 | 294×414px | 协议展示 |
| 文+图 | 294×457px | 图文说明 |
| 图+文 | 294×402px | 图文说明 |
| 图片 | 294×465px | 图片展示 |

**按钮布局：**
- 单按钮：全宽 Primary 按钮
- 双按钮：左侧 Secondary + 右侧 Primary
- 三按钮：垂直排列

**按钮状态：**
| 状态 | 样式 |
|------|------|
| 强调 | Primary 样式 |
| 默认 | Secondary 样式 |
| 危险 | `status/danger1` 背景 |
| 禁用 | Disabled 样式 |

---

### 6.6 Toast 轻提示

**Toast 类型：**
| 类型 | 图标 | 用途 |
|------|------|------|
| 提示 | 文字 | 纯文字提示 |
| 加载 | Spinner | 加载中 |
| 成功 | ✓ | 成功反馈 |
| 失败 | ✗ | 错误提示 |
| 警示 | ! | 警告提示 |

**Toast 样式：**
- 背景：`#000000` 70% 透明
- 文字：`text/inverse`
- 圆角：`radius/L`
- 内边距：16px

---

### 6.7 Loading 加载

**Loading 类型：**
| 类型 | 用途 |
|------|------|
| Spinner | 按钮内加载 |
| 横向加载 | 页面加载 |
| 竖向加载 | 列表加载 |
| 上滑加载 | 列表底部加载更多 |

**上滑加载状态：**
- 加载中：显示 Spinner + "加载中"
- 上拉切换：提示上拉加载
- 没有更多了：提示 "没有更多了"
- 加载失败：显示重试按钮

**Vue 组件：**
```vue
<gds-loading :show="isLoading" type="spinner" />
<!-- 或 JS 调用 -->
GdsLoading.show();
GdsLoading.hide();
```

---

### 6.8 Switch 开关

**开关尺寸：**
| 尺寸 | 宽度 | 高度 |
|------|------|------|
| 大 | 48px | 28px |
| 小 | 44px | 24px |

**开关状态：**
| 状态 | 背景 | 圆点 |
|------|------|------|
| 开启 | `brand/primary` | 白色 |
| 关闭 | `gray-4` | 白色 |
| 禁用 | `bg/disabled` | `gray-2` |
| 加载中 | `brand/primary` | 白色 + Spinner |

**Vue 组件：**
```vue
<gds-switch v-model="checked" :disabled="false" />
```

---

### 6.9 Radio 单选框

**单选框尺寸：**
| 尺寸 | 图标尺寸 | 字号 |
|------|----------|------|
| 大 | 24px | 16px |
| 小 | 20px | 14px |

**单选框状态：**
| 状态 | 外圈颜色 | 内圈 |
|------|----------|------|
| 默认 | `border/heavy` | 无 |
| 选中 | `brand/primary` | `brand/primary` 实心 |
| 禁用 | `border/disabled` | 无/半透明 |

**Vue 组件：**
```vue
<gds-radio-group v-model="selected">
  <gds-radio name="1">选项一</gds-radio>
  <gds-radio name="2">选项二</gds-radio>
</gds-radio-group>
```

---

### 6.10 Checkbox 复选框

**复选框尺寸：**
| 尺寸 | 图标尺寸 | 字号 |
|------|----------|------|
| 大 | 24px | 16px |
| 小 | 20px | 14px |

**复选框状态：**
| 状态 | 背景色 | 勾选颜色 |
|------|--------|----------|
| 默认 | 透明 + `border/heavy` | - |
| 选中 | `brand/primary` | 白色 |
| 半选 | `brand/primary` | 白色 (-) |
| 禁用 | `bg/disabled` | `text/disabled` |

**Vue 组件：**
```vue
<gds-checkbox-group v-model="checked">
  <gds-checkbox name="a">选项A</gds-checkbox>
  <gds-checkbox name="b">选项B</gds-checkbox>
</gds-checkbox-group>
```

---

### 6.11 SearchBar 搜索栏

**搜索栏类型：**
| 类型 | 用途 |
|------|------|
| 常规 | 标准搜索 |
| 分字段 | 多条件搜索 |
| 带返回 | 搜索页入口 |

**搜索栏尺寸：**
- 高度：56px
- 输入框圆角：`radius/full`
- 背景：`bg/secondary`

**搜索栏状态：**
| 状态 | 样式 |
|------|------|
| 激活 | 显示输入框 + 清除按钮 |
| 输入中 | 显示联想词 |
| 支持返回 | 左侧显示返回按钮 |

**Vue 组件：**
```vue
<gds-search v-model="keyword" placeholder="搜索" @search="onSearch" @cancel="onCancel" />
```

---

### 6.12 DropMenu 下拉菜单

**下拉菜单尺寸：**
- 高度：44px
- 选项高度：38px
- 背景：`bg/secondary`

**下拉菜单状态：**
| 状态 | 样式 |
|------|------|
| 默认 | 文字 + 下拉箭头 |
| 展开 | 文字 + 上拉箭头 + 下拉面板 |
| 选中 | 文字 `brand/primary` + 勾选标记 |
| 禁用 | 文字 `text/disabled` |

---

### 6.13 ActionBar 动作栏

**动作栏尺寸：**
- 高度：56px
- 背景：`bg/secondary`
- 位置：固定在页面底部

**动作栏按钮数量：**
| 数量 | 布局 |
|------|------|
| 2 | 两侧各一 (Primary + Secondary) |
| 3-4 | 垂直均分 |
| 5+ | 更多入口 + 展开 |

**多选确认：**
- 左侧：全选 + 已选数量
- 右侧：确认按钮

---

### 6.14 组件组合模式

**列表页：**
```
NavigationBar → SearchBar → DropMenu → PullRefresh → List → ActionBar
```

**表单页：**
```
NavigationBar → Form (Input/Radio/Checkbox/Switch/Uploader/Picker) → ActionBar
```

**详情页：**
```
NavigationBar → Content → Tabs → ActionBar
```

**分类页：**
```
NavigationBar → SearchBar → TreeSelect
```

---

## 7. Do's and Don'ts

### ✅ Do
- 使用语义变量，不直接使用色值
- 遵循 4pt 间距网格
- 触摸目标最小 44×44px
- 混排时保持中英文基线对齐
- 使用定义的字号层级

### ❌ Don't
- 不要在 H5 使用 700 字重
- 不要使用未定义的颜色值
- 不要使用非 4 倍数的间距（2px 除外）
- 不要将 `text/quaternary` 用于重要内容

---

## 8. Agent Prompt Guide

### 快速参考

```
品牌色：sys_color/brand/primary
文字色：sys_color/text/primary (#232323)
背景色：sys_color/fill/bg-secondary (#FFFFFF)
圆角：使用语义变量，自动适配品牌
字体：PingFang SC / DIN，字重 400/500
间距：4pt 网格，页面边距 20px
```

### 示例指令

**生成列表页：**
> 使用 DESIGN.md，品牌模式为 Z_Brand，生成列表页面。背景 `bg/primary`，列表项为白色卡片，圆角 `radius/L`，无阴影。标题 `font/M` Medium，副标题 `font/S` Regular。水平内边距 16px，垂直 12px，间距 8px。

**生成表单页：**
> 使用 DESIGN.md，品牌模式为 L_Brand，生成表单页面。输入框白色背景，边框 `border/default`，圆角 `radius/L`，高度 44px。标签 `font/S` Regular，主按钮 Primary 样式，圆角 `radius/button/M`。

**生成导航栏：**
> 使用 DESIGN.md，品牌模式为 A_Brand，生成二级页面导航栏。高度 44px，白色背景，底部边框 `border/default`。左侧返回图标，中间标题 `font/L` Medium 居中，右侧两个操作图标。

---

## 9. CSS Variables Reference

```css
:root {
  /* 品牌色 */
  --color-brand-primary: var(--brand-6);
  --color-brand-pressed: var(--brand-7);
  --color-brand-secondary: var(--brand-5);
  --color-brand-disabled: var(--brand-3);
  --color-brand-active: var(--brand-1);

  /* 文字色 */
  --color-text-primary: var(--gray-10);
  --color-text-secondary: var(--gray-8);
  --color-text-tertiary: var(--gray-7);
  --color-text-quaternary: var(--gray-6);
  --color-text-disabled: var(--gray-5);
  --color-text-inverse: var(--gray-0);

  /* 背景色 */
  --color-bg-primary: var(--gray-2);
  --color-bg-secondary: var(--gray-0);
  --color-bg-tertiary: var(--gray-1);
  --color-bg-disabled: rgba(35, 35, 35, 0.08);

  /* 边框色 */
  --color-border-default: var(--gray-3);
  --color-border-heavy: var(--gray-6);

  /* 圆角 */
  --radius-s: 2px;
  --radius-m: 4px;
  --radius-l: 8px;
  --radius-xl: 8px;
  --radius-xxl: 12px;
  --radius-xxxl: 16px;
  --radius-full: 999px;

  /* 间距 */
  --spacing-1: 2px;
  --spacing-2: 4px;
  --spacing-3: 8px;
  --spacing-4: 12px;
  --spacing-5: 16px;
  --spacing-6: 20px;
  --spacing-7: 24px;
  --spacing-8: 32px;

  /* 字号 */
  --font-xs: 10px;
  --font-s: 12px;
  --font-m: 14px;
  --font-l: 16px;
  --font-xl: 18px;
  --font-xxl: 20px;
  --font-xxxl: 24px;
}
```

---

## 10. 变更日志

| 日期 | 版本 | 更新内容 |
|------|------|----------|
| 2026-04-10 | 2.1 | 新增完整组件规范：Input、Dialog、Toast、Loading、Switch、Radio、Checkbox、SearchBar、DropMenu、ActionBar |
| 2026-04-09 | 2.0 | 初始版本，支持三品牌切换 |