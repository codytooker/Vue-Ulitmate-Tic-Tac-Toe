module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-nested')(),
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer')(),
    require('@fullhuman/postcss-purgecss')({
      content: ['public/index.html', '**/*.vue'],
      css: ['src/styles/main.css'],
      whitelistPatterns: [/^fade.*/]
    })
  ]
}
