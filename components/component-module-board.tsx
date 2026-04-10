import { componentModules, type ComponentModuleItem } from "@/data/component-modules";

function statusText(status: ComponentModuleItem["status"]): string {
  if (status === "ready") return "已完成";
  if (status === "draft") return "开发中";
  return "规划中";
}

export function ComponentModuleBoard() {
  return (
    <div className="component-module-list">
      {componentModules.map((item) => (
        <article key={item.name} className="component-module-item">
          <div className="component-module-head">
            <h3 className="component-module-title">{item.name}</h3>
            <span className={`component-status ${item.status}`}>{statusText(item.status)}</span>
          </div>
          <p className="component-module-desc">{item.description}</p>
          <div className="component-token-row">
            <span className="component-token-label">关联 Tokens</span>
            <span className="component-token-values">{item.tokenRefs.join(" · ")}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

