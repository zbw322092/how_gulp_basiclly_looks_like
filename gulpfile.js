var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

gulp.task('less', function() {
	gulp.src('client/stylesheets/*.less')
		.pipe(plugins.less())
		.pipe(gulp.dest('public'));
});

gulp.task('uglify', function() {
	options = {
		preserveComments: 'all'
	};

	gulp.src('client/scripts/*.js')
		.pipe(plugins.uglify(options))
		.pipe(gulp.dest('public'));
});

gulp.task('miniHtml', function() {
	gulp.src('client/views/*.html')
		.pipe(plugins.htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('public'));
});

gulp.task('default', function() {
	console.log('Welcome to Gulp, have fun.');
});

gulp.task('build', function() {
	var watcher = gulp.watch('client/views/*.html', ['miniHtml']);
	watcher.on('change', function (event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});



















