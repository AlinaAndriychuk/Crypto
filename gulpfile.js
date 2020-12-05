let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    $ = require('jquery');

gulp.task('scss', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task('js', function(){
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/gsap/dist/gsap.min.js'
    ]) 
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream:true}))
})

gulp.task('html', function(){
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('script', function(){
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/*.html', gulp.parallel('html'))
});

gulp.task('default', gulp.parallel('scss', 'script', 'browser-sync', 'watch'))



