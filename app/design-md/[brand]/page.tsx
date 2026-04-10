import { notFound } from "next/navigation";
import { BrandTabs } from "@/components/brand-tabs";
import { CopyButton } from "@/components/copy-button";
import { ComponentInteractionBoard } from "@/components/component-interaction-board";
import { RadiusBoard } from "@/components/radius-board";
import { SemanticColorTable } from "@/components/semantic-color-table";
import { ShadowBoard } from "@/components/shadow-board";
import { SpacingBoard } from "@/components/spacing-board";
import { TocNav } from "@/components/toc-nav";
import { TypographyBoard } from "@/components/typography-board";
import { renderDesignMd } from "@/data/design-md";
import { spacingUsage } from "@/data/spacing-usage";
import { getColorUsage, getRadiusUsage, getTypographyUsage } from "@/data/token-usage";
import { getBrandTokens, isBrandKey } from "@/data/tokens/brands";

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;

  if (!isBrandKey(brand)) {
    notFound();
  }

  const tokens = getBrandTokens(brand);
  const markdown = renderDesignMd(brand);
  const installCommand = "npx @starry-ui/design-md add --brand " + brand;
  const colorUsage = getColorUsage(brand);
  const radiusUsage = getRadiusUsage(brand);
  const typographyUsage = getTypographyUsage(brand);

  return (
    <main className="shell doc" style={{ ["--brand-primary" as string]: tokens.colors.brandPrimary }}>
      <header className="topbar">
        <div className="topbar-left">Starry UI 2.0</div>
        <div className="topbar-center">
          <BrandTabs active={brand} />
        </div>
        <div className="topbar-right">
          <div className="topbar-actions">
            <div className="brand-pill large">
              <span className="dot" />
              <span>{tokens.label}</span>
            </div>
            <CopyButton text={markdown} label="复制当前品牌 DESIGN.md" />
          </div>
        </div>
      </header>

      <div className="doc-layout">
        <div className="doc-main">
          <section id="quickstart" className="card hero anchor">
            <h2 className="card-title">用法</h2>
            <div className="codebox">
              <div className="codebox-title">安装命令</div>
              <code>{installCommand}</code>
              <CopyButton text={installCommand} label="复制命令" />
            </div>
          </section>

          <section id="colors" className="card anchor">
            <h2 className="card-title">颜色与使用场景</h2>
            <p className="meta">来源节点: {tokens.sourceNodeId} / 同步时间: {tokens.lastSyncedAt}</p>
            <div className="usage-wrap">
              <SemanticColorTable items={colorUsage} />
            </div>
          </section>

          <section id="typography" className="card anchor">
            <h2 className="card-title">字体与使用场景</h2>
            <div className="usage-wrap">
              <TypographyBoard items={typographyUsage} />
            </div>
          </section>

          <section id="radius" className="card anchor">
            <h2 className="card-title">圆角与使用场景</h2>
            <RadiusBoard items={radiusUsage} />
          </section>

          <section id="spacing" className="card anchor">
            <h2 className="card-title">间距与使用场景</h2>
            <SpacingBoard items={spacingUsage} />
          </section>

          <section id="components" className="card anchor">
            <h2 className="card-title">组件模块</h2>
            <ComponentInteractionBoard brand={tokens} />
          </section>

          <section id="shadow" className="card anchor">
            <h2 className="card-title">投影层级效果</h2>
            <ShadowBoard brand={tokens} />
          </section>

          <section id="markdown" className="card markdown anchor">
            <h2 className="card-title">DESIGN.md 预览</h2>
            <article className="md-box">
              <pre className="pre">{markdown}</pre>
            </article>
          </section>
        </div>

        <TocNav
          items={[
            { id: "quickstart", label: "用法" },
            { id: "colors", label: "颜色" },
            { id: "typography", label: "字体" },
            { id: "radius", label: "圆角" },
            { id: "spacing", label: "间距" },
            { id: "components", label: "组件" },
            { id: "shadow", label: "投影" },
            { id: "markdown", label: "MD文件" }
          ]}
        />
      </div>
    </main>
  );
}
