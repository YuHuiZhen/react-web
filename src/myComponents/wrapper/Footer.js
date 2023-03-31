import React from 'react'
import { footerLinks } from './footConstants'

export default function Footer() {
  const AContent = (props) => {
    console.log('props',props)
    const { link, content, blankTarget = true } = props
    return (
        <a className='a-link' href={link} target={blankTarget ? '_blank' : ''} rel="noreferrer">
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
          {footerLinks.map((i, index) => {
            console.log('i',i)
            return <AContent {...i} key={index} />
          })}
        </div>
      </div>
    </>
  )
}
