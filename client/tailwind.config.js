/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements-react/dist/js/**/*.js"
];
export const theme = {
  extend: {},
};
export const darkMode = "class";
export const plugins = [require("tw-elements-react/dist/plugin.cjs")];