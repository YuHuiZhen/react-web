# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### routes
react-router-dom && dva 

### 一些用到的插件
classname
less


<!-- todo -->
单页面跳转问题：forEach没有返回值
为什么样式不生效 ---less create-react-app不支持 需要自己配置

<!-- 卡到哪啦？ -->
单例模式模式 + 闭包 实现 登陆弹框 + ts （登陆载荷要加密） 调用务必带上时间戳,防止缓存
登录数据怎么拿不到呀呀呀呀呀？？？

实现向右移动滑块 完成拼图效果
音乐卡片 && 播放条 

&& mobx 状态控制 && css控制样式

<!-- 流程 -->

1. 进入系统 判断是否有cookie（cookie缓存一定时间（待定）） 没有cookie则弹框是否需要登录 下方提示：是否使用游客模式
2. 是 则扫描二维码登录 游客登录则使用游客cookie 
3. 接口慢时增加loading效果 （自己画一个loading）

react Props 传递函数 和 传递组件

通用组件 ：
BlockContent 包含 【header】 与 【Content】
样式透传控制 宽 && 高 && hover效果 
歌曲详情页 黑胶效果 

暂定SPA
固定展示 Header / Footer / SiderBar 
路由随着内容改变 Content