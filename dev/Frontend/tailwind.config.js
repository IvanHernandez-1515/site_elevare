// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ⬅️ Escanea todos tus componentes
  ],
  theme: {
    extend: {
      // Aquí puedes añadir colores institucionales, tipografías, etc.
    },
  },
  plugins: [],
}
