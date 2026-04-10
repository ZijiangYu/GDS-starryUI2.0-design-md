import type { RadiusUsageItem } from "@/data/tokens/types";

export function RadiusBoard({ items }: { items: RadiusUsageItem[] }) {
  return (
    <div className="radius-grid">
      {items.map((item) => (
        <article key={item.token} className="radius-card">
          <div className="radius-shape" style={{ borderRadius: `${item.value}px` }} />
          <div className="radius-token">{item.token}</div>
          <div className="radius-value">{item.value}px</div>
          <div className="radius-scene">{item.scenario}</div>
        </article>
      ))}
    </div>
  );
}
