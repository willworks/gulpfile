/**
 * 切换淘宝npm http://npm.taobao.org/
 * npm install -g nrm
 * nrm use taobao
 * 组件安装
 * npm install gulp -g
 * npm install -g gulp-connect
 * npm install gulp-connect --save-dev
 * chrome安装LiveReload https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
 * npm i livereload -g
 */

//引入插件
var gulp = require('gulp');//引入基础库
var connect = require('gulp-connect');//gulp-connect为gulp插件，用于启动一个Web Server

//创建watch任务去检测html文件,其定义了当html改动之后，去调用一个Gulp的Task
//以下三个目录要一致，服务器目录，监测目录和重载目录
gulp.task('watch', function () {
  gulp.watch(['./www/*.html'], ['html']);// 监测目录
});

//使用connect启动一个Web服务器
gulp.task('connect', function () {
  connect.server({
    root: 'www', //服务器目录
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./www/*.html') //重新加载目录
    .pipe(connect.reload());
});

//运行Gulp时，默认的Task
gulp.task('default', ['connect', 'watch']);