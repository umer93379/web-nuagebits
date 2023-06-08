const colors = require('./src/settings/colors.json')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        headerBg: colors.header_bg,
        headerTextDefaultColor: "#000000",
        headerTextHoverColor: "#3b82f6",
        headerTextDefaultBG: "#000000",
        headerTextHoverBG: "#3b82f6",

        headerSocialBg: "#000000",
        headerSocialTextDefaultColor: "#FFFFFF",
        headerSocialTextHoverColor: "#CCCCCC",
        headerSocialTextDefaultBG: "#000000",
        headerSocialTextHoverBG: "#3b82f6",
      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('flowbite/plugin')],
};