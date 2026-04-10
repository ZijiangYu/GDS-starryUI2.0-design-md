import type { BrandTokens } from "@/data/tokens/types";

export function ShadowBoard({ brand }: { brand: BrandTokens }) {
  return (
    <div className="shadow-stage">
      <article className="shadow-card none">
        <div className="shadow-title">none</div>
        <div className="shadow-token">shadow-none</div>
        <div className="shadow-scene">平面容器 / 紧贴背景区域</div>
      </article>
      <article className="shadow-card light" style={{ boxShadow: brand.shadows.light }}>
        <div className="shadow-title">light</div>
        <div className="shadow-token">shadow-light-0</div>
        <div className="shadow-value">{brand.shadows.light}</div>
        <div className="shadow-scene">普通卡片 / 信息块 / 悬浮小面板</div>
      </article>
      <article className="shadow-card heavy" style={{ boxShadow: brand.shadows.heavy }}>
        <div className="shadow-title">heavy</div>
        <div className="shadow-token">shadow-dark-0</div>
        <div className="shadow-value">{brand.shadows.heavy}</div>
        <div className="shadow-scene">重点浮层 / 弹层 / 需要明显层级的容器</div>
      </article>
    </div>
  );
}
