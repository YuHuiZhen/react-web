import React from "react";
import './index.less'

export default function Loading (props){
  // loading 效果 
  // toDo 包含一个组件 如果数据加载完成 则展示组件 / 否则在当前容器垂直水平居中loading效果
  return (
    <div className="loading">
      <span className="loading__circle loading__circle--1"></span>
      <span className="loading__circle loading__circle--2"></span>
      <span className="loading__circle loading__circle--3"></span>
      {props.children}
    </div>
  )
}