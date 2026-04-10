# Button 按钮

按钮用于触发一个即时操作。

---

## 组件概述

按钮是用户交互的核心组件，用于触发即时操作或导航。Starry UI 2.0 提供多种按钮类型和状态，支持品牌切换。

---

## 组件类型

### 1. 主要按钮 Primary

用于主要操作，页面中最突出的按钮。

```
┌──────────────────────┐
│    主要按钮          │
└──────────────────────┘
```

**样式：**
- 背景：`sys_color/brand/primary`
- 文字：`sys_color/text/inverse` (#FFFFFF)
- 边框：无
- 圆角：`sys_radius/button/M`（品牌差异化）

### 2. 次要按钮 Secondary

用于次要操作，与主要按钮搭配使用。

**样式：**
- 背景：`sys_color/fill/bg-secondary`
- 文字：`sys_color/brand/primary`
- 边框：`1px solid sys_color/border/heavy`
- 圆角：`sys_radius/button/M`

### 3. 线性按钮 Outline

用于辅助操作，视觉权重最低的按钮类型。

**样式：**
- 背景：transparent
- 文字：`sys_color/text/primary`
- 边框：`1px solid sys_color/border/heavy`
- 圆角：`sys_radius/button/M`

### 4. 文本按钮 Text

用于最轻量的操作，如取消、链接跳转。

**样式：**
- 背景：transparent
- 文字：`sys_color/brand/primary`
- 边框：无
- 内边距：较小

### 5. 下拉按钮 Dropdown

用于触发下拉菜单。

**结构：** 文字 + 图标 + 下拉箭头

### 6. 悬浮按钮 FAB (Floating Action Button)

用于页面上的主要悬浮操作。

**样式：**
- 圆形或圆角正方形
- 位置：固定在页面右下角
- 尺寸：大(44px)、中(36px)、小(32px)

---

## 组件尺寸

| 尺寸 | 高度 | 字号 | 圆角变量 |
|------|------|------|----------|
| 大 Large | 40px | 16px Medium | `radius/button/M` |
| 中 Medium | 36px | 14px Medium | `radius/button/M` |
| 小 Small | 28px | 12px Medium | `radius/button/S` |

---

## 组件状态

| 状态 | 背景 | 文字 | 说明 |
|------|------|------|------|
| 默认 Default | `brand/primary` | `text/inverse` | 正常态 |
| 按下 Pressed | `brand/primary-pressed` | `text/inverse` | 触摸/点击时 |
| 禁用 Disabled | `brand/primary-disabled` | `text/inverse` | 不可操作 |
| 加载 Loading | `brand/primary` | `text/inverse` + 加载动画 | 异步操作中 |

---

## 品牌差异

按钮圆角是品牌差异的核心体现：

| 品牌 | 大/中按钮圆角 | 小按钮圆角 | 视觉风格 |
|------|--------------|-----------|----------|
| 极氪 Z_Brand | 999px (胶囊) | 999px (胶囊) | 现代、动感 |
| 领克 L_Brand | 2px (方正) | 2px (方正) | 简约、科技 |
| 售后 A_Brand | 6px (圆角) | 4px (圆角) | 专业、稳重 |

---

## 使用规范

### ✅ Do
- 一个页面只设置一个主要按钮
- 按钮文案简洁明了，动词开头
- 主操作按钮位于右侧/上方

### ❌ Don't
- 不要同时使用多个主要按钮
- 按钮文案不要过长
- 不要使用纯黑色作为按钮背景

---

## 代码示例

### CSS Variables
```css
.btn-primary {
  background: var(--brand-6);
  color: var(--gray-0);
  border-radius: var(--radius-button-m);
}

.btn-primary:hover {
  background: var(--brand-7);
}

.btn-primary:disabled {
  background: var(--brand-3);
}
```

### React 示例
```jsx
<button className={`btn btn-${variant} btn-${size}`}>
  {loading ? <Spinner /> : children}
</button>
```

---

## 相关组件

- [Navigation Bar](./navigation-bar.md) - 导航栏
- [Action Bar](./action-bar.md) - 动作栏
- [Tabs](./tabs.md) - 选项卡