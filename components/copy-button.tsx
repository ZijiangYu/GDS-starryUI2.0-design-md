"use client";

import { useState } from "react";

export function CopyButton({ text, label = "一键复制" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button type="button" className="btn brand" onClick={onCopy}>
      {copied ? "已复制" : label}
    </button>
  );
}
