import type { BrandTokens } from "@/data/tokens/types";

export function TokenTable({ brand }: { brand: BrandTokens }) {
  const rows = [
    ...Object.entries(brand.colors),
    ...Object.entries(brand.radius),
    ...Object.entries(brand.shadows),
    ...Object.entries(brand.typography)
  ];

  return (
    <div>
      {rows.map(([k, v]) => (
        <div className="token-row" key={k}>
          <div className="k">{k}</div>
          <div className="v">{String(v)}</div>
        </div>
      ))}
    </div>
  );
}
