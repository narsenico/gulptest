var gulp = require('gulp');
var debug = require('gulp-debug');
var del = require('del');
var minify = require('gulp-minify');			//JS
var minifyHTML = require('gulp-minify-html');	//HMTL
var minifyCss = require('gulp-minify-css');		//CSS

//clean dist folder
gulp.task('clean', function() {
	console.log('*** clean dist ***');
	del('dist');
});

//minify only html files
gulp.task('minify-html', function() {
  gulp.src('src/**/*.htm')
  	.pipe(minifyHTML())
  	.pipe(debug({title: ' min html -> '}))
  	.pipe(gulp.dest('dist'));	
});

//minify only js files
gulp.task('minify-js', function() {
  gulp.src('src/**/*.js')
  	.pipe(minify())
  	.pipe(debug({title: ' min js -> '}))
  	.pipe(gulp.dest('dist'));	
});

//minify only css files
gulp.task('minify-css', function() {
  gulp.src('src/**/*.css')
  	.pipe(minifyCss())
  	.pipe(debug({title: ' min css -> '}))
  	.pipe(gulp.dest('dist'));	
});

//task on images
gulp.task('images', function() {
	gulp.src('src/images/**/*', { base: 'src' })
		.pipe(debug({title: ' images -> '}))
		.pipe(gulp.dest('dist'));
});

//default task
//- clean dist
//- minify html, js, css
//- copy images
gulp.task('default', ['clean', 'minify-html', 'minify-js', 'minify-css', 'images'], function() {
	//
});