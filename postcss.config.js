module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss({
      content: ["./public/*.html"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
