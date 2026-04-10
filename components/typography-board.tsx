import type { TypographyUsageItem } from "@/data/tokens/types";

export function TypographyBoard({ items }: { items: TypographyUsageItem[] }) {
  const sorted = [...items].sort((a, b) => b.size - a.size);

  return (
    <div className="type-grid">
      {sorted.map((item) => (
        <article key={item.token} className="type-card two-lines">
          <div
            className="type-sample"
            style={{
              fontFamily: item.family,
              fontSize: item.size,
              lineHeight: `${item.lineHeight}px`,
              fontWeight: item.weight
            }}
          >
            {item.sample}
          </div>
          <div className="type-line2">
            <span className="type-token">{item.token}</span>
            <span className="type-spec">{item.size}/{item.lineHeight}px · {item.weight}</span>
            <span className="type-scene">{item.scenario}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
