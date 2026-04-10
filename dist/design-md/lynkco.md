# Starry UI 2.0 DESIGN.md - LYNK & CO

## 设计目标
- 在 Starry UI 2.0 中保持一致的中文车机/移动端视觉语言。
- 使用品牌化 Token 控制主题差异，组件行为保持一致。
- 输出面向 AI 编码工具（Codex / Cursor / Claude Code / Trae）可直接消费。

## 品牌信息
- 品牌: LYNK & CO
- 品牌家族: LYNK & CO
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
- brandPrimary: #4d88fb
- brandSecondary: #7aa6fd
- brandPressed: #2971ff
- brandDisabled: #dbe6ff
- brandActive: #edf3ff

## 圆角 Tokens
- none: 0
- s: 2
- m: 4
- full: 999
- l: 6
- xl: 6
- xxl: 8
- xxxl: 12
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
- 10: #142951
- 9: #153c9a
- 8: #2355f5
- 7: #2971ff
- 6: #4d88fb
- 5: #7aa6fd
- 4: #acc2f8
- 3: #d3e1fe
- 2: #dbe6ff
- 1: #edf3ff
### Gray
- 11: #000000
- 10: #282828
- 9: #585858
- 8: #666666
- 7: #797979
- 6: #7d7d7d
- 5: #999999
- 4: #b3b3b3
- 3: #cccccc
- 2: #e8e8e8
- 1: #f6f6f6
- 0: #ffffff
### Palette A
- 10: #474f60
- 9: #586583
- 8: #717a8d
- 7: #8b8f97
- 6: #a9b1c1
- 5: #c1cada
- 4: #d3dbe9
- 3: #e3e9f3
- 2: #edf0f6
- 1: #f4f7fa
### Palette B
- 10: #4d1600
- 9: #782d0a
- 8: #a44b1b
- 7: #cf7034
- 6: #fb9954
- 5: #fcb071
- 4: #fdc48f
- 3: #fdd6ac
- 2: #fee7ca
- 1: #fff5ee
### Palette C
- 10: #004d2a
- 9: #066738
- 8: #0e8146
- 7: #1a9c54
- 6: #28b663
- 5: #46c577
- 4: #69d38e
- 3: #8fe2a9
- 2: #baf0c9
- 1: #e9f8ef
### Palette D
- 10: #4d000a
- 9: #740813
- 8: #9c161f
- 7: #c32a2f
- 6: #eb4343
- 5: #ef6762
- 4: #f38a82
- 3: #f7aba3
- 2: #fbccc5
- 1: #fdf1f1
### Palette E
- 10: #08004d
- 9: #150f72
- 8: #2b2798
- 7: #4949bd
- 6: #7579e3
- 5: #8a91e9
- 4: #a0a8ee
- 3: #b7bff4
- 2: #cfd6f9
- 1: #e8edff
### Palette F
- 10: #20004d
- 9: #380f6b
- 8: #57278a
- 7: #7947a8
- 6: #a070c7
- 5: #b285d2
- 4: #c49bdd
- 3: #d6b3e9
- 2: #e7cdf4
- 1: #f8e8ff
### Palette G
- 10: #002e4d
- 9: #0a486c
- 8: #1a668c
- 7: #3187ac
- 6: #4dabcc
- 5: #68bcd6
- 4: #85cee0
- 3: #a4dfeb
- 2: #c5eef5
- 1: #e8fdff
### Palette H
- 10: #004d40
- 9: #096754
- 8: #178269
- 7: #2a9c7e
- 6: #41b794
- 5: #5cc5a2
- 4: #7ad4b3
- 3: #9ce2c6
- 2: #c0f1dc
- 1: #e8fff4
### Palette J
- 10: #4d3200
- 9: #775203
- 8: #a17508
- 7: #cb9c0f
- 6: #f5c418
- 5: #f7d640
- 4: #f9e369
- 3: #fbef93
- 2: #fdf8bd
- 1: #fffee8
### Palette K
- 10: #00034d
- 9: #0e1465
- 8: #242d7d
- 7: #404b95
- 6: #636fad
- 5: #7987bd
- 4: #92a0ce
- 3: #acbade
- 2: #c9d4ef
- 1: #e8f0ff
### Palette L
- 10: #4d000a
- 9: #740c16
- 8: #9b2028
- 7: #c23b40
- 6: #e95f5f
- 5: #ed7d79
- 4: #f29993
- 3: #f6b6af
- 2: #fbd1cb
- 1: #ffece8

