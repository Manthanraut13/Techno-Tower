/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // === STRICT COLOR PALETTE ===

        // Primary Accent - Warm Amber (street illumination glow)
        // Used for: CTAs, active nav, success badges, logo glow
        primary: {
          DEFAULT: "#f4a825",
          dark: "#d68e1a",
          light: "#ffc145",
        },

        // Secondary - Deep Infrastructure Green (for secondary actions)
        secondary: {
          DEFAULT: "#22332a",
          light: "#2f453a",
        },

        // Base Backgrounds
        background: {
          DEFAULT: "#FFFFFF",         // Soft White - primary background
          light: "#FFFFFF",           // Soft White
          surface: "#F5F7F9",         // Light Gainsboro Grey - cards/sections
          dark: "#1c160d",            // Dark mode background
          "surface-dark": "#2d2418",  // Dark mode surface
        },

        // Primary Text - Dark Charcoal (NOT pure black)
        text: {
          main: "#2D3436",            // Dark Charcoal - main text
          muted: "#6B7280",           // Muted grey
          light: "#9CA3AF",           // Light grey for placeholders
        },

        // Secondary Accents - Soft Slate Grey (borders & dividers)
        border: {
          DEFAULT: "#E5E7EB",         // Soft Slate Grey
          dark: "#3e3223",            // Dark mode border
        },

        // Status Colors
        success: {
          DEFAULT: "#10B981",
          light: "#D1FAE5",
        },
        warning: {
          DEFAULT: "#F59E0B",
          light: "#FEF3C7",
        },
        danger: {
          DEFAULT: "#EF4444",
          light: "#FEE2E2",
        },
      },
      fontFamily: {
        display: ["Montserrat", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        "card-hover": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        glow: "0 0 15px rgba(244, 168, 37, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(244, 168, 37, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(244, 168, 37, 0.6)" },
        },
      },
    },
  },
  plugins: [],
}
