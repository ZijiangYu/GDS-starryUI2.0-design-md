import type { ColorTokens, RadiusTokens, ShadowTokens, TypographyTokens } from "./types";

export const coreColors: Omit<ColorTokens, "brandPrimary" | "brandSecondary" | "brandPressed" | "brandDisabled" | "brandActive"> = {
  textPrimary: "#232323",
  textSecondary: "#64696b",
  textTertiary: "#8e9496",
  textQuaternary: "#b9bec0",
  textDisabled: "#d9dbdb",
  textInverse: "#ffffff",
  borderDefault: "#f0f0f0",
  borderHeavy: "#b9bec0",
  borderDisabled: "#23232314",
  bgPrimary: "#f8f8f8",
  bgSecondary: "#ffffff",
  bgTertiary: "#fafafb",
  bgQuaternary: "#e6e6e6",
  bgDisabled: "#23232314",
  overlayPrimary: "#00000099",
  overlaySecondary: "#000000cc"
};

export const coreRadius: Omit<RadiusTokens, "l" | "xl" | "xxl" | "xxxl" | "buttonS" | "buttonM"> = {
  none: 0,
  s: 2,
  m: 4,
  full: 999
};

export const coreShadows: ShadowTokens = {
  light: "0 4px 16px rgba(0, 0, 0, 0.06)",
  heavy: "0 4px 16px rgba(0, 0, 0, 0.12)"
};

export const coreTypography: TypographyTokens = {
  cnFamily: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
  enFamily: '"DIN", "DIN Alternate", "Helvetica Neue", Arial, sans-serif'
};
