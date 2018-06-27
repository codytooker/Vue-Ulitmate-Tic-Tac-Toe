module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-nested')(),
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer')(),
    require('@fullhuman/postcss-purgecss')({
      content: ['**/*.vue'],
      css: ['src/styles/main.css']
    })
  ]
}
