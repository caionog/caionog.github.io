export default {
  content: ['./index.html', './project1.html', './project2.html', './project3.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(34, 211, 238, 0.18)',
      },
    },
  },
  plugins: [],
};