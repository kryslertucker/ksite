var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('public/css/'))
});

gulp.task('styles:watch', function () {
  gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('start', ['styles', 'styles:watch']);