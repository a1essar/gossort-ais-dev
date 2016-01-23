'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');


var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var browserSync = require('browser-sync');

gulp.task('partials', ['partials-chat', 'markups'], function () {
    return gulp.src([
        path.join(conf.paths.src, '/app/**/*.html'),
        path.join(conf.paths.tmp, '/serve/app/**/*.html')
    ])
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.angularTemplatecache('templateCacheHtml.js', {
            module: 'aisTemplates',
            root: 'app'
        }))
        .pipe(gulp.dest(conf.paths.tmp + '/partials/'))
        .pipe(gulp.dest(conf.paths.tmp + '/serve/partials/'));
});

gulp.task('partials-chat', function () {
    return gulp.src([
        path.join(conf.paths.src, '/app/components/chat/*.html'),
    ])
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.angularTemplatecache('simpleChatTemplateCacheHtml.js', {
            module: 'irontec.simpleChat'
        }))
        .pipe(gulp.dest(conf.paths.tmp + '/partials/'))
        .pipe(gulp.dest(conf.paths.tmp + '/serve/partials/'));
});

gulp.task('partials-reload', ['partials'], function() {
    browserSync.reload();
});

