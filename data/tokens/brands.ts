import { coreColors, coreRadius, coreShadows, coreTypography } from "./core";
import type { BrandKey, BrandTokens } from "./types";

const sourceFile = "https://www.figma.com/design/F05obr0jxc9r2iv6P7Q9pt/GDS-Starry-2.0?node-id=4601-4048&t=flPEy4ooeuus3G71-1";
const lastSyncedAt = "2026-04-09";

const brandMap: Record<BrandKey, BrandTokens> = {
  zeekr: {
    key: "zeekr",
    label: "极氪",
    family: "ZEEKR",
    sourceNodeId: "4601:4048",
    sourceFile,
    lastSyncedAt,
    colors: {
      ...coreColors,
      brandPrimary: "#f56200",
      brandSecondary: "#f78133",
      brandPressed: "#c44e00",
      brandDisabled: "#fbc099",
      brandActive: "#feefe5"
    },
    radius: {
      ...coreRadius,
      l: 8,
      xl: 8,
      xxl: 12,
      xxxl: 16,
      buttonS: 999,
      buttonM: 999
    },
    shadows: coreShadows,
    typography: coreTypography,
    palettes: [
      {
        name: "Brand",
        colors: {
          "10": "#311400",
          "9": "#622700",
          "8": "#933b00",
          "7": "#c44e00",
          "6": "#f56200",
          "5": "#f78133",
          "4": "#f9a166",
          "3": "#fbc099",
          "2": "#fde0cc",
          "1": "#feefe5"
        }
      },
      {
        name: "Gray",
        colors: {
          "11": "#000000",
          "10": "#232323",
          "9": "#4f4f4f",
          "8": "#64696b",
          "7": "#8e9496",
          "6": "#b9bec0",
          "5": "#d9dbdb",
          "4": "#e6e6e6",
          "3": "#f0f0f0",
          "2": "#f8f8f8",
          "1": "#fafafb",
          "0": "#ffffff"
        }
      },
      {
        name: "Palette A",
        colors: {
          "10": "#00164d",
          "9": "#072b79",
          "8": "#1246a5",
          "7": "#2366d1",
          "6": "#398bfd",
          "5": "#5ca5fd",
          "4": "#7fbcfe",
          "3": "#a4d3fe",
          "2": "#c7e6ff",
          "1": "#ebf6ff"
        }
      },
      {
        name: "Palette B",
        colors: {
          "10": "#004d18",
          "9": "#086623",
          "8": "#13802e",
          "7": "#239a3d",
          "6": "#36b44e",
          "5": "#52c363",
          "4": "#72d27d",
          "3": "#96e19c",
          "2": "#bdf0c0",
          "1": "#e8ffe8"
        }
      },
      {
        name: "Palette C",
        colors: {
          "10": "#4d000b",
          "9": "#720511",
          "8": "#980c18",
          "7": "#bd171f",
          "6": "#e32428",
          "5": "#e94b48",
          "4": "#ee746d",
          "3": "#f49d95",
          "2": "#f9c4bd",
          "1": "#ffebe8"
        }
      },
      {
        name: "Palette D",
        colors: {
          "10": "#4d1800",
          "9": "#772e07",
          "8": "#a14a14",
          "7": "#cc6b26",
          "6": "#f6913d",
          "5": "#f8a85e",
          "4": "#fabf80",
          "3": "#fbd3a2",
          "2": "#fde6c5",
          "1": "#fff6e8"
        }
      },
      {
        name: "Palette E",
        colors: {
          "10": "#29005c",
          "9": "#46107f",
          "8": "#5f2596",
          "7": "#8645bb",
          "6": "#b06ee0",
          "5": "#c184e6",
          "4": "#d09cec",
          "3": "#dfb4f3",
          "2": "#edcef9",
          "1": "#f9e8ff"
        }
      },
      {
        name: "Palette F",
        colors: {
          "10": "#004a4d",
          "9": "#006363",
          "8": "#007a76",
          "7": "#009187",
          "6": "#00a89a",
          "5": "#22b9a5",
          "4": "#4acbb5",
          "3": "#78dcc8",
          "2": "#adeedf",
          "1": "#e8fff9"
        }
      }
    ]
  },
  aftersales: {
    key: "aftersales",
    label: "售后",
    family: "售后",
    sourceNodeId: "4601:4048",
    sourceFile,
    lastSyncedAt,
    colors: {
      ...coreColors,
      brandPrimary: "#2e5eff",
      brandSecondary: "#587eff",
      brandPressed: "#254bcd",
      brandDisabled: "#abbfff",
      brandActive: "#eaefff"
    },
    radius: {
      ...coreRadius,
      l: 6,
      xl: 8,
      xxl: 12,
      xxxl: 16,
      buttonS: 4,
      buttonM: 6
    },
    shadows: coreShadows,
    typography: coreTypography,
    palettes: [
      {
        name: "Brand",
        colors: {
          "10": "#091437",
          "9": "#122669",
          "8": "#1c399b",
          "7": "#254bcd",
          "6": "#2e5eff",
          "5": "#587eff",
          "4": "#819eff",
          "3": "#abbfff",
          "2": "#d5dfff",
          "1": "#eaefff"
        }
      },
      {
        name: "Gray",
        colors: {
          "11": "#000000",
          "10": "#1b223b",
          "9": "#363f5f",
          "8": "#565e79",
          "7": "#99a0b5",
          "6": "#b4bbcd",
          "5": "#c6cbda",
          "4": "#d6d9e1",
          "3": "#e1e4ed",
          "2": "#f4f5fa",
          "1": "#f6f9ff",
          "0": "#ffffff"
        }
      },
      {
        name: "Palette A",
        colors: {
          "10": "#004047",
          "9": "#00555f",
          "8": "#00808e",
          "7": "#00aabe",
          "6": "#00d5ed",
          "5": "#33ddf1",
          "4": "#66e6f4",
          "3": "#99eef8",
          "2": "#ccf7fb",
          "1": "#e5fbfd"
        }
      },
      {
        name: "Palette B",
        colors: {
          "10": "#103617",
          "9": "#16481f",
          "8": "#206c2f",
          "7": "#2b903e",
          "6": "#36b44e",
          "5": "#5ec371",
          "4": "#86d295",
          "3": "#afe1b8",
          "2": "#d7f0dc",
          "1": "#ebf7ed"
        }
      },
      {
        name: "Palette C",
        colors: {
          "10": "#440b0c",
          "9": "#5b0e10",
          "8": "#881618",
          "7": "#c00000",
          "6": "#f00000",
          "5": "#f33333",
          "4": "#f66666",
          "3": "#f99999",
          "2": "#fccccc",
          "1": "#fde5e5"
        }
      },
      {
        name: "Palette D",
        colors: {
          "10": "#4d1800",
          "9": "#772e07",
          "8": "#a14a14",
          "7": "#cc6b26",
          "6": "#ff892e",
          "5": "#ffa058",
          "4": "#ffb881",
          "3": "#ffd0ab",
          "2": "#ffe7d5",
          "1": "#fff3ea"
        }
      },
      {
        name: "Palette E",
        colors: {
          "10": "#292457",
          "9": "#342e6a",
          "8": "#494192",
          "7": "#5f55b9",
          "6": "#7569e0",
          "5": "#9187e6",
          "4": "#aca5ec",
          "3": "#c8c3f3",
          "2": "#e3e1f9",
          "1": "#f1f0fc"
        }
      },
      {
        name: "Palette F",
        colors: {
          "10": "#50410e",
          "9": "#695512",
          "8": "#9b7d1c",
          "7": "#edb600",
          "6": "#ffce2e",
          "5": "#ffd858",
          "4": "#ffe181",
          "3": "#ffebab",
          "2": "#fff5d5",
          "1": "#fffaea"
        }
      }
    ]
  },
  geely: {
    key: "geely",
    label: "吉利",
    family: "吉利",
    sourceNodeId: "4601:4048",
    sourceFile,
    lastSyncedAt,
    colors: {
      ...coreColors,
      brandPrimary: "#3279f6",
      brandSecondary: "#5a95ff",
      brandPressed: "#285ec0",
      brandDisabled: "#a5c6fb",
      brandActive: "#ebf3ff"
    },
    radius: {
      ...coreRadius,
      l: 4,
      xl: 8,
      xxl: 8,
      xxxl: 12,
      buttonS: 4,
      buttonM: 6
    },
    shadows: coreShadows,
    typography: coreTypography,
    palettes: [
      {
        name: "Brand",
        colors: {
          "7": "#285ec0",
          "6": "#3279f6",
          "5": "#5a95ff",
          "3": "#a5c6fb",
          "1": "#ebf3ff"
        }
      }
    ]
  },
  lynkco: {
    key: "lynkco",
    label: "LYNK & CO",
    family: "LYNK & CO",
    sourceNodeId: "4601:4048",
    sourceFile,
    lastSyncedAt,
    colors: {
      ...coreColors,
      brandPrimary: "#4d88fb",
      brandSecondary: "#7aa6fd",
      brandPressed: "#2971ff",
      brandDisabled: "#dbe6ff",
      brandActive: "#edf3ff"
    },
    radius: {
      ...coreRadius,
      l: 6,
      xl: 6,
      xxl: 8,
      xxxl: 12,
      buttonS: 4,
      buttonM: 6
    },
    shadows: coreShadows,
    typography: coreTypography,
    palettes: [
      {
        name: "Brand",
        colors: {
          "10": "#142951",
          "9": "#153c9a",
          "8": "#2355f5",
          "7": "#2971ff",
          "6": "#4d88fb",
          "5": "#7aa6fd",
          "4": "#acc2f8",
          "3": "#d3e1fe",
          "2": "#dbe6ff",
          "1": "#edf3ff"
        }
      },
      {
        name: "Gray",
        colors: {
          "11": "#000000",
          "10": "#282828",
          "9": "#585858",
          "8": "#666666",
          "7": "#797979",
          "6": "#7d7d7d",
          "5": "#999999",
          "4": "#b3b3b3",
          "3": "#cccccc",
          "2": "#e8e8e8",
          "1": "#f6f6f6",
          "0": "#ffffff"
        }
      },
      {
        name: "Palette A",
        colors: {
          "10": "#474f60",
          "9": "#586583",
          "8": "#717a8d",
          "7": "#8b8f97",
          "6": "#a9b1c1",
          "5": "#c1cada",
          "4": "#d3dbe9",
          "3": "#e3e9f3",
          "2": "#edf0f6",
          "1": "#f4f7fa"
        }
      },
      {
        name: "Palette B",
        colors: {
          "10": "#4d1600",
          "9": "#782d0a",
          "8": "#a44b1b",
          "7": "#cf7034",
          "6": "#fb9954",
          "5": "#fcb071",
          "4": "#fdc48f",
          "3": "#fdd6ac",
          "2": "#fee7ca",
          "1": "#fff5ee"
        }
      },
      {
        name: "Palette C",
        colors: {
          "10": "#004d2a",
          "9": "#066738",
          "8": "#0e8146",
          "7": "#1a9c54",
          "6": "#28b663",
          "5": "#46c577",
          "4": "#69d38e",
          "3": "#8fe2a9",
          "2": "#baf0c9",
          "1": "#e9f8ef"
        }
      },
      {
        name: "Palette D",
        colors: {
          "10": "#4d000a",
          "9": "#740813",
          "8": "#9c161f",
          "7": "#c32a2f",
          "6": "#eb4343",
          "5": "#ef6762",
          "4": "#f38a82",
          "3": "#f7aba3",
          "2": "#fbccc5",
          "1": "#fdf1f1"
        }
      },
      {
        name: "Palette E",
        colors: {
          "10": "#08004d",
          "9": "#150f72",
          "8": "#2b2798",
          "7": "#4949bd",
          "6": "#7579e3",
          "5": "#8a91e9",
          "4": "#a0a8ee",
          "3": "#b7bff4",
          "2": "#cfd6f9",
          "1": "#e8edff"
        }
      },
      {
        name: "Palette F",
        colors: {
          "10": "#20004d",
          "9": "#380f6b",
          "8": "#57278a",
          "7": "#7947a8",
          "6": "#a070c7",
          "5": "#b285d2",
          "4": "#c49bdd",
          "3": "#d6b3e9",
          "2": "#e7cdf4",
          "1": "#f8e8ff"
        }
      },
      {
        name: "Palette G",
        colors: {
          "10": "#002e4d",
          "9": "#0a486c",
          "8": "#1a668c",
          "7": "#3187ac",
          "6": "#4dabcc",
          "5": "#68bcd6",
          "4": "#85cee0",
          "3": "#a4dfeb",
          "2": "#c5eef5",
          "1": "#e8fdff"
        }
      },
      {
        name: "Palette H",
        colors: {
          "10": "#004d40",
          "9": "#096754",
          "8": "#178269",
          "7": "#2a9c7e",
          "6": "#41b794",
          "5": "#5cc5a2",
          "4": "#7ad4b3",
          "3": "#9ce2c6",
          "2": "#c0f1dc",
          "1": "#e8fff4"
        }
      },
      {
        name: "Palette J",
        colors: {
          "10": "#4d3200",
          "9": "#775203",
          "8": "#a17508",
          "7": "#cb9c0f",
          "6": "#f5c418",
          "5": "#f7d640",
          "4": "#f9e369",
          "3": "#fbef93",
          "2": "#fdf8bd",
          "1": "#fffee8"
        }
      },
      {
        name: "Palette K",
        colors: {
          "10": "#00034d",
          "9": "#0e1465",
          "8": "#242d7d",
          "7": "#404b95",
          "6": "#636fad",
          "5": "#7987bd",
          "4": "#92a0ce",
          "3": "#acbade",
          "2": "#c9d4ef",
          "1": "#e8f0ff"
        }
      },
      {
        name: "Palette L",
        colors: {
          "10": "#4d000a",
          "9": "#740c16",
          "8": "#9b2028",
          "7": "#c23b40",
          "6": "#e95f5f",
          "5": "#ed7d79",
          "4": "#f29993",
          "3": "#f6b6af",
          "2": "#fbd1cb",
          "1": "#ffece8"
        }
      }
    ]
  }
};

export const brands = Object.values(brandMap);
export const previewBrands = brands.filter((b) => b.key !== "geely");

export function getBrandTokens(brand: BrandKey): BrandTokens {
  return brandMap[brand];
}

export function isBrandKey(value: string): value is BrandKey {
  return value in brandMap;
}
