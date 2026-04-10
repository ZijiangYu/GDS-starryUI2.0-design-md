"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import type { BrandTokens } from "@/data/tokens/types";

type BtnState = "default" | "loading" | "disabled";
type BtnSize = "l" | "m" | "s";
type BtnVariant = "primary" | "secondary" | "linear";

const tabs = ["全部", "推荐", "最近"];

const btnStates: Array<{ key: BtnState; label: string }> = [
  { key: "default", label: "默认" },
  { key: "loading", label: "加载" },
  { key: "disabled", label: "禁用" }
];

const btnSizes: Array<{ key: BtnSize; label: string }> = [
  { key: "l", label: "L" },
  { key: "m", label: "M" },
  { key: "s", label: "S" }
];

const btnVariants: Array<{ key: BtnVariant; label: string }> = [
  { key: "primary", label: "主要按钮" },
  { key: "secondary", label: "次要按钮" },
  { key: "linear", label: "线性按钮" }
];

export function ComponentInteractionBoard({ brand }: { brand: BrandTokens }) {
  const [btnState, setBtnState] = useState<BtnState>("default");
  const [navTopActions, setNavTopActions] = useState<0 | 1 | 2 | 3>(2);
  const [navSecondMode, setNavSecondMode] = useState<"basic" | "more" | "plus-more" | "segment">("plus-more");
  const [navPanelMode, setNavPanelMode] = useState<"close" | "star-close" | "cancel-title-action">("star-close");
  const [segActive, setSegActive] = useState<number>(0);
  const [tabActive, setTabActive] = useState("全部");
  const [tabLevel, setTabLevel] = useState<"l1" | "l2" | "l3">("l2");
  const [tabUnderline, setTabUnderline] = useState(false);
  const [segSize, setSegSize] = useState<"lg" | "md" | "sm">("lg");

  const styleVars = useMemo(
    () =>
      ({
        ["--btn-primary" as string]: brand.colors.brandPrimary,
        ["--btn-disabled-bg" as string]: brand.colors.brandDisabled,
        ["--btn-text-primary" as string]: brand.colors.textPrimary,
        ["--btn-text-disabled" as string]: brand.colors.textDisabled,
        ["--btn-border-heavy" as string]: brand.colors.borderHeavy,
        ["--btn-border-disabled" as string]: brand.colors.borderDisabled,
        ["--btn-bg-primary" as string]: brand.colors.bgPrimary,
        ["--btn-radius-s" as string]: `${brand.radius.buttonS}px`,
        ["--btn-radius" as string]: `${brand.radius.buttonM}px`
      }) satisfies CSSProperties,
    [brand]
  );

  return (
    <div className="component-interaction-wrap" style={styleVars}>
      <section className="component-demo">
        <div className="component-demo-head">
          <h3 className="component-demo-title">按钮 Button</h3>
        </div>
        <p className="component-demo-tip">覆盖大/中/小尺寸，主要/次要/线性三类型，默认/加载/禁用状态。</p>
        <div className="demo-controls">
          {btnStates.map((state) => (
            <button key={state.key} type="button" className={`chip-toggle${btnState === state.key ? " active" : ""}`} onClick={() => setBtnState(state.key)}>
              {state.label}
            </button>
          ))}
        </div>
        <div className="button-matrix">
          {btnSizes.map((size) => (
            <div key={size.key} className="button-row">
              <div className="button-row-label">尺寸 {size.label}</div>
              <div className="button-stage">
                {btnVariants.map((variant) => (
                  <button
                    key={`${size.key}-${variant.key}`}
                    type="button"
                    className={`demo-btn ${variant.key} ${size.key} ${btnState}`}
                    disabled={btnState === "disabled"}
                  >
                    {btnState === "loading" ? <span className="btn-spinner" aria-hidden="true" /> : variant.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="component-demo">
        <div className="component-demo-head">
          <h3 className="component-demo-title">导航 Navigation</h3>
        </div>
        <p className="component-demo-tip">严格对齐：一级页面、二级页面、面板导航。</p>

        <div className="demo-controls">
          {[0, 1, 2, 3].map((n) => (
            <button key={n} type="button" className={`chip-toggle${navTopActions === n ? " active" : ""}`} onClick={() => setNavTopActions(n as 0 | 1 | 2 | 3)}>
              一级右侧 {n}
            </button>
          ))}
        </div>
        <div className="demo-controls">
          {[
            { key: "basic", label: "二级-基础" },
            { key: "more", label: "二级-more" },
            { key: "plus-more", label: "二级-plus+more" },
            { key: "segment", label: "二级-分段" }
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              className={`chip-toggle${navSecondMode === item.key ? " active" : ""}`}
              onClick={() => setNavSecondMode(item.key as "basic" | "more" | "plus-more" | "segment")}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="demo-controls">
          {[
            { key: "close", label: "面板-关闭" },
            { key: "star-close", label: "面板-收藏+关闭" },
            { key: "cancel-title-action", label: "面板-取消标题操作" }
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              className={`chip-toggle${navPanelMode === item.key ? " active" : ""}`}
              onClick={() => setNavPanelMode(item.key as "close" | "star-close" | "cancel-title-action")}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-showcase">
          <div className="nav-bar level-1">
            <div className="nav-title level1">页面标题</div>
            <div className="nav-actions">
              {navTopActions >= 3 && <span className="nav-ic scan" aria-hidden="true" />}
              {navTopActions >= 2 && <span className="nav-ic search" aria-hidden="true" />}
              {navTopActions >= 1 && <span className="nav-ic bell" aria-hidden="true" />}
            </div>
          </div>

          <div className="nav-bar level-2">
            <div className="nav-left">‹</div>
            <div className="nav-center">
              <div className="nav-title level2">页面标题</div>
            </div>
            <div className="nav-actions">
              {navSecondMode === "basic" && null}
              {navSecondMode === "more" && <span className="nav-ic more" aria-hidden="true" />}
              {navSecondMode === "plus-more" && (
                <>
                  <span className="nav-ic plus" aria-hidden="true" />
                  <span className="nav-ic more" aria-hidden="true" />
                </>
              )}
              {navSecondMode === "segment" && <span className="nav-ic more" aria-hidden="true" />}
            </div>
          </div>

          {navSecondMode === "segment" && (
            <div className="nav-segment-wrap">
              <button type="button" className={`nav-seg${segActive === 0 ? " active" : ""}`} onClick={() => setSegActive(0)}>
                分段
              </button>
              <button type="button" className={`nav-seg${segActive === 1 ? " active" : ""}`} onClick={() => setSegActive(1)}>
                分段
              </button>
            </div>
          )}

          <div className="nav-bar panel">
            {navPanelMode === "cancel-title-action" ? (
              <>
                <div className="nav-side-text muted">取消</div>
                <div className="nav-title level2">页面标题</div>
                <div className="nav-side-text brand">操作</div>
              </>
            ) : (
              <>
                <div className="nav-title level2">面板标题</div>
                <div className="nav-actions">
                  {navPanelMode === "star-close" && <span className="nav-ic star" aria-hidden="true" />}
                  <span className="nav-ic close" aria-hidden="true" />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="component-demo">
        <div className="component-demo-head">
          <h3 className="component-demo-title">选项卡 Tabs</h3>
        </div>
        <p className="component-demo-tip">按稿件提供一级/二级/三级 tab 与分段控件两种样式。</p>
        <div className="demo-controls">
          {[
            { key: "l1", label: "一级" },
            { key: "l2", label: "二级" },
            { key: "l3", label: "三级" }
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              className={`chip-toggle${tabLevel === item.key ? " active" : ""}`}
              onClick={() => setTabLevel(item.key as "l1" | "l2" | "l3")}
            >
              {item.label}
            </button>
          ))}
          <button type="button" className={`chip-toggle${tabUnderline ? " active" : ""}`} onClick={() => setTabUnderline((v) => !v)}>
            下划线
          </button>
        </div>
        <div className="tabs-stage">
          <div className={`tab-row level-${tabLevel}`}>
            {["选项", "选项", "选项", "选项", "选项", "选项"].map((item, idx) => (
              <button
                key={`${item}-${idx}`}
                type="button"
                className={`tab-chip level-${tabLevel}${tabActive === `${idx}` ? " active" : ""}${tabUnderline ? " underline" : ""}`}
                onClick={() => setTabActive(`${idx}`)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={`seg-control ${segSize}`}>
            {["分段", "分段", "分段"].map((item, idx) => (
              <button key={item + idx} type="button" className={`seg-chip${segActive === idx ? " active" : ""}`} onClick={() => setSegActive(idx)}>
                {item}
              </button>
            ))}
          </div>
          <div className="tab-panel">当前：{tabLevel.toUpperCase()} / {tabUnderline ? "有下划线" : "无下划线"}</div>
        </div>
      </section>
    </div>
  );
}
