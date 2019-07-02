# backguoundCmd-TS

#### 项目由backguoundCmd重构 主功能基本一致 
[https://github.com/loveburning/backguoundCmd](link "Optional title")

#### 项目简介
* 根据文件夹下的txt文本 读取文件后 生成所需的封面图和标题图片
* 图片生成 引入gm组件 服务器上需要安装GraphicsMagick库
* 项目在原有基础上进行重构 新增了封面图的随机 取消了读取id指定生成图片
* -i 属性为根据传入的值 判断文本内没有出现的id不执行 没有实现 保留了该属性 方便以后新增功能 在原版上有该功能

#### 目录结构
* dist      =>    打包后文件
* src       =>    源码
* static    =>    静态文件

#### 安装方式
```
yarn
```

#### 打包方式
* 打包后 存放在dist目录下
```
npm run build
```

#### 执行方式
```
node index.js -p 项目路径 -i 0 
```

#### 学习
```
感谢 node-typescript-starter 制作者 提供了简洁的目录结构
```
* 学习ts后写的第一个脚本 有很多不足的地方 大佬们多多指点
* 本代码由node小菜狗制作
* 欢迎大佬多多指点 菜狗QQ:923398776

