module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [
    "prettier-plugin-organize-imports",
    import("prettier-plugin-tailwindcss"),
  ],
};
