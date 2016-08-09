/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

gulp.task('default',['watchfortemplates'], function () {
    console.log('watching');
});


gulp.task('templatesmodule', function () {
    var fc2modules = require('gulp-file-contents-to-modules');
    gulp.src('./App/Templates/*.html')
      .pipe(fc2modules({
          compile : true, 
          minify  : true, 
      }))
      .pipe(concat('template.js'))
      .pipe(gulp.dest('./App/Templates/'));
})

gulp.task('watchfortemplates', function () {
    return gulp.watch('./App/Templates/*.html', ['templatesmodule']);
})