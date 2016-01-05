# gulpfile  
LiveReload gulpfile  
gulp实现页面修改自动重新加载

## 解决问题  
 - 在写前端界面代码时，想调试的时候需要配置一个Apache或者Nginx服务器  
 - 每次修改代码都需要刷新一下，验证效果  

## 切换淘宝镜像加速  
 - npm http://npm.taobao.org/  
 - npm install -g nrm  
 - nrm use taobao  

## 切换node版本nrm  
 - npm install -g nrm  
 - nrm ls //查看node所有版本  
 - nrm use {verision}  

## 使用问题
 - Local gulp not found in ~ Try running: npm install gulp
 - npm install gulp -g 安装的是 gulp 的命令行工具
 - 使用gulp的时候，还需要为项目安装可以使用的 gulp，在项目的根目录下面执行：npm install gulp

## 2016.1.4 update
[browser-sync](http://www.browsersync.cn/)不需要借助浏览器插件可以实现服务器刷新
前端的工具演化真快，目测此贴可以演变为前端工具演化史==

		//gulpfile.js
		var gulp = require('gulp');
		var browserSync = require('browser-sync');

		gulp.task('browser-sync', function() {
		    browserSync({
		        files: "**",
		        server: {
		            baseDir: "./"
		        }
		    });
		});

		gulp.task('default', ["browser-sync"]);
