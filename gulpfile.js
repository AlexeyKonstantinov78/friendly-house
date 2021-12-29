import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpCssimport from 'gulp-cssimport';
import del from 'del';

//задачи 

export const html = () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
    };

export const css = () => {
    return gulp.src('src/css/index.css')
        .pipe(gulpCssimport({
            extensions: ['css'],
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
    };

export const js = () => {
    return gulp.src('src/js/**/*.js')    // так как у енас несколько файлов а не модули
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
    };

export const copy = () => {
    return gulp.src([
        'src/fonts/**/*',
        'src/img/**/*.{png,jpg,jpeg,svg}'
    ], {
        base: 'src'
    })
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream({
        once: true,
    }));
};

export const server = () => {
    browserSync.init({
        ui: false,
        notify: false,
        tunnel: false,
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch('./src/**/*.html', html); // отслеживание и запуск изменения
    gulp.watch('./src/**/*.css', css);
    gulp.watch('./src/**/*.js', js);
    gulp.watch(['./src/**/*.{png,jpg,jpeg,svg}','./src/fonts/**/*'], copy);
};


export const clear = () => {
    return del('dist/**/*', {forse: true,});
};

// запуск
export const base = gulp.parallel(html, css, js, copy);

export const build = gulp.series(clear,  base);

export default gulp.series(base, server);

