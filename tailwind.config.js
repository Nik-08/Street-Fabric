/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#9ca3af',
        'primary-focus': '#6b7280',
        'secondary': '#111827',
        'neutral': '#f9fafb',
        'base-100': '#f3f4f6',
        // 'base-200': '#F9F9F9',
        // 'info': '#696969',
        'success': '#16a34a',
        'warning': '#facc15',
        'error': '#b91c1c',
      },
    },
  },
  plugins: [],
};
