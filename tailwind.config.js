const plugin = require("tailwindcss/plugin");
const forms = require("@tailwindcss/forms");
const lineClamp = require("@tailwindcss/line-clamp");
const aspectRatio = require("@tailwindcss/aspect-ratio");

const customPlugins = plugin(({ addComponents, addUtilities, addVariant }) => {
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

  addComponents({
    ".container": {
      width: "100%",
      maxWidth: "1024px",
      padding: "0 1.5rem",
      margin: "0 auto",
    },
  });

  addVariant("under", "& > *");
});

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: "#6667AB",
      },
      transitionTimingFunction: {
        "both-xl": "cubic-bezier(0.75, 0, 0.25, 1)",
      },
    },
  },
  plugins: [forms, lineClamp, aspectRatio, customPlugins],
};
