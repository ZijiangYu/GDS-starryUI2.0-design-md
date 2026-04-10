import {
  spacingGridPresets,
  spacingPrinciples,
  spacingSplitPresets,
  type SpacingUsageItem
} from "@/data/spacing-usage";

function trackWidth(value: number): number {
  return Math.max(24, Math.min(180, value * 3));
}

export function SpacingBoard({ items }: { items: SpacingUsageItem[] }) {
  return (
    <div className="spacing-wrap">
      <section className="spacing-block">
        <h3 className="section-title">间距原则</h3>
        <div className="spacing-principles">
          {spacingPrinciples.map((item) => (
            <p key={item} className="spacing-principle-item">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="spacing-block">
        <h3 className="section-title">间距 Token</h3>
        <div className="spacing-token-list">
          {items.map((item) => (
            <article key={item.token} className="spacing-token-item">
              <div className="spacing-token-meta">
                <div className="spacing-token">{item.token}</div>
                <div className="spacing-value">{item.value}px</div>
              </div>
              <div className="spacing-visual">
                <div className="spacing-track" style={{ width: trackWidth(item.value) }} />
              </div>
              <div className="spacing-scene">{item.scenario}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="spacing-block">
        <h3 className="section-title">栅格建议</h3>
        <div className="spacing-grid-preset-list">
          {spacingGridPresets.map((item) => (
            <article key={item.columns} className="spacing-grid-preset-item">
              <div className="spacing-grid-preset-title">{item.columns} 栏栅格</div>
              <div className="spacing-grid-preset-spec">左右 margin {item.margin}px · 列间 gutter {item.gutter}px</div>
              <div className="spacing-grid-preset-scene">{item.scenario}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="spacing-block">
        <h3 className="section-title">横纵拆分建议</h3>
        <div className="spacing-split-list">
          {spacingSplitPresets.map((item) => (
            <article key={item.name} className="spacing-split-item">
              <div className="spacing-split-title">{item.name}</div>
              <div className="spacing-split-spec">horizontal {item.horizontal}px · vertical {item.vertical}px</div>
              <div className="spacing-split-scene">{item.scenario}</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
