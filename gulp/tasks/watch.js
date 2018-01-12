var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-Sync').create();

gulp.task('default', function() {

  //auto refresh the browser
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  // watch for html changes
  gulp.watch('./app/index.html', function(){
    browserSync.reload();
  });

  // watch for CSS changes
  gulp.watch('./app/assets/styles/**/*.css', function() {
    // run styles upon changes
    gulp.run('cssInject');
  });
});

gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});
