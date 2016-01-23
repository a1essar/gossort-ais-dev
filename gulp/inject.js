'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], function() {
    browserSync.reload();
});

gulp.task('inject', ['scripts', 'styles'], function () {
    var partialsInjectFile = gulp.src([path.join(conf.paths.tmp, '/serve/partials/templateCacheHtml.js'), path.join(conf.paths.tmp, '/serve/partials/simpleChatTemplateCacheHtml.js')], { read: false });

    var partialsInjectOptions = {
        starttag: '<!-- inject:partials -->',
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
        addRootSlash: false
    };

    var injectStyles = gulp.src([
        path.join(conf.paths.tmp, '/serve/app/**/*.css'),
        path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
    ], { read: false });

    var injectScripts = gulp.src([
        path.join(conf.paths.tmp, '/serve/app/**/*.module.js')
    ], { read: false });

    var injectOptions = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.src, '/*.html'))
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe($.inject(partialsInjectFile, partialsInjectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
