"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { previewBrands } from "@/data/tokens/brands";
import type { BrandKey } from "@/data/tokens/types";

export function BrandTabs({ active }: { active: BrandKey }) {
  const pathname = usePathname();
  return (
    <div className="tabs" aria-label="品牌切换">
      {previewBrands.map((b) => {
        const href = "/design-md/" + b.key;
        const selected = b.key === active || pathname.endsWith("/" + b.key);
        return (
          <Link key={b.key} href={href} className={"tab " + (selected ? "active" : "")}>
            {b.label}
          </Link>
        );
      })}
    </div>
  );
}
