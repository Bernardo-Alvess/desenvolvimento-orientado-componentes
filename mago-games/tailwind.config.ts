import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#232222",
        foreground: "var(--foreground)",
        primary: "#412E5B",
        secondary: '#C576EBE5',
        chevron: '#412E5B',
        tertiary: '#7F52A3',
        cardBackground: '#D7B2FD'
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))', // Min 200px, cards ocupam igualmente.
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
} satisfies Config;
