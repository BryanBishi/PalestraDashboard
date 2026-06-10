// theme.js
// Presentation-only design tokens + shared style helpers for the Cricket admin UI.
// NOTE: styling only — no application logic, API calls, or routing belong here.

import { ArrowLeft } from "lucide-react";

// ── Palette ──────────────────────────────────────────────────────────────────
export const C = {
  navy: "#15213f",
  navyHover: "#1f2d52",
  navyLight: "#34508c",
  navyTint: "#eef1f7",
  navyTintBorder: "#cdd5e6",

  red: "#e1262b",
  redHover: "#c01f23",
  redTint: "#fdecec",

  blue: "#1f6fd1",
  gold: "#c9a227",

  green: "#2e7d32",
  greenTint: "#eaf6ea",
  greenBorder: "#bfe3bf",

  danger: "#cc3333",
  dangerTint: "#fdecec",
  dangerBorder: "#f7c5c5",

  warn: "#f59e0b",
  warnTint: "#fff7e6",
  warnBorder: "#ffe2a8",

  bg: "#f4f6f9",
  surface: "#ffffff",
  border: "#e6e8ec",
  text: "#1a2233",
  textMut: "#5b6472",
  textFaint: "#8a93a3",
  white: "#ffffff",
};

export const FONT = {
  display: "'Playfair Display', Georgia, serif",
  body: "'Inter', 'Segoe UI', system-ui, sans-serif",
};

export const RADII = { card: "14px", btn: "10px", pill: "999px" };

export const SHADOW = {
  card: "0 2px 10px rgba(20,33,63,0.06)",
  elev: "0 8px 28px rgba(20,33,63,0.12)",
};

// ── Card surface ─────────────────────────────────────────────────────────────
export const card = (x = {}) => ({
  backgroundColor: C.surface,
  borderRadius: RADII.card,
  border: `1px solid ${C.border}`,
  boxShadow: SHADOW.card,
  ...x,
});

// ── Button ───────────────────────────────────────────────────────────────────
const BTN_VARIANTS = {
  primary: { bg: C.navy, hov: C.navyHover, fg: "#fff", glow: "0 2px 8px rgba(21,33,63,0.22)" },
  accent: { bg: C.red, hov: C.redHover, fg: "#fff", glow: "0 2px 8px rgba(225,38,43,0.25)" },
  danger: { bg: C.danger, hov: C.redHover, fg: "#fff", glow: "0 2px 8px rgba(204,51,51,0.22)" },
  ghost: { bg: "transparent", hov: C.navyTint, fg: C.navy, glow: "none" },
};

export const OBtn = ({
  children,
  onClick,
  style = {},
  variant = "primary",
  disabled = false,
  type = "button",
}) => {
  const p = BTN_VARIANTS[variant] || BTN_VARIANTS.primary;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "7px",
        padding: "10px 20px",
        backgroundColor: disabled ? "#dfe3ea" : p.bg,
        color: disabled ? "#9aa3b2" : p.fg,
        border: variant === "ghost" ? `1px solid ${C.navyTintBorder}` : "none",
        borderRadius: RADII.btn,
        fontSize: "13px",
        fontWeight: 700,
        fontFamily: FONT.body,
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: disabled ? "none" : p.glow,
        transition: "background 0.15s, box-shadow 0.15s",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = p.hov;
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = p.bg;
      }}
    >
      {children}
    </button>
  );
};

// ── Back button ──────────────────────────────────────────────────────────────
export const BackBtn = ({ label, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      background: "none",
      border: "none",
      color: C.textFaint,
      fontSize: "13px",
      fontWeight: 600,
      cursor: "pointer",
      marginBottom: "18px",
      padding: 0,
      fontFamily: FONT.body,
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = C.red)}
    onMouseLeave={(e) => (e.currentTarget.style.color = C.textFaint)}
  >
    <ArrowLeft size={15} /> {label}
  </button>
);

// ── Text heading (serif title + red accent underline) ─────────────────────────
export const Heading = ({ title, sub }) => (
  <div style={{ marginBottom: "22px" }}>
    <h1
      style={{
        fontFamily: FONT.display,
        fontSize: "24px",
        fontWeight: 700,
        color: C.text,
        margin: 0,
        letterSpacing: "0.2px",
      }}
    >
      {title}
    </h1>
    {sub && <p style={{ fontSize: "13px", color: C.textFaint, marginTop: "5px" }}>{sub}</p>}
    <div
      style={{
        width: "40px",
        height: "3px",
        backgroundColor: C.red,
        borderRadius: "2px",
        marginTop: "8px",
      }}
    />
  </div>
);

// ── Pill badge ───────────────────────────────────────────────────────────────
export const Badge = ({ label, bg, color, border }) => (
  <span
    style={{
      fontSize: "11px",
      fontWeight: 700,
      padding: "3px 10px",
      borderRadius: RADII.pill,
      backgroundColor: bg,
      color,
      border: `1px solid ${border}`,
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </span>
);

// ── Green cricket-field page banner (KCA "Seasons/Tournaments" motif) ─────────
export const PageBanner = ({ title, sub, icon: Icon }) => (
  <div
    className="page-banner"
    style={{
      backgroundImage:
        "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 22px, transparent 22px, transparent 44px), linear-gradient(135deg, #1e7d34 0%, #2e9e44 100%)",
      borderRadius: RADII.card,
      padding: "22px 26px",
      marginBottom: "22px",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      boxShadow: SHADOW.card,
      border: "1px solid #1b6e2e",
    }}
  >
    {Icon && (
      <div
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "12px",
          flexShrink: 0,
          background: "rgba(255,255,255,0.16)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={24} color="#fff" />
      </div>
    )}
    <div>
      <h1
        style={{
          fontFamily: FONT.display,
          fontSize: "26px",
          fontWeight: 800,
          color: "#fff",
          margin: 0,
          letterSpacing: "0.3px",
          textShadow: "0 1px 2px rgba(0,0,0,0.18)",
        }}
      >
        {title}
      </h1>
      {sub && (
        <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.92)", marginTop: "4px" }}>
          {sub}
        </p>
      )}
    </div>
  </div>
);
