const gulp = require('gulp');
const ts = require('gulp-typescript');

//project typescript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('build', () => {
	const tsResult = tsProject.src()
		.pipe(tsProject());
	return tsResult.js.pipe(gulp.dest('build'));
});

gulp.task('watch', ['build'], () => {
	gulp.watch('src/**/*.ts');
});

gulp.task('default', ['watch']);
