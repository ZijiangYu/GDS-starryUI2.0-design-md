# Starry UI 2.0 DESIGN.md - 售后

## 设计目标
- 在 Starry UI 2.0 中保持一致的中文车机/移动端视觉语言。
- 使用品牌化 Token 控制主题差异，组件行为保持一致。
- 输出面向 AI 编码工具（Codex / Cursor / Claude Code / Trae）可直接消费。

## 品牌信息
- 品牌: 售后
- 品牌家族: 售后
- 数据来源: https://www.figma.com/design/F05obr0jxc9r2iv6P7Q9pt/GDS-Starry-2.0?node-id=4601-4048&t=flPEy4ooeuus3G71-1
- Figma 节点: 4601:4048
- 最近同步: 2026-04-09

## 色彩 Tokens
- textPrimary: #232323
- textSecondary: #64696b
- textTertiary: #8e9496
- textQuaternary: #b9bec0
- textDisabled: #d9dbdb
- textInverse: #ffffff
- borderDefault: #f0f0f0
- borderHeavy: #b9bec0
- borderDisabled: #23232314
- bgPrimary: #f8f8f8
- bgSecondary: #ffffff
- bgTertiary: #fafafb
- bgQuaternary: #e6e6e6
- bgDisabled: #23232314
- overlayPrimary: #00000099
- overlaySecondary: #000000cc
- brandPrimary: #2e5eff
- brandSecondary: #587eff
- brandPressed: #254bcd
- brandDisabled: #abbfff
- brandActive: #eaefff

## 圆角 Tokens
- none: 0
- s: 2
- m: 4
- full: 999
- l: 6
- xl: 8
- xxl: 12
- xxxl: 16
- buttonS: 4
- buttonM: 6

## 阴影 Tokens
- light: 0 4px 16px rgba(0, 0, 0, 0.06)
- heavy: 0 4px 16px rgba(0, 0, 0, 0.12)

## 字体家族
- cnFamily: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif
- enFamily: "DIN", "DIN Alternate", "Helvetica Neue", Arial, sans-serif

## 完整颜色定义
### Brand
- 10: #091437
- 9: #122669
- 8: #1c399b
- 7: #254bcd
- 6: #2e5eff
- 5: #587eff
- 4: #819eff
- 3: #abbfff
- 2: #d5dfff
- 1: #eaefff
### Gray
- 11: #000000
- 10: #1b223b
- 9: #363f5f
- 8: #565e79
- 7: #99a0b5
- 6: #b4bbcd
- 5: #c6cbda
- 4: #d6d9e1
- 3: #e1e4ed
- 2: #f4f5fa
- 1: #f6f9ff
- 0: #ffffff
### Palette A
- 10: #004047
- 9: #00555f
- 8: #00808e
- 7: #00aabe
- 6: #00d5ed
- 5: #33ddf1
- 4: #66e6f4
- 3: #99eef8
- 2: #ccf7fb
- 1: #e5fbfd
### Palette B
- 10: #103617
- 9: #16481f
- 8: #206c2f
- 7: #2b903e
- 6: #36b44e
- 5: #5ec371
- 4: #86d295
- 3: #afe1b8
- 2: #d7f0dc
- 1: #ebf7ed
### Palette C
- 10: #440b0c
- 9: #5b0e10
- 8: #881618
- 7: #c00000
- 6: #f00000
- 5: #f33333
- 4: #f66666
- 3: #f99999
- 2: #fccccc
- 1: #fde5e5
### Palette D
- 10: #4d1800
- 9: #772e07
- 8: #a14a14
- 7: #cc6b26
- 6: #ff892e
- 5: #ffa058
- 4: #ffb881
- 3: #ffd0ab
- 2: #ffe7d5
- 1: #fff3ea
### Palette E
- 10: #292457
- 9: #342e6a
- 8: #494192
- 7: #5f55b9
- 6: #7569e0
- 5: #9187e6
- 4: #aca5ec
- 3: #c8c3f3
- 2: #e3e1f9
- 1: #f1f0fc
### Palette F
- 10: #50410e
- 9: #695512
- 8: #9b7d1c
- 7: #edb600
- 6: #ffce2e
- 5: #ffd858
- 4: #ffe181
- 3: #ffebab
- 2: #fff5d5
- 1: #fffaea

