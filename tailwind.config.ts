import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // StudyBud AI custom colors
        studybud: {
          blue: {
            50: "#EFF6FF",
            500: "#3B82F6",
            600: "#2563EB",
            background: "#DBEAFE",
          },
          cyan: {
            500: "#06B6D4",
            600: "#0D9488",
            background: "#CCFBF1",
          },
          purple: {
            500: "#8B5CF6",
            600: "#9333EA",
            background: "#F3E8FF",
            light: "#FAF5FF",
          },
          green: {
            500: "#16A34A",
            background: "#DCFCE7",
            light: "#86EFAC",
          },
          emerald: {
            light: "#F0FDFA",
          },
          gray: {
            50: "#F9FAFB",
            600: "#4B5563",
            700: "#374151",
            800: "#111827",
            900: "#1F2937",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        // StudyBud AI gradients
        "hero-gradient":
          "linear-gradient(90deg, #EFF6FF 0%, #FAF5FF 50%, #F0FDFA 100%)",
        "button-gradient": "linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)",
        "step-blue": "linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)",
        "step-cyan": "linear-gradient(90deg, #06B6D4 0%, #0D9488 100%)",
        "step-purple": "linear-gradient(90deg, #8B5CF6 0%, #9333EA 100%)",
        "educators-gradient":
          "linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)",
        "cta-gradient": "linear-gradient(90deg, #9333EA 0%, #3B82F6 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
