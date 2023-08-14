/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export const content = ['./src/**/*.{html,js}'];
export const theme = {
  colors: {
    orange: '#fb7413',
    gray: {
      light: '#959eac',
      medium: '#7c8798',
      dark: '#29313d',
    },
    blue: {
      dark: '#252d37',
      harsh: '#121417',
    },
    black: colors.black,
    white: colors.white,
    red: colors.red,
  },
  extend: {
    fontFamily: {
      overpass: "'Overpass', sans-serif",
    },
    fontSize: {
      base: '0.938rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
};
export const plugins = [];
