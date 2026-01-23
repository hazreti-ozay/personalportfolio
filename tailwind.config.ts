import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Next.js'in ve bizim oluşturduğumuz dosyaların yolları
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Buraya ileride özel renklerimizi ekleyebiliriz
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;