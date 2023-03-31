import React from 'react'
import {footerLinks} from './footConstants'

export default function Footer() {
  const aContent = (props) => {
    const { link, content, blankTarget = true } = props
    return (
      <a href={link} target={blankTarget ? '_blank' : ''} rel="noreferrer">
        {content}
      </a>
    )
  }
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-contents">
          {/* 这是一段提醒 */}
          <p>CopyRight</p>
            {/* 这是一些相关跳转链接 */}
          {footerLinks.forEach((i)=>{
            aContent(i);
          })}
        </div>
      </div>
    </>
  )
}
