// src/theme.jsx
export const theme = {
  colors: {
    // Core surfaces
    bg: "#08090A",           // near-black, warm undertone
    surface: "#111214",      // panel
    surface2: "#16171C",     // raised panel / tags
    border: "rgba(255,255,255,0.08)",

    // Accent (single, used sparingly)
    primary: "#5E6AD2",
    primaryHover: "#6E78DA",
    primaryDark: "#4A54B8",

    // Text
    white: "#FFFFFF",
    text: "#E6E6E6",
    textMuted: "#8A8F98",
    textDim: "#5A5F68",

    // Legacy aliases (kept so old references don't break)
    primaryLight: "#8F98E6",
    primaryHoverLegacy: "#1f5e5d",
    lightAqua: "#08090A",
    darkNavy: "#08090A",
    cardBgLight: "rgba(17,18,20,0.9)",
    cardBgDark: "rgba(17,18,20,0.85)",
    light: "#111214",
    dark: "#111214",
    textLight: "#8A8F98",
  },
  gradients: {
    heroOverlay: "linear-gradient(135deg, rgba(8,9,10,0.92) 0%, rgba(8,9,10,0.75) 100%)",
    aquaGradient: "linear-gradient(135deg, #4A54B8 0%, #5E6AD2 100%)",
    glowGradient: "radial-gradient(circle, rgba(94,106,210,0.15) 0%, transparent 70%)",
    cardGradient: "linear-gradient(145deg, rgba(22,23,28,0.95) 0%, rgba(17,18,20,0.85) 100%)",
  },
  shadows: {
    soft: "0 4px 20px rgba(0, 0, 0, 0.25)",
    medium: "0 10px 30px rgba(0, 0, 0, 0.35)",
    glow: "0 0 25px rgba(94, 106, 210, 0.25)",
  },
  fonts: {
    sans: "Geist, Inter, system-ui, -apple-system, sans-serif",
    mono: "Geist Mono, JetBrains Mono, ui-monospace, monospace",
  },
  radii: {
    card: "12px",
    btn: "6px",
    pill: "999px",
  },
};