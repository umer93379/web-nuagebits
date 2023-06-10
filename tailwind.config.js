const colors = require('./src/settings/colors.json')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        headerBg: colors.header.bg,
        headerTextDefaultColor: colors.header.text_default_color,
        headerTextHoverColor: colors.header.text_hover_color,
        headerTextDefaultBG: colors.header.text_default_bg,
        headerTextHoverBG: colors.header.text_hover_bg,

        headerSocialBg: colors.header.social_bg,
        headerSocialTextDefaultColor: colors.header.social_text_default_color,
        headerSocialTextHoverColor: colors.header.social_text_hover_color,
        headerSocialTextDefaultBG: colors.header.social_text_default_bg,
        headerSocialTextHoverBG: colors.header.social_text_hover_bg,
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