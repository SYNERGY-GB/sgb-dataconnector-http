'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var path = require('path');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


gulp.task('build', function () {

    var filename = path.resolve('src', 'sgb-dataconnector-http.js');
    var b = browserify({
        entries: filename
    });

    return b.bundle()
        .pipe(source('sgb-dataconnector-http.js'))
        .pipe(buffer())
        .pipe(gulp.dest('dist'));
});