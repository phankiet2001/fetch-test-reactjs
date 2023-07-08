/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    "!./node_modules",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'badge': '#FC5A5A',
        'deep-blue': '#171725',
        'grey': '#E2E2EA',
        'blue-dark': '#0062FF'
      }
    },
    boxShadow: {
      'coin-balance': '0px 12px 18px 0px #1717250A',
    },
    textColor: {
      'small-heading': '#B5B5BE',
      white: '#FFFFFF',
      black: '#000',
      'body': '#92929D',
      'blue-dark': '#0062FF',
      title: '#696974'
    },
    borderColor: {
      article: '#F1F1F5'
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
