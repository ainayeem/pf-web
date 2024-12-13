import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "#1a2f4a",
        primaryColorButton: "#162132",
        primaryColorHovar: "#455a7f",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
