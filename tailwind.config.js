const plugin = require("tailwindcss/plugin");
const forms = require("@tailwindcss/forms");
const lineClamp = require("@tailwindcss/line-clamp");
const aspectRatio = require("@tailwindcss/aspect-ratio");

const customPlugins = plugin(({ addUtilities, addVariant }) => {
  addUtilities({
    ".flex-center": {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    },
    ".bg-radial-gradient": {
      "background-image": "radial-gradient(circle, var(--tw-gradient-stops));",
    },
  });

  addVariant("under", "& > *");
});

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6667AB",
      },
    },
  },
  plugins: [forms, lineClamp, aspectRatio, customPlugins],
};
