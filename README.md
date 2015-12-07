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

## 组件安装
 - npm install gulp -g  
 - npm install -g gulp-connect  
 - npm install gulp-connect --save-dev  
 - chrome安装LiveReload https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei  
 - npm install livereload -g  

## 使用问题
 - Local gulp not found in ~ Try running: npm install gulp
 - npm install gulp -g 安装的是 gulp 的命令行工具
 - 使用gulp的时候，还需要为项目安装可以使用的 gulp，在项目的根目录下面执行：npm install gulp