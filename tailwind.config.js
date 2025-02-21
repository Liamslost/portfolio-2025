// tailwind.config.js (ESM)
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          scroll: 'scroll 10s linear infinite',
        },
        colors: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          tertiary: 'var(--color-tertiary)',
          'text-primary': 'var(--color-text-primary)',
        },
      },
    },
    plugins: [],
  };
  