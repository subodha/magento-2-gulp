/**
 * Magento 2 Gulp integration
 *
 * @see https://github.com/subodha/magento-2-gulp#readme
 * @see README.md for installation and how-to instructions
 */

/* ==========================================================================
 *  Required modules
 * ========================================================================== */
var gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-cssmin'),
    livereload = require('gulp-livereload'),
    gulpif = require('gulp-if'),
    exec = require('child_process').exec;
require('colors');

/* ==========================================================================
 * Global configs of Magento 2
 * ========================================================================== */
// If you are using Magento 2.2.1 or lower comment below two lines
var filesRouter = require('./dev/tools/grunt/tools/files-router');
filesRouter.set('themes', './dev/tools/grunt/configs/themes');

var themesConfig = require('./dev/tools/grunt/configs/themes');

/* ==========================================================================
 * Variables
 * ========================================================================== */

// Get all arguments
var devArguments = [];
for (i = 3; i <= process.argv.length - 1; i++) {
    if (!process.argv[i]) {
        return false;
    } else {
        var argument = process.argv[i].toString().replace('--', '');
        devArguments.push(argument);
    }
}

// Get theme name from Array of arguments
var themeName = devArguments[0];
var sourceMapArg = devArguments.indexOf("map");
var minCssArg = devArguments.indexOf("min");
var liveReload = devArguments.indexOf("live");

// Array with less files of the theme
var lessFiles = [];
var path, i;

/*
 * If no arguments in command
 * Get all themes, create paths for less files and push them to the Array.
 */
if (!themeName) {
    for (i in themesConfig) {
        // Create path
        path = './pub/static/' + themesConfig[i].area + '/' + themesConfig[i].name + '/' + themesConfig[i].locale + '/';

        // Push names of less files to the Array
        for (var j in themesConfig[i].files) {
            lessFiles.push(path + themesConfig[i].files[j] + '.' + themesConfig[i].dsl);
        }
    }
}

// Get certain theme, create paths for less files and push them to the Array.
else {
    // Create path
    path = './pub/static/' + themesConfig[themeName].area + '/' + themesConfig[themeName].name + '/' + themesConfig[themeName].locale + '/';

    // Push names of less files to the Array
    for (i in themesConfig[themeName].files) {
        lessFiles.push(path + themesConfig[themeName].files[i] + '.' + themesConfig[themeName].dsl)
    }
}

/* ==========================================================================
 * Gulp functions
 * ========================================================================== */

function swallowError(error) {
    console.log(error.toString())
    this.emit('end')
}

/* ==========================================================================
 * Gulp tasks
 * ========================================================================== */

// Less task
gulp.task('less', function () {
    // Console info
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    console.log('Running \x1b[36mLess\x1b[0m compilation for \x1b[36m' + lessFiles.length + ' files:\x1b[0m');

    for (var i in lessFiles) {
        console.log('\x1b[32m', lessFiles[i], '\x1b[0m');
    }

    // Get Array with files
    return gulp.src(lessFiles)

        // Source map
        .pipe(gulpif(sourceMapArg >= 0, sourcemaps.init()))

        // Less compilation
        .pipe(less()).on('error', swallowError)

        // Minify css
        .pipe(gulpif(minCssArg >= 0, cssmin()))

        .pipe(gulpif(sourceMapArg >= 0, sourcemaps.write('.')))

        // Destination folder
        .pipe(gulp.dest(path + 'css/'))

        // Live reload
        .pipe(gulpif(liveReload >= 0, livereload()));
});

// Watcher task
gulp.task('watch', function () {
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    console.log(' Watching:\x1b[32m', themesConfig[themeName].area + '/' + themesConfig[themeName].name, '\x1b[0m');

    if (liveReload > 0) {
        console.log(' LiveReload:\x1b[32m', ' enabled', '\x1b[0m');
        livereload.listen();
    }

    console.log('\x1b[32m', '====================================', '\x1b[0m');

    gulp.watch([path + '**/*.less'], gulp.series('less'));
});

// Exec task
gulp.task('exec', function (cb) {

    if (themeName) {
        exec('php bin/magento dev:source-theme:deploy --locale="' + themesConfig[themeName].locale + '" --area="' + themesConfig[themeName].area + '" --theme="' + themesConfig[themeName].name + '" ' + themesConfig[themeName].files.join(' '), function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
            console.log('Success!'.green);
        });
    } else {
        console.log('Please add your defined Theme  ex: --luma'.red);
        cb();
    }
});

// Static content deploy task
gulp.task('deploy', function (cb) {
    if (themeName) {
        exec('php bin/magento setup:static-content:deploy ' + themesConfig[themeName].locale + '', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
    } else {
        console.log('Please add your defined Theme  ex: --luma'.red);
        cb();
    }
});

// Cache flush task
gulp.task('cache-flush', function (cb) {
    exec('php bin/magento cache:flush', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

// Clean static files cache
gulp.task('clean', function (cb) {
    if (themeName) {
        exec('rm -rf var/cache var/view_preprocessed pub/static/' + themesConfig[themeName].area + '/' +
            themesConfig[themeName].name + '/',
            function (err, stdout, stderr) {
                console.log(stdout);
                console.log(stderr);
                cb(err);
            });
    } else {
        console.log('Please add your defined Theme  ex: --luma'.red);
        cb();
    }
});

// Default task. Run compilation for all themes
gulp.task('default', gulp.series('less'));

// Clean, build, compile
gulp.task('build', gulp.series('clean', 'exec', 'less'));
