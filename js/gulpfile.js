const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () =>
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img/'))
);