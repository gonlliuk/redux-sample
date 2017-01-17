import gulp from 'gulp'
import path from 'path'
import util from 'gulp-util'
import plumber from 'gulp-plumber'
import server from 'gulp-develop-server'
import ngAnnotate from 'gulp-ng-annotate'
import webpackStream from 'webpack-stream'

import options from './webpack.config.js'

gulp.task('default', ['js', 'html'], () => {
	server.listen({
        path: './server.js'
    }, () => {
        util.log(util.colors.red.bold(':: DEBUG MODE ::'))
    });
})

gulp.task('js', callback => {
	return gulp.src('./src/js/*')
        .pipe(plumber())
        .pipe(webpackStream(options))
        .pipe(gulp.dest('dist/js'))
        .on('data', () => {
            if (!callback.called) {
                callback.called = true;
                callback();
            }
        });
})

gulp.task('html', () => {
	return gulp.src('./src/html/*')
        .pipe(gulp.dest('dist/'))
})
