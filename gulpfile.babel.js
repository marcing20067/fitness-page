import gulp from 'gulp';
import sass from 'gulp-sass';
import cleancss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import mergefiles from 'gulp-concat';
import rename from 'gulp-rename';
import minify from 'gulp-minify'
import browserSync from 'browser-sync';
import gulpBabel from 'gulp-babel';
const sync = browserSync.create();
const reload = sync.reload;

function server() {
    return sync.init({
        server: {
            baseDir: "./"
        }
    });
};

gulp.task('sass', (done) => {
    gulp.src(['./src/sass/*.scss'])
        .pipe(sass()).on("error", () => console.log("Coś nie pykło"))
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./dist/css'))
    reload()
    done()
})

function refresh(done) {
    reload()
    done()
}

gulp.task('js', (done) => {
    gulp.src([
        './src/js/scroll.js',
        './src/js/main.js',
        './src/js/slider.js'
    ])
        .pipe(mergefiles('main.js'))
        .pipe(gulpBabel())
        .pipe(minify({
            noSource: true,
        }))
        .pipe(rename(function (path) {
            path.basename = "main.min";
        }))
        .pipe(gulp.dest('./dist/js'));
    reload()
    done()
});


gulp.task('build', gulp.series(['sass', 'js']));

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', gulp.series(['sass']));
    gulp.watch('./src/js/**/*.js', gulp.series(['js']));
    gulp.watch('./*.html', refresh);
    gulp.watch('./dist/images/icons/*.*', refresh)
    return server();
})

gulp.task('default', gulp.series(['build', 'watch']));
