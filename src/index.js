import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import dva from 'dva';
// import RouterConfig from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
// // 创建dva实例
// const app = dva();

// // 指定应用的根组件 
// app.router(RouterConfig);

// // 启动dva应用
// app.start('#root');


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
