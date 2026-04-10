# Tabs 选项卡

选项卡用于在同一层级下切换不同内容视图。

---

## 组件概述

选项卡是内容导航组件，用于在同一页面内切换不同内容模块。Starry UI 2.0 提供三种类型的选项卡：线型、胶囊型、文字型。

---

## 组件类型

### 1. 线型 Tabs (Line)

通过底部下划线指示当前选中项。

```
┌─────────────────────────────────────┐
│   选项一    选项二    选项三        │
│   ──────                            │
└─────────────────────────────────────┘
```

**样式：**
- 选中态：文字 `brand/primary` + Medium + 底部下划线
- 默认态：文字 `text/secondary` + Regular
- 下划线：`2px solid brand/primary`，宽度根据文字自适应

### 2. 胶囊型 Tabs (Capsule)

通过胶囊背景区分选中项。

```
┌─────────────────────────────────────┐
│  ┌──────┐                           │
│  │选项一│   选项二    选项三        │
│  └──────┘                           │
└─────────────────────────────────────┘
```

**样式：**
- 选中态：背景 `bg-secondary` + 文字 `brand/primary` + Medium
- 默认态：透明背景 + 文字 `text/secondary` + Regular
- 外层容器：背景 `bg-tertiary`，圆角 `radius/L`

### 3. 文字型 Tabs (Text)

纯文字切换，无额外装饰。

```
┌─────────────────────────────────────┐
│   选项一    选项二    选项三        │
└─────────────────────────────────────┘
```

**样式：**
- 选中态：文字 `brand/primary` + Medium
- 默认态：文字 `text/secondary` + Regular

---

## 组件尺寸

| 属性 | 值 |
|------|-----|
| 高度 | 44px |
| 最小宽度 | 根据内容自适应 |
| 水平内边距 | 16px |
| 间距 | 8px |

---

## 标签标签 (Tag)

选项卡可配合标签使用，显示数量或状态：

```
┌─────────────────────────────────────┐
│   全部(5)    未处理(2)    已完成    │
│   ──────                            │
└─────────────────────────────────────┘
```

**Tag 样式：**
- 高度：20px
- 圆角：`radius/S` (2px)
- 背景：`brand/primary`
- 文字：10px，`text/inverse`

---

## 选项数量规范

| 选项数量 | 推荐类型 | 布局方式 |
|----------|----------|----------|
| 2-3个 | 线型/胶囊型 | 平分宽度 |
| 4-5个 | 线型/文字型 | 左对齐，滚动 |
| 6个+ | 文字型 | 滚动 + 更多入口 |

---

## 品牌差异

选项卡组件在品牌间主要差异体现在颜色：

| 元素 | Z_Brand | L_Brand | A_Brand |
|------|---------|---------|---------|
| 选中文字 | #F56200 | #4D88FB | #2E5EFF |
| 下划线 | #F56200 | #4D88FB | #2E5EFF |
| 胶囊背景 | #FFFFFF | #FFFFFF | #FFFFFF |

圆角差异主要体现在胶囊型 Tabs 的外层容器：
- 极氪：8px
- 领克：6px
- 售后：6px

---

## 使用规范

### ✅ Do
- 选项数量控制在 2-6 个
- 选项文案简洁，建议 2-4 个字
- 选中第一个选项作为默认状态

### ❌ Don't
- 不要使用过长的选项文案
- 不要超过 6 个选项
- 不要混用多种类型的 Tabs

---

## 代码示例

### CSS Variables
```css
.tabs-line .tab.active {
  color: var(--brand-6);
  font-weight: 500;
}

.tabs-line .tab.active::after {
  background: var(--brand-6);
}

.tabs-capsule {
  border-radius: var(--radius-l);
  background: var(--gray-1);
}

.tabs-capsule .tab.active {
  background: var(--gray-0);
  color: var(--brand-6);
}
```

### React 示例
```jsx
<div className={`tabs tabs-${type}`}>
  {tabs.map((tab, index) => (
    <div
      key={tab.key}
      className={`tab ${activeIndex === index ? 'active' : ''}`}
      onClick={() => setActiveIndex(index)}
    >
      {tab.label}
      {tab.count && <span className="tag">{tab.count}</span>}
    </div>
  ))}
</div>
```

---

## 相关组件

- [Button](./button.md) - 按钮
- [Navigation Bar](./navigation-bar.md) - 导航栏
- [Segmented Control](./segmented-control.md) - 分段控件