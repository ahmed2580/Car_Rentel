
const gulp =require('gulp');
// const imagemin = require('gulp-imagemin');
const uglify =require('gulp-uglify');
const sass =require('gulp-sass');
// // const rename =require('gulp-rename');
// const conact = require('gulp-concat');
const browserSync = require ('browser-sync').create();



// concat,  minified and

gulp.task('uglify',function () {
  gulp.src('src/script/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('des/script'))
  .pipe(browserSync.stream());
});


// copy the HTML files to dist folder  (this com used in terminal "gulp copyHTML")

gulp.task('copyHTML',function() {
  gulp.src('src/*.html')
  .pipe(gulp.dest('des'))
  .pipe(browserSync.stream());
})


// compiter for sass
gulp.task('sass',function () {
  gulp.src('src/sass/*.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('des/css/'))
  .pipe(browserSync.stream());
});
//   Browser Sync...
gulp.task('browser-sync', function() {
    browserSync.init({
          server: './des/',
          open: false,
          notify: false
      });
});

gulp.task('default',['uglify','copyHTML','sass','browser-sync','watch']);

// function watch

gulp.task('watch',function () {
  gulp.watch('src/script/*.js',['uglify']);
  gulp.watch('src/sass/*.scss',['sass']);
  gulp.watch('src/*.html',['copyHTML']);
})
