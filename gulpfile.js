var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); //Подключаем Sass пакет
    plumber = require('gulp-plumber');
    notify = require('gulp-notify');

gulp.task('sass', function(){ // Создаем таск "sass"
        gulp.src('sass/*.sass') // Берем источник
	       .pipe(plumber({ errorHandler: function(err) {
            notify.onError({
                title: "Gulp error in " + err.plugin,
                message:  err.toString()
            })(err);
        }}))
        .pipe(sass())
        .pipe(plumber.stop())
        .pipe(gulp.dest('css')) // Выгружаем результата в папку app/css
});
gulp.task('watch', function() {
    gulp.watch('sass/*.sass', ['sass']);
});

// var less = require('gulp-less');

// gulp.task('lesss', function () {
//     return gulp.src('css/*.less')
//         .pipe(less())
//         .pipe(gulp.dest('css'));
// });