import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starry UI 2.0 DESIGN.md",
  description: "品牌变量预览与 DESIGN.md 生成"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