## 颜色使用场景
- sys_color-brand-primary: #2e5eff ｜ 品牌主操作色：主按钮、关键状态、强调交互
- sys_color-brand-secondary: #587eff ｜ 品牌辅助色：次强调、信息强调块
- sys_color-brand-primary-pressed: #254bcd ｜ 品牌按下态：按钮 press / active
- sys_color-brand-primary-disabled: #abbfff ｜ 品牌禁用态：按钮禁用、弱化强调
- sys_color-brand-primary-active: #eaefff ｜ 品牌浅底：选中底色、轻提示背景
- sys_color-text-primary: #232323 ｜ 一级正文：主标题、正文核心信息
- sys_color-text-secondary: #64696b ｜ 二级正文：说明、表单辅助文本
- sys_color-text-tertiary: #8e9496 ｜ 三级正文：占位符、备注信息
- sys_color-text-quaternary: #b9bec0 ｜ 四级正文：最弱提示、分隔说明
- sys_color-text-disabled: #d9dbdb ｜ 禁用文字：禁用态标签与文本
- sys_color-text-inverse: #ffffff ｜ 反色文字：深色底上的文字
- sys_color-text-inverse-disabled: #ffffff99 ｜ 反色禁用文字：深底禁用态
- sys_color-fill-bg-primary: #f8f8f8 ｜ 一级背景：页面默认背景
- sys_color-fill-bg-secondary: #ffffff ｜ 二级背景：卡片主容器
- sys_color-fill-bg-tertiary: #fafafb ｜ 三级背景：局部模块区
- sys_color-fill-bg-quaternary: #e6e6e6 ｜ 四级背景：禁用块/弱分组
- sys_color-fill-bg-disabled: #23232314 ｜ 背景禁用：不可操作区域
- sys_color-fill-container-primary: #fafafb ｜ 容器一级：面板/浮层底色
- sys_color-fill-container-secondary: #e6e6e6 ｜ 容器二级：嵌套容器
- sys_color-fill-container-tertiary: #ffffff ｜ 容器三级：反白容器
- sys_color-fill-container-disabled: #23232314 ｜ 容器禁用：禁用容器底色
- sys_color-fill-overlay-primary-1: #00000099 ｜ 一级遮罩：轻遮罩
- sys_color-fill-overlay-primary-2: #000000cc ｜ 二级遮罩：强遮罩/模态层
- sys_color-border-default: #f0f0f0 ｜ 默认描边：卡片、输入框边框
- sys_color-border-heavy: #b9bec0 ｜ 重描边：重点分组、分割强化
- sys_color-border-disabled: #23232314 ｜ 禁用描边：禁用输入框边框
- sys_color-status-danger-1: #f00000 ｜ 错误主色：错误图标、错误强调
- sys_color-status-danger-2: #fde5e5 ｜ 错误浅色：错误提示背景
- sys_color-status-success-1: #36b44e ｜ 成功主色：成功状态标识
- sys_color-status-success-2: #ebf7ed ｜ 成功浅色：成功提示背景
- sys_color-status-warning-1: #ff892e ｜ 警告主色：警告状态标识
- sys_color-status-warning-2: #fff3ea ｜ 警告浅色：警告提示背景
- sys_color-status-info-1: #00d5ed ｜ 信息主色：信息提示与链接
- sys_color-status-info2: #e5fbfd ｜ 信息浅色：信息提示背景
- sys_color-support-1-primary: #f00000 ｜ 辅助色组1主色：图表/标签
- sys_color-support-1-secondary: #f99999 ｜ 辅助色组1次色：图表次级
- sys_color-support-1-tertiary: #fde5e5 ｜ 辅助色组1浅色：图表背景
- sys_color-support-2-primary: #36b44e ｜ 辅助色组2主色：图表/标签
- sys_color-support-2-secondary: #afe1b8 ｜ 辅助色组2次色：图表次级
- sys_color-support-2-tertiary: #ebf7ed ｜ 辅助色组2浅色：图表背景
- sys_color-support-3-primary: #ff892e ｜ 辅助色组3主色：图表/标签
- sys_color-support-3-secondary: #ffd0ab ｜ 辅助色组3次色：图表次级
- sys_color-support-3-tertiary: #fff3ea ｜ 辅助色组3浅色：图表背景
- sys_color-support-4-primary: #00d5ed ｜ 辅助色组4主色：图表/标签
- sys_color-support-4-secondary: #99eef8 ｜ 辅助色组4次色：图表次级
- sys_color-support-4-tertiary: #e5fbfd ｜ 辅助色组4浅色：图表背景
- sys_color-support-5-primary: #7569e0 ｜ 辅助色组5主色：图表/标签
- sys_color-support-5-secondary: #c8c3f3 ｜ 辅助色组5次色：图表次级
- sys_color-support-5-tertiary: #f1f0fc ｜ 辅助色组5浅色：图表背景
- sys_color-support-6-primary: #ffce2e ｜ 辅助色组6主色：图表/标签
- sys_color-support-6-secondary: #ffebab ｜ 辅助色组6次色：图表次级
- sys_color-support-6-tertiary: #fffaea ｜ 辅助色组6浅色：图表背景
- sys_color-support-7-primary: #b16c04 ｜ 辅助色组7主色：图表/标签
- sys_color-support-7-secondary: #f9dba9 ｜ 辅助色组7次色：图表次级
- sys_color-support-7-tertiary: #fff2dd ｜ 辅助色组7浅色：图表背景

