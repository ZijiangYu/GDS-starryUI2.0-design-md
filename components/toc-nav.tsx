"use client";

import { useEffect, useMemo, useState } from "react";

export interface TocItem {
  id: string;
  label: string;
}

export function TocNav({ items }: { items: TocItem[] }) {
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const fromHash = window.location.hash.replace("#", "");
    if (fromHash && ids.includes(fromHash)) {
      setActive(fromHash);
    }

    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ids.includes(hash)) {
        setActive(hash);
      }
    };

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const nextId = visible[0].target.id;
          if (ids.includes(nextId)) {
            setActive(nextId);
          }
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-20% 0px -55% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", onHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [ids]);

  return (
    <div className="toc-rail" aria-label="页面定位">
      <aside className="toc">
        <div className="toc-card">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                className={`toc-link${isActive ? " active" : ""}`}
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
              >
                <span className="toc-label">{item.label}</span>
                <span className="toc-bar" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
