const { stream, notify } = require('browser-sync');
const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserSync = require ('browser-sync').create();
const terser = require ('gulp-terser');
const concat = require ('gulp-concat');
const rename = require ('gulp-rename');

gulp.task('scss', function(){
    return gulp.src("src/scss/**/style.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest("./src/css/"))
    .pipe(browserSync.reload({stream: true}))
});

// gulp.task('js', function(){
//     return gulp.src([LIBRARIES])
//     .pipe(concat('libs.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./dist/js'))
//     .pipe(browserSync.reload({stream: true}))
// });

gulp.task('html', function(){
    return gulp.src("src/*.html")
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('scriptMain', function(){
    return gulp.src(["src/js/swiper-bundle.js",
                    "src/js/main.js"])
    .pipe(concat('main.min.js'))
    .pipe(terser())
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.reload({stream: true}))
});
gulp.task('scripts', function(){
    return gulp.src(["src/js/index.js",
                    "src/js/shop.js",
                    "src/js/shop-single.js",
                    "src/js/projects.js",
                    "src/js/blog.js",
                    "src/js/contact.js",
                    "src/js/blog-single.js"])
    .pipe(terser())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server:{
            baseDir: 'src/',
        },
        notify: false,
    });
}); 

gulp.task('build', function(){
    return gulp.src([
        'src/css/style.min.css',
        'src/fonts/**/*',
        'src/js/main.min.js',
        'src/js/index.min.js',
        "src/js/shop.min.js",
        "src/js/shop-single.min.js",
        "src/js/projects.min.js",
        "src/js/blog.min.js",
        "src/js/contact.min.js",
        "src/js/blog-single.min.js",
        'src/*.html',
        'src/**/*.png',
        'src/**/*.jpg',
    ], {base : 'src'})
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function(){
    gulp.watch('src/scss**/*.scss', gulp.parallel('scss'));
    gulp.watch('src/*.html', gulp.parallel('html'));
    gulp.watch('src/js/main.js', gulp.parallel('scriptMain'));
    gulp.watch('src/js/index.js', gulp.parallel('scripts'));
    gulp.watch('src/js/shop.js', gulp.parallel('scripts'));
    gulp.watch('src/js/shop-single.js', gulp.parallel('scripts'));
    gulp.watch('src/js/projects.js', gulp.parallel('scripts'));
    gulp.watch('src/js/blog.js', gulp.parallel('scripts'));
    gulp.watch('src/js/blog-single.js', gulp.parallel('scripts'));
    gulp.watch('src/js/contact.js', gulp.parallel('scripts'));
})

gulp.task('default', gulp.parallel('browser-sync', 'watch'))