## 字体使用场景
- text-c1-10-cn-regular: 10/14px 400 ｜ 最小中文注释/角标
- text-c1-10-cn-medium: 10/14px 500 ｜ 最小中文强调注释
- text-c1-11-en-regular: 11/14px 400 ｜ 最小英文注释/单位
- text-c1-11-en-medium: 11/14px 500 ｜ 最小英文强调
- text-b2-12-cn-regular: 12/18px 400 ｜ 次级正文中文
- text-b2-12-cn-medium: 12/18px 500 ｜ 次级正文中文强调
- text-b2-13-en-regular: 13/18px 400 ｜ 次级正文英文
- text-b2-13-en-medium: 13/18px 500 ｜ 次级正文英文强调
- text-b1-14-cn-regular: 14/20px 400 ｜ 基础正文中文
- text-b1-14-cn-medium: 14/20px 500 ｜ 基础正文中文强调
- text-b1-15-en-regular: 15/20px 400 ｜ 基础正文英文
- text-b1-15-en-medium: 15/20px 500 ｜ 基础正文英文强调
- text-t2-16-cn-regular: 16/24px 400 ｜ T2 小标题中文
- text-t2-16-cn-medium: 16/24px 500 ｜ T2 小标题中文强调
- text-t2-17-en-regular: 17/24px 400 ｜ T2 小标题英文
- text-t2-17-en-medium: 17/24px 500 ｜ T2 小标题英文强调
- text-t1-18-cn-regular: 18/26px 400 ｜ T1 标题中文
- text-t1-18-cn-medium: 18/26px 500 ｜ T1 标题中文强调
- text-t1-19-en-regular: 19/26px 400 ｜ T1 标题英文
- text-t1-19-en-medium: 19/26px 500 ｜ T1 标题英文强调
- text-h1-20-cn-regular: 20/28px 400 ｜ H1 大标题中文
- text-h1-20-cn-medium: 20/28px 500 ｜ H1 大标题中文强调
- text-h1-21-en-regular: 21/28px 400 ｜ H1 大标题英文
- text-h1-21-en-medium: 21/28px 500 ｜ H1 大标题英文强调
- text-d3-24-cn-regular: 24/34px 400 ｜ D3 展示字：关键指标
- text-d3-24-cn-medium: 24/34px 500 ｜ D3 展示字强调
- text-d3-25-en-regular: 25/34px 400 ｜ D3 英文展示字
- text-d3-25-en-medium: 25/34px 500 ｜ D3 英文展示字强调
- text-d2-28-cn-regular: 28/40px 400 ｜ D2 大展示字：关键数字
- text-d2-28-cn-medium: 28/40px 500 ｜ D2 大展示字强调
- text-d2-29-en-regular: 29/40px 400 ｜ D2 英文大展示字
- text-d2-29-en-medium: 29/40px 500 ｜ D2 英文大展示字强调
- text-d1-44-cn-medium: 44/62px 500 ｜ D1 顶级展示字：首屏关键数值
- text-d1-45-en-medium: 45/62px 500 ｜ D1 顶级英文展示字

## 圆角使用场景
- sys_radius-none: 0 ｜ 通栏组件、基础卡片
- sys_radius-s: 2 ｜ 小标签、微型状态块
- sys_radius-m: 4 ｜ 大标签、分段控件
- sys_radius-l: 6 ｜ 输入框、搜索框
- sys_radius-xl: 8 ｜ 悬浮菜单、卡片、气泡、Toast
- sys_radius-xxl: 12 ｜ 半弹窗、侧边面板
- sys_radius-xxxl: 16 ｜ 特殊大圆角容器
- sys_radius-button-s: 4 ｜ 中小按钮
- sys_radius-button-m: 6 ｜ 大按钮
- sys_radius-full: 999 ｜ 开关、徽标、头像、胶囊

## AI 生成约束
- 只在视觉层面体现品牌差异：颜色、圆角、阴影、字体家族。
- 不改变交互模式，不改变组件结构语义。
- 优先使用 token，不允许写死魔法值。
- 新增视觉值必须先补充到 token。

## 代码生成指令（给大模型）
- 优先读取 DESIGN.md 当前品牌 tokens。
- 生成样式时优先使用 CSS Variables 或 Design Token 引用。
- 仅在缺失 token 时提出补充建议，不直接硬编码。
- 输出代码需保证桌面端与移动端均可用。