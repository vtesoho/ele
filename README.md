#### 仿饿了么练手的项目

#### 说明

最初学习vue的时候写过这个项目，现在前端发展日新月异，需要经常练手，也是想学点知识，主要是想学学typescript，也比较喜欢vue框架，就把vue和typescript结合起来重构了这个项目


#### 一些吐槽
以前用sublime的写没什么问题，但不知道从什么时候开始，安装插件的时候经常出问题，这个项目用了eslint、tslint做检查，需要安装这些插件来编辑器里面做检查提示和代码提示，虽然通过下载package包的json文件，本地起一个服务能行，但感觉麻烦了。转投了cs code的怀抱。

安装插件酣畅淋漓，以前用eslint来检查没什么问题，但和tslint同时检查就出了问题，好不简单把配置改成相同了，发现了一个好东西“prettier”，代码格式化工具插件，保存的时候直接强制格式化，刚开始用起来觉得看不太顺眼，但prettier的很多规则是不能配置的，eslint和tslint能自定义的太多，造成多人开始起来还是会出现一定问题。用prettier就解决了。

vs code用起来什么都好，就是占内存。


项目体验地址

[https://www.lanrenkeji.win/ele](https://www.lanrenkeji.win/ele)

技术栈
```
mvvm框架：      Vue.js （版本2.x）
UI框架 ：       cube-ui
语法检查：       eslint + tslint
样式预处理：     stylus
服务端通讯：     axios
移动端滚动库：   better-scroll
构建工具：       webpack
源码：          es6
环境配置:       node 8+ npm 5+
```


还是老规矩，生产环境必须运行prod.server.js文件

```
node prod.server.js
```

