const gulp = require('gulp')
const run = require('gulp-run-command').default

/**
 * HTML Tasks
 */
gulp.task('html:compile', run('eleventy'))

gulp.task('html', ['html:compile'])

/**
 * CSS Tasks
 */
gulp.task('css:compile', ['html'], () => {
  return gulp.src('src/styles.css')
    .pipe(require('gulp-postcss')([
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer'),
    ]))
    .pipe(gulp.dest('dist'))
})

gulp.task('css', ['css:compile'])

/**
 * Default
 */
gulp.task('default', ['html', 'css'])
