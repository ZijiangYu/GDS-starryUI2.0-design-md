import type { BrandTokens } from "@/data/tokens/types";

function textColor(hex: string): string {
  const value = hex.replace("#", "");
  if (value.length !== 6) {
    return "#111111";
  }
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma < 145 ? "#ffffff" : "#111111";
}

function sorted(entries: Array<[string, string]>): Array<[string, string]> {
  return [...entries].sort((a, b) => Number(b[0]) - Number(a[0]));
}

export function PaletteBoard({ brand }: { brand: BrandTokens }) {
  return (
    <div className="palette-board">
      {brand.palettes.map((group) => (
        <section key={group.name} className="palette-section">
          <div className="palette-title">{group.name}</div>
          <div className="swatch-grid">
            {sorted(Object.entries(group.colors)).map(([step, hex]) => (
              <article key={group.name + step} className="swatch" style={{ background: hex, color: textColor(hex) }}>
                <span className="swatch-step">{step}</span>
                <span className="swatch-hex">{hex.toUpperCase()}</span>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
