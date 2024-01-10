/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-main': 'var(--primary-main)',
        'primary-soft': 'var(--primary-soft)',
        'secondary-main': 'var(--secondary-main)',
        'secondary-soft': 'var(--secondary-soft)',
        'primary-bg': 'var(--primary-bg)',
        'pay-btn': 'var(--pay-btn)',
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
