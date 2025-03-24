/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,sx,tsx,mdx}", // Si usas Next.js, esto incluye tus páginas
    "./components/**/*.{js,ts,jsx,tsx}", // Incluye tus componentes
    "./layouts/**/*.{js,ts,jsx,tsx}", // Si usas layouts
    "./app/**/*.{js,ts,jsx,tsx}", // Si usas la carpeta `app` en Next.js 13
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6347",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
      },
    },
  },
  plugins: [],
};
