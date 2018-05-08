var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglifyJs = require('gulp-uglifyjs'),
    cssNano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del');

gulp.task('pug', function() {
    return gulp.src("./src/*.pug")
        //.pipe(pug())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("./src"))
        .pipe(browserSync.stream());
});

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.sass')
        .pipe(sass().on('error', notify.onError({
            message: "<%= error.message %>",
            title: "Sass error!"
        })))
        .pipe(autoprefixer([
            'last 10 versions'
        ], {
            cascade: true
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('min-css', ['sass'], function() {
    return gulp.src('src/css/libs.css')
        .pipe(cssNano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src/css'));
});

gulp.task('min-js', function() {
    return gulp.src([
            'src/libs/jquery/dist/jquery.min.js',
            'src/libs/slick-carousel/dist/slick.min.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglifyJs())
        .pipe(gulp.dest('src/js'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'src'
        }
    });
});

gulp.task('watch', ['pug', 'browser-sync'], function() {
    gulp.watch('src/sass/**/*.sass', ['sass']);
    gulp.watch('src/**/*.pug', ['pug']);
    gulp.watch('src/js/**/*.js', browserSync.reload);
    gulp.watch('src/**/*.html', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('build', ['clean', 'min-css', 'min-js'], function() {
    var buildCss = gulp.src([
            'src/css/libs.min.css',
            'src/css/main.css'
        ])
        .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('src/js/**/*')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});
/*
npm i --save-dev gulp gulp-sass browser-sync gulp-concat gulp-uglifyjs gulp-cssnano gulp-rename gulp-autoprefixer del
*/