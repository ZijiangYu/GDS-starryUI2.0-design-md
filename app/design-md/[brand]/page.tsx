import { notFound } from "next/navigation";
import { brands, getBrandTokens } from "@/data/tokens/brands";
import { renderDesignMd } from "@/data/design-md";
import type { BrandKey } from "@/data/tokens/types";

interface PageProps {
  params: Promise<{ brand: string }>;
}

const validBrands: BrandKey[] = ["zeekr", "lynkco", "aftersales", "geely"];

export async function generateStaticParams() {
  return validBrands.map((brand) => ({ brand }));
}

export async function generateMetadata({ params }: PageProps) {
  const { brand } = await params;
  const tokens = getBrandTokens(brand as BrandKey);
  return {
    title: `Starry UI 2.0 - ${tokens.label}`,
  };
}

export default async function DesignMdPage({ params }: PageProps) {
  const { brand } = await params;

  if (!validBrands.includes(brand as BrandKey)) {
    notFound();
  }

  const tokens = getBrandTokens(brand as BrandKey);
  const designMd = renderDesignMd(brand as BrandKey);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✦</span>
            <span className="font-semibold text-lg">Starry UI 2.0</span>
            <span className="text-gray-400">|</span>
            <span className="text-brand">{tokens.label}</span>
          </div>

          {/* Brand Switcher */}
          <nav className="flex gap-2">
            {validBrands.map((b) => {
              const t = getBrandTokens(b);
              const isActive = b === brand;
              return (
                <a
                  key={b}
                  href={`/design-md/${b}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  style={isActive ? { backgroundColor: tokens.colors.brandPrimary } : {}}
                >
                  {t.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
            {designMd}
          </pre>
        </div>
      </div>
    </main>
  );
}