## 颜色使用场景
- sys_color-brand-primary: #4d88fb ｜ 品牌主操作色：主按钮、关键状态、强调交互
- sys_color-brand-secondary: #7aa6fd ｜ 品牌辅助色：次强调、信息强调块
- sys_color-brand-primary-pressed: #2971ff ｜ 品牌按下态：按钮 press / active
- sys_color-brand-primary-disabled: #dbe6ff ｜ 品牌禁用态：按钮禁用、弱化强调
- sys_color-brand-primary-active: #edf3ff ｜ 品牌浅底：选中底色、轻提示背景
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
- sys_color-status-danger-1: #eb4343 ｜ 错误主色：错误图标、错误强调
- sys_color-status-danger-2: #fdf1f1 ｜ 错误浅色：错误提示背景
- sys_color-status-success-1: #28b663 ｜ 成功主色：成功状态标识
- sys_color-status-success-2: #e9f8ef ｜ 成功浅色：成功提示背景
- sys_color-status-warning-1: #fb9954 ｜ 警告主色：警告状态标识
- sys_color-status-warning-2: #fff5ee ｜ 警告浅色：警告提示背景
- sys_color-status-info-1: #4d88fb ｜ 信息主色：信息提示与链接
- sys_color-status-info2: #edf3ff ｜ 信息浅色：信息提示背景
- sys_color-support-1-primary: #28b663 ｜ 辅助色组1主色：图表/标签
- sys_color-support-1-secondary: #8fe2a9 ｜ 辅助色组1次色：图表次级
- sys_color-support-1-tertiary: #e9f8ef ｜ 辅助色组1浅色：图表背景
- sys_color-support-2-primary: #fb9954 ｜ 辅助色组2主色：图表/标签
- sys_color-support-2-secondary: #fdd6ac ｜ 辅助色组2次色：图表次级
- sys_color-support-2-tertiary: #fff5ee ｜ 辅助色组2浅色：图表背景
- sys_color-support-3-primary: #eb4343 ｜ 辅助色组3主色：图表/标签
- sys_color-support-3-secondary: #f7aba3 ｜ 辅助色组3次色：图表次级
- sys_color-support-3-tertiary: #fdf1f1 ｜ 辅助色组3浅色：图表背景
- sys_color-support-4-primary: #4d88fb ｜ 辅助色组4主色：图表/标签
- sys_color-support-4-secondary: #d3e1fe ｜ 辅助色组4次色：图表次级
- sys_color-support-4-tertiary: #edf3ff ｜ 辅助色组4浅色：图表背景
- sys_color-support-5-primary: #7579e3 ｜ 辅助色组5主色：图表/标签
- sys_color-support-5-secondary: #b7bff4 ｜ 辅助色组5次色：图表次级
- sys_color-support-5-tertiary: #e8edff ｜ 辅助色组5浅色：图表背景
- sys_color-support-6-primary: #a070c7 ｜ 辅助色组6主色：图表/标签
- sys_color-support-6-secondary: #d6b3e9 ｜ 辅助色组6次色：图表次级
- sys_color-support-6-tertiary: #f8e8ff ｜ 辅助色组6浅色：图表背景
- sys_color-support-7-primary: #4dabcc ｜ 辅助色组7主色：图表/标签
- sys_color-support-7-secondary: #a4dfeb ｜ 辅助色组7次色：图表次级
- sys_color-support-7-tertiary: #e8fdff ｜ 辅助色组7浅色：图表背景

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
- sys_radius-xl: 6 ｜ 悬浮菜单、卡片、气泡、Toast
- sys_radius-xxl: 8 ｜ 半弹窗、侧边面板
- sys_radius-xxxl: 12 ｜ 特殊大圆角容器
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