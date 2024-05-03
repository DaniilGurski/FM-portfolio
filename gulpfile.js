const {src, dest, watch, series, parallel} = require("gulp");
const fs = require("fs");
const browserSync = require("browser-sync").create();

const scss        = require("gulp-sass")(require("sass"));
const clean       = require("gulp-clean");
const plumber     = require('gulp-plumber');
const newer       = require("gulp-newer");
const notify      = require("gulp-notify");
const concat      = require("gulp-concat");
const uglify      = require("gulp-uglify-es").default;

const webp        = require("gulp-webp");
const sprite      = require("gulp-svg-sprite");
const imagemin    = require("gulp-imagemin"); 

const srcPath     = "src/";
const destPath    = "dist/";


function plumberNotify(Errortitle) {
    return {
        errorHandler: notify.onError({
            title: Errortitle,
            message: "Error: <%= error.message %>",
            sound: false
        })
    }
}


function buildScripts() {
    return src(`${srcPath}js/**/*.js`, {sourcemaps: true})
    .pipe(concat("main.min.js"))
    .pipe(uglify())

    .pipe(dest(`${destPath}js`))

    .pipe(browserSync.stream())
}


function buildStyles() {
    return src(`${srcPath}scss/**/*.scss`, {sourcemaps: true})
        .pipe(plumber(plumberNotify("SCSS")))
        .pipe(scss())

        .pipe(dest(`${destPath}css`, {sourcemaps: "."}))
        
        .pipe(browserSync.stream())
}


function optimizeImages() {
    return src(`${srcPath}img/**/*`, `!${srcPath}img/**/*.svg`)

        .pipe(newer(`${destPath}img/`))
        .pipe(webp())

        .pipe(src(`${srcPath}img/**/*`)) 
        .pipe(newer(`${destPath}img/`))
        .pipe(imagemin({verbose: true}))

        .pipe(dest(`${destPath}img`))
}


function cleanDest(done) { 
    if (fs.existsSync(`${destPath}`)) {
        return src(`${destPath}`, {read: false})
            .pipe(clean({force: true}))
    }

    done(); 
}


function browserSyncServer(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    done();
}


function watchTasks() {
    watch([`${srcPath}scss/**/*.scss`, "*.html"], buildStyles);
    watch([`${srcPath}js/**/*.js`], buildScripts).on("change", browserSync.reload);

    watch([`${srcPath}img`], optimizeImages)
    
    watch(["*.html"]).on("change", browserSync.reload);
}


exports.default = series(
    cleanDest, 
    buildStyles, 
    buildScripts, 
    optimizeImages,
    parallel(browserSyncServer, watchTasks)
);
