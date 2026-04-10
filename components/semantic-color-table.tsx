import type { ColorUsageItem } from "@/data/tokens/types";

function textColor(hex: string): string {
  const value = hex.replace("#", "");
  if (value.length !== 6) return "#111111";
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma < 145 ? "#ffffff" : "#111111";
}

function sectionOf(token: string): string {
  if (token.includes("brand-")) return "Primary";
  if (token.includes("text-")) return "Text";
  if (token.includes("fill-")) return "Background";
  if (token.includes("border-")) return "Border";
  if (token.includes("status-")) return "Status";
  if (token.includes("support-")) return "Semantic Accents";
  return "Others";
}

const order = ["Primary", "Text", "Background", "Border", "Status", "Semantic Accents", "Others"];

export function SemanticColorTable({ items }: { items: ColorUsageItem[] }) {
  const grouped = order
    .map((name) => ({ name, list: items.filter((item) => sectionOf(item.token) === name) }))
    .filter((group) => group.list.length > 0);

  return (
    <div className="color-sections">
      {grouped.map((group) => (
        <section key={group.name} className="color-section">
          <h3 className="section-title">{group.name}</h3>
          <div className="color-card-grid">
            {group.list.map((item) => (
              <article key={item.token} className="color-card">
                <div className="color-cap" style={{ background: item.value, color: textColor(item.value) }}>
                  {item.value.toUpperCase()}
                </div>
                <div className="color-meta">
                  <div className="color-token">{item.token}</div>
                  <div className="color-scene">{item.scenario}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
