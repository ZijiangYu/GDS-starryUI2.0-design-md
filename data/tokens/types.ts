export type BrandKey = "zeekr" | "aftersales" | "geely" | "lynkco";

export interface RadiusTokens {
  none: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  xxxl: number;
  full: number;
  buttonS: number;
  buttonM: number;
}

export interface ColorTokens {
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textQuaternary: string;
  textDisabled: string;
  textInverse: string;
  brandPrimary: string;
  brandSecondary: string;
  brandPressed: string;
  brandDisabled: string;
  brandActive: string;
  borderDefault: string;
  borderHeavy: string;
  borderDisabled: string;
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  bgQuaternary: string;
  bgDisabled: string;
  overlayPrimary: string;
  overlaySecondary: string;
}

export interface ShadowTokens {
  light: string;
  heavy: string;
}

export interface TypographyTokens {
  cnFamily: string;
  enFamily: string;
}

export interface PaletteGroup {
  name: string;
  colors: Record<string, string>;
}

export interface ColorUsageItem {
  token: string;
  value: string;
  scenario: string;
}

export interface TypographyUsageItem {
  token: string;
  size: number;
  lineHeight: number;
  weight: number;
  family: string;
  scenario: string;
  sample: string;
}

export interface RadiusUsageItem {
  token: string;
  value: number;
  scenario: string;
}

export interface BrandTokens {
  key: BrandKey;
  label: string;
  family: string;
  sourceNodeId: string;
  sourceFile: string;
  lastSyncedAt: string;
  colors: ColorTokens;
  radius: RadiusTokens;
  shadows: ShadowTokens;
  typography: TypographyTokens;
  palettes: PaletteGroup[];
}